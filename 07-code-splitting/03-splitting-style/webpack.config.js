const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


const config = {
  entry: {

    // 用于处理公共 CSS 的 common chunk
    // 注意 webpack 中 js 文件是一等公民，因此即使一个 chunk 中所有的 resource 都为 css
    // 也还是会生成 common.bundle.js 文件
    common: ['./node_modules/sanitize.css', './src/style/common.scss'],

    index: './src/containers/Index',
    page2: './src/containers/Page2'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,

        // 使用 extract-text-webpack-plugin 的 extract 方法代替以往的 loader 数组
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })

      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/containers/Index/index.html',
      chunks: ['common', 'index']
    }),
    new HtmlWebpackPlugin({
      filename: 'page2.html',
      template: './src/containers/Page2/index.html',
      chunks: ['common', 'page2']
    }),

    // 增加插件
    // 注意这里的 allChunks 配置，它允许将 additional chunks（例如 CommonsChunkPlugin 生成的 chunk）中的 CSS 也提取出来
    // 默认情况下它只提取 initial chunks（即 entry 中配置的 chunks）
    new ExtractTextWebpackPlugin({
      filename: '[name].css',
      allChunks: true
    })

  ]
};


module.exports = config;
