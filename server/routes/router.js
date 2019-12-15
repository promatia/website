import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import koaCookie from 'koa-cookie'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import mount from 'koa-mount'
import koastatic from 'koa-static'
import compress from 'koa-compress'

import {
    errorMiddleware,
    noWWW,
    renderer,
    redirectArkovia
} from './middleware/index.js'

const router = new Router()
const distDir = resolve(dirname(fileURLToPath(import.meta.url)), '../dist')
const staticDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../resources/public')

export default async () => {
    return router
        .use(compress())
        .use(errorMiddleware)
        .use(redirectArkovia)
        .use(noWWW)
        .use(koaCookie.default())
        .use(bodyParser())
        //.use(sessionToken)
        .use(mount('/dist', koastatic(distDir), {maxage: 1000 * 60 * 60 * 1}))
        .use(await renderer())
        .use(koastatic(staticDir))
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