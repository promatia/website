const { createBundleRenderer } = require('vue-server-renderer')
const path = require('path')
const fs = require('fs')
const mime = require('mime')

const basedir = path.resolve(__dirname, '../../dist')

function statCheck(stat, headers){
    headers['content-length'] = stat.size
}

function pushFile(stream, path){
    stream.pushStream({ ":path": '/dist/' + path }, (err, pushStream) => {
        if(err) return
        
        pushStream.on('error', err => {
            return
        })

        pushStream.respondWithFile(`${basedir}/${path}`, {
            "content-type": mime.getType(path),
        }, { statCheck })
    })
}

function createRenderer(bundle, clientManifest) {
    return createBundleRenderer(bundle, {
        template: async (result, context) => {
            let stream = context.ctx.res.stream

            if(stream && stream.pushAllowed){ //use http2 push
                try {
                    context.getPreloadFiles().map(file => {
                        pushFile(stream, file.file)
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            
            return `
<!DOCTYPE html>
<html${ context.htmlattrs ? ' ' + context.htmlattrs : ''}>
    <head>
        ${ context.renderResourceHints()}
        <script>window.__INITIAL_STATE__ = JSON.parse('${JSON.stringify(context.state)}')</script>
        ${ context.head ? context.head : ''}
        ${ context.renderStyles()}
        ${ context.renderScripts() }
    </head>
    <body>
        ${ result }
    </body>
</html>`
        },
        clientManifest,
        inject: false,
        runInNewContext: true, //ensure SSR state is refreshed
        basedir
    })
}

let bundle = require('../../dist/vue-ssr-server-bundle.json')
let clientManifest = require('../../dist/vue-ssr-client-manifest.json')
let renderer = createRenderer(bundle, clientManifest)

module.exports = async () => {
    let middlewares = []
    let hotMiddleware
    if(ENV.environment === "development") hotMiddleware = await hotReloading()
    if(hotMiddleware) middlewares.push(hotMiddleware)

    middlewares.push(async (ctx, next) => {
        ctx.render = renderer.renderToString.bind(renderer)
        await next()
    })

    return middlewares
}

async function hotReloading(){
    const fs = require('fs')
    const webpack = require('webpack')
    const koaWebpack = require('koa-webpack')

    var clientconfig = require('../../webpack/webpack.client')
    var serverconfig = require('../../webpack/webpack.server')

    var clientCompiler = webpack(clientconfig)
    var serverCompiler = webpack(serverconfig)

    let middleware = await koaWebpack({
        compiler: clientCompiler,
        devMiddleware: {
            publicPath: "/dist/",
            noInfo: true,
            logLevel: 'error',
        }
    })

    clientCompiler.hooks.done.tap('done', ()=>{
        let mfs = middleware.devMiddleware.fileSystem
        let file = mfs.readFileSync(path.resolve(__dirname, '../../dist/vue-ssr-client-manifest.json'), 'utf-8')
        clientManifest = JSON.parse(file)
        renderer = createRenderer(bundle, clientManifest)
    })

    serverCompiler.inputFileSystem = fs

    serverCompiler.watch({}, ()=>{})

    serverCompiler.hooks.afterEmit.tap('afterEmit', ()=>{
        let file = fs.readFileSync(path.resolve(__dirname, '../../dist/vue-ssr-server-bundle.json'), 'utf-8')
        bundle = JSON.parse(file)
        renderer = createRenderer(bundle, clientManifest)
    })

    return middleware
}