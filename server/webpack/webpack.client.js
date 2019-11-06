const merge = require('webpack-merge')
const base = require('./webpack.base')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(base, {
    entry: ['@/entry-client.js'],
    plugins: [
        new VueSSRClientPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'manifest'
        }
    }
})
