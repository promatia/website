
require('./bootstrap/env') //setup global ENV utility

const Koa = require('koa')
const ssl = require('./bootstrap/ssl')
const sslify = require('koa-sslify').default
const https = require('https')
const http = require('http')
const router = require('./routes/router')

async function startServer(){
    let app = new Koa()
    let httpsServer = https.createServer(app.callback())
    let httpServer = http.createServer(app.callback())
    
    if(ENV.ssl.enabled){
        app.use(await ssl(httpsServer)) //generate SSL certificate if one does not exist, or is expired
        app.use(sslify()) //enforce HTTPS
    }
    app.use((await router()).routes())

    httpServer.listen(80)
    if(ENV.ssl.enabled) httpsServer.listen(443)
}

startServer().catch(err => {
    console.error(err)
})