const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: {
    app: './src/index',
    another: './src/another'
  },
  output: {
    path: path.resolve(__dirname, './dist'),

    // chunkFilename 用以指定非入口 chunk 的命名规则
    // 异步 chunk 是非入口 chunk，因此将应用这条规则
    // 默认情况下，异步 chunk 的 [name] 是数字 id
    // 可以通过 import 时的 webpackChunkName 注释指定这个 [name]
    // 参见 ./src/index.js 和 ./src/another.js
    chunkFilename: '[name].bundle.js',

    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

module.exports = config;
