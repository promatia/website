import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import koaCookie from 'koa-cookie'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import mount from 'koa-mount'
import koastatic from 'koa-static'
import compress from 'koa-compress'
import { graphMiddleware } from '../models/graph.js'
import sessionToken from './middleware/sessionToken.js'

import {
    errorMiddleware,
    noWWW,
    renderer,
    redirectArkovia,
    stateContext
} from './middleware/index.js'

const router = new Router()
const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')
const staticDir = resolve(__dirname, '../../resources/public')

export default async () => router
    .use(compress())
    .use(stateContext)
    .use(errorMiddleware)
    .use(redirectArkovia)
    .use(noWWW)
    .use(koaCookie.default())
    .use(bodyParser())
    .use(sessionToken)
    .use(mount('/dist', koastatic(distDir), {maxage: 1000 * 60 * 60 * 1}))
    .use(await renderer())
    .use(koastatic(staticDir))
    .post('/graph/', graphMiddleware)
    .get('(.*)', async (ctx) => {
        ctx.body = await ctx.render({
            url: ctx.url,
            ctx,
            ENV: {
                domain: ENV.domain,
                token: ctx.state.token
            }
        })
    })
