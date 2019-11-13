function createContext({app, stream, headers}){
    return {
        app,
        stream,
        reqHeaders: headers,
        ':path': headers[':path'],
        ':method': headers[':method'],
        ':authority': headers[':authority'],
        url: {
            get(){
                headers[':path'].split('?', 1)[0]
            }
        },
        resHeaders: {
            ':status': undefined
        },
        sentHeaders: stream.sentHeaders,
        state: {},
        body: undefined
    }
}

class App {
    middlewares = []

    async handleStream(stream, headers){
        stream.respond({':status': 200})
        const ctx = createContext({app: this, stream, headers})
        stream.pushStream({':path': "/xxx"}, async (err, pushStream, headers) => {
            if(err) throw err
            pushStream.respond({ ':status': 200 })
            pushStream.end('lalala')
        })

        ctx.body = `<html><head><script src="/xxx"/></head><body>Test</body></html>`
        
        stream.end(ctx.body)
    }

    use(...functions){
        for(let index in functions){
            let fn = functions[index]
            if(typeof fn !== 'function') throw new Error(`middleware must be a function, item: ${index + 1})`)
            this.middlewares.push(fn)
        }
    }
}

module.exports = App