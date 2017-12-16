const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: ['@babel/polyfill', './src/index'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, loader: 'babel-loader',

        // 使用 include 配置项指定该 loader 的作用范围
        // 这里使用 babel-loader 来举例，只编译 ./src 目录中的 js 文件，而不编译 node_modules 中的 js 文件
        // 因为它们在正常情况下，它们都已经经过编译了
        // 但要注意的是，如果加载了未经编译的 package（例如未编译的私有组件库），就要将它加入 include 中了
        // 注释这条配置项并再次编译，可以看到两次编译时间的区别（10s+ 和 1s+）
        include: path.resolve(__dirname, './src')

      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

module.exports = config;
