const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const koaCookie = require('koa-cookie')
const path = require('path')
const mount = require('koa-mount')
const koastatic = require('koa-static')

const sessionToken = require('./middleware/sessionToken')
const errorMiddleware = require('./middleware/errorMiddleware')
const noWWW = require('./middleware/noWWW')
const renderer = require('./middleware/renderer')

const router = new Router()

module.exports = async () => {
    return router
        .use(errorMiddleware)
        .use(noWWW)
        .use(koaCookie.default())
        .use(bodyParser())
        .use(sessionToken)
        .use(mount('/dist', koastatic(path.resolve(__dirname, '../dist'))))
        .use(await renderer())
        .use(koastatic(path.resolve(__dirname, '../../resources/public')))
        .get('(.*)', async (ctx) => {
            ctx.body = await ctx.render({
                url: ctx.url,
                ctx,
                ENV: {
                    domain: ENV.domain,
                }
            })
        })
}