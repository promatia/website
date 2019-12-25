
import clientconfig from './webpack.client.js'
import serverconfig from './webpack.server.js'

import webpack from 'webpack'

async function main () {
    try {
        await new Promise((resolve, reject) => webpack([clientconfig, serverconfig]).run((err, stats) => {
            err ? reject(err) : resolve(stats)
        }))
        console.log('Compiled')
    } catch (error) {
        console.error(error)
    }
}

main()
