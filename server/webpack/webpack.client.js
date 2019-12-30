import merge from 'webpack-merge'
import base from './webpack.base.js'
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin.js'
import webpack from 'webpack'

export default merge(base, {
    entry: ['@/entry-client.js'],
    plugins: [
        new VueSSRClientPlugin()
    ],
    optimization: {
        splitChunks: {
            name: 'manifest',
            minChunks: Infinity
        }
    }
})
