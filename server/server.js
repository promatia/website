
import './bootstrap/env.js' //setup global ENV utility

import Koa from 'koa'
import sslify from 'koa-sslify'
import { createSecureServer } from 'http2'
import { createServer } from 'http'
import router from './routes/router.js'
import ssl from './bootstrap/ssl.js'
import { dbsetup } from './bootstrap/db.js'
import { models } from './models/graph.js'

async function startServer () {
    let app = new Koa()
    let httpServer = createServer(app.callback())
    let http2Server = createSecureServer({allowHTTP1: true}, app.callback())
    
    await dbsetup()
    await Promise.all(models.map(model => model.createIndexes ? model.createIndexes() : null))

    if(ENV.ssl.enabled) {
        app.use(await ssl(httpServer, http2Server)) //generate SSL certificate if one does not exist, or is expired
        app.use(sslify.default()) //enforce HTTPS
    }

    app.use((await router()).routes())

    httpServer.listen(80)
}

startServer().catch(err => {
    console.error(err)
})
