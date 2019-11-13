const { createBundleRenderer } = require('vue-server-renderer')
const path = require('path')

function createRenderer(bundle, clientManifest) {
    return createBundleRenderer(bundle, {
        template: async (result, context) => {
            //console.log(context.getPreloadFiles()) http2 push these files

            return `<!DOCTYPE html>
<html${ context.htmlattrs ? ' ' + context.htmlattrs : ''}>
    <head>
        ${ context.head ? context.head : ''}
        ${ context.renderResourceHints()}
        ${ context.renderStyles()}
        ${ context.renderState({ windowKey: '__INITIAL_ROOTSTATE__', contextKey: 'state' })}
    </head>
    <body>
        ${ result }
        ${ context.renderScripts() }
    </body>
</html>`
        },
        clientManifest,
        inject: false,
        runInNewContext: true, //ensure SSR state is refreshed
        basedir: path.resolve(__dirname, '../../dist')
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