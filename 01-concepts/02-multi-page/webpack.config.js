const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const config = {
  entry: {
    index: './src/pages/Index/index.js',
    page2: './src/pages/Page2/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),

    // 在多入口的情况下，不能使用一个固定的输出文件名
    // 而需要使用类似 [xxx] 这样的占位符来生成最终输出文件名
    filename: '[name].js'

  },
  plugins: [

    // 多次使用 html-webpack-plugin 来产出多个 html
    new HtmlWebpackPlugin({
      template: './src/pages/Index/index.html',
      filename: 'index.html',

      // 使用 chunks 字段来规定在 html 中引入哪些 chunk
      // 这里的 chunk 即 config.entry 对象的 key，或其他插件生成的 chunk
      chunks: ['index']

    }),
    new HtmlWebpackPlugin({
      template: './src/pages/Page2/page2.html',
      filename: 'page2.html',
      chunks: ['page2']
    }),

    new CleanWebpackPlugin('./dist')
  ]
};

module.exports = config;
