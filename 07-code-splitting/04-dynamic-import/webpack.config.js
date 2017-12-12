const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, './dist'),

    // chunkFilename 用以指定非入口 chunk 的命名规则
    // 异步 chunk 是非入口 chunk，因此将应用这条规则
    chunkFilename: '[name].bundle.js',

    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

module.exports = config;
