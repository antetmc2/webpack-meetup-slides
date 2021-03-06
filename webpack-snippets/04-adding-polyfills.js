const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    module: {
        rules: [{
           test: /.(js|jsx)?$/,
           exclude: [path.join(__dirname, 'node_modules')],
           use: [{ // 'babel-loader' enough if we are not using any options
             loader: 'babel-loader',
             options: {
               presets: [
                 ['@babel/preset-env', {
                     targets: {
                        browsers: ['>= 0.25%', 'IE 11', 'since 2017', 'not op_mini all']
                     },
                     useBuiltIns: 'usage'
                 }]
               ]
             }
           }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack .NET meetup",
        }),
    ],
    devServer: {
        stats: 'errors-only',
        host: process.env.HOST, // Defaults to localhost
        port: process.env.PORT, // Defaults to 8080
        open: true, // Open the page in browser
    },
};