
import clientconfig from './webpack.client.js'
import serverconfig from './webpack.server.js'

import webpack from 'webpack'

async function main () {
    try {
        let stats = await new Promise((resolve, reject) => webpack([clientconfig, serverconfig]).run((err, stats) => {
            err ? reject(err) : resolve(stats)
        }))
        if(stats.stats[0].hasErrors()){
            stats.toJson().errors.map(errs => console.error(errs))
        }
        console.log('Compiled')
    } catch (error) {
        console.error(error)
    }
}

main()
