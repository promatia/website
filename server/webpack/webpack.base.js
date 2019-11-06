require('../bootstrap/env') //global env

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

module.exports = {
    mode: ENV.environment,
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../../resources/'),
            "icons": path.resolve(__dirname, "../../node_modules/vue-material-design-icons/")
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    plugins: ['@babel/plugin-syntax-dynamic-import']
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    optimization: {
        minimize: ENV.environment === 'production'
    },
    stats: 'errors-warnings'
}