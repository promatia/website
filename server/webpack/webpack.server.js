import webpack from 'webpack'
import merge from 'webpack-merge'
import base from './webpack.base.js'
import nodeExternals from 'webpack-node-externals'
import VueSSRServerPlugin from 'vue-server-renderer/server-plugin.js'

export default merge(base, {
    target: 'node',
    entry: '@/entry-server.js',
    output: {
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2'
    },
    externals: nodeExternals({
        whitelist: /\.css$/
    }),
    plugins: [
        new webpack.DefinePlugin({
            'process.env.VUE_ENV': '"server"'
        }),
        new VueSSRServerPlugin()
    ]
})
