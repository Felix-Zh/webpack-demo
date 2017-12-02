const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'style-loader' },
      { test: /\.css$/, use: 'css-loader' },

      // 使用 file-loader 来加载图片
      // 注意 file-loader 不会处理 html 中的图片（例如：<img src="xxx.jpg" />）
      { test: /\.(png|jpg|svg|gif)$/, use: 'file-loader' },

      // 使用 html-loader 来处理 html 文件中的图片
      { test: /\.html$/, use: 'html-loader' }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin('./dist')
  ]
};

module.exports = config;
