
require('./bootstrap/env')

const Koa = require('koa')
const ssl = require('./bootstrap/ssl')
const sslify = require('koa-sslify').default
const https = require('https')
const http = require('http')

async function startServer(){
    let app = new Koa()
    let httpsServer = https.createServer(app.callback())
    let httpServer = http.createServer(app.callback())
    
    if(ENV.useSSL){
        app.use(await ssl(httpsServer)) //generate SSL certificate if one does not exist, or is expired
        app.use(sslify()) //enforce HTTPS
    }

    app.use((ctx, next) => {
        ctx.body = "success"
    })

    httpServer.listen(80)
    httpsServer.listen(443)
}

startServer()