/**
 * Created by Administrator on 2017/8/2.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    // entry: './src/index.js',
    entry: {
        'index': path.resolve(__dirname, './src/index.js'),
        'com': ['vue', 'axios', 'vuex', 'vue-router']
    },
    // output: {
    //     path: path.resolve(__dirname, './dist'),
    //     publicPath: './dist/',
    //     filename: 'build.js'
    // },
    //HotModuleReplacementPlugin这个插件的publicPath路径写法要注意，路径会和它产生冲突
    output: {
        path: path.resolve(__dirname, './dist/'),//这个地方是打包的路径与热加载无关
        publicPath: 'dist/',
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
            ,
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            //引入iview的时候要配置webpack加入的东西
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader'
            },
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js'
        },
        extensions: ['.', '.js', '.vue']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//热启动插件必加
        new webpack.optimize.CommonsChunkPlugin({
            name: 'com',
            filename: '[name].min.js',
            minChunks: Infinity
        })
    ],
    // devServer: {
    // //webpack-dev-server
    //     historyApiFallback: true,
    //     noInfo: true,
    //     inline: true
    // },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
    //plugins:  new webpack.HotModuleReplacementPlugin()
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}