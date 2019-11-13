const http2 = require('http2')
const fs = require('fs')
const App = require('./app')

const { cert, key } = JSON.parse(fs.readFileSync(__dirname + '/sslData.json', 'utf8'))

let server = http2.createSecureServer({
    cert,
    key
})

let app = new App

server.on('stream', app.handleStream)

server.listen(443)