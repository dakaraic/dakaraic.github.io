const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js?[hash]'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?hash'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './static/index.html'
        }),
        new MiniCSSExtractPlugin({
            filename: 'bundle.css?[hash]'
        })
    ]
}