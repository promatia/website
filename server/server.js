
require('./bootstrap/env') //setup global ENV utility

const Koa = require('koa')
const ssl = require('./bootstrap/ssl')
const sslify = require('koa-sslify').default
const https = require('https')
const http2 = require('http2')
const http = require('http')
const router = require('./routes/router')

async function startServer(){
    let app = new Koa()
    let httpServer = http.createServer(app.callback())
    let httpsServer = https.createServer(app.callback())
    let http2Server = http2.createSecureServer(app.callback())
    
    if(ENV.ssl.enabled){
        app.use(await ssl(httpServer, httpsServer, http2Server)) //generate SSL certificate if one does not exist, or is expired
        app.use(sslify()) //enforce HTTPS
    }
    app.use((await router()).routes())

    httpServer.listen(80)
}

startServer().catch(err => {
    console.error(err)
})