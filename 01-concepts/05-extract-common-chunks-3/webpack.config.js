const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const config = {
  entry: {

    // 这里使用了字符串数组的形式来定义入口，数组中所有的模块将被打包为一个 chunk
    index: ['./src/pages/Index', './src/modules/init.js'],
    page2: ['./src/pages/Page2', './src/modules/init.js'],
    vendors: ['jquery', 'lodash']

  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/Index/index.html',
      filename: 'index.html',
      chunks: ['common', 'vendors', 'index']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/Page2/page2.html',
      filename: 'page2.html',
      chunks: ['common', 'vendors', 'page2']
    }),

    // 这里使用了数组的方式来配置 name 字段
    // 此时 index chunk 和 page2 chunk 都引入的 mod-a 和 mod-b 以及入口处定义的一起打包的 init 都会被打在 common chunk 中
    // 而又因为 jquery 和 lodash 已经被包含在 vendors 中，因此不会被打在 common 里
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common', 'vendors']
    }),

    new CleanWebpackPlugin('./dist')
  ]
};

module.exports = config;
