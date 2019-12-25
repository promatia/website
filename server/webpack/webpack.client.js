import merge from 'webpack-merge'
import base from './webpack.base.js'
import VueSSRClientPlugin from 'vue-server-renderer/client-plugin.js'

export default merge(base, {
    entry: ['@/entry-client.js'],
    plugins: [
        new VueSSRClientPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'manifest'
        }
    }
})
