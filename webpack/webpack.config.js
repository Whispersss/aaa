const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        'zzz': './src/index.js'
    },
    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader',"css-loader"]
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[{
                    loader:'url-loader',
                options:{
                    limit:2097152,
                    outputPath:'img/'
                }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('index.css'),
        new HtmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/test.html'
        }),
    ],
    devServer: {
        // 设置基本路径结构
        contentBase: path.resolve(__dirname, 'dist'),
        // 服务器IP 可以使localhost
        host: 'localhost',
        // 是否开启服务器压缩
        compress: true,
        // 端口号
        port: 8081,
        open: true,
        hot: true
    },
    


}