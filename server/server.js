
require('./bootstrap/env') //setup global ENV utility

const Koa = require('koa')
const ssl = require('./bootstrap/ssl')
const sslify = require('koa-sslify').default
const http2 = require('http2')
const http = require('http')
const router = require('./routes/router')

async function startServer(){
    let app = new Koa()
    let httpServer = http.createServer(app.callback())
    let http2Server = http2.createSecureServer({allowHTTP1: true},app.callback())
    
    if(ENV.ssl.enabled){
        app.use(await ssl(httpServer, http2Server)) //generate SSL certificate if one does not exist, or is expired
        app.use(sslify()) //enforce HTTPS
    }
    app.use((await router()).routes())

    httpServer.listen(80)
}

startServer().catch(err => {
    console.error(err)
})