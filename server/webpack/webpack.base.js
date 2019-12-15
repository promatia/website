import '../bootstrap/env.js' //global env
import vueLoader from 'vue-loader'
import webpack from 'webpack'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const { VueLoaderPlugin } = vueLoader
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    mode: ENV.environment,
    output: {
        path: resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: ENV.environment === 'development' ? '[name].[hash].js' : '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve(__dirname, '../../resources/'),
            "icons": resolve(__dirname, "../../node_modules/vue-material-design-icons/")
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
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'image-webpack-loader',
                // Specify enforce: 'pre' to apply the loader
                // before url-loader/svg-url-loader
                // and not duplicate it in rules with them
                enforce: 'pre'
            }
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