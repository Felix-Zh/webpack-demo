const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');


const config = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    // uglifyjs-webpack-plugin 具有 tree-shaking 功能
    // 其他一些 loader 或插件例如 webpack-rollup-loader 和 babel-minify-webpack-plugin 也具有该功能
    new UglifyJsWebpackPlugin()

  ]
};

module.exports = config;
