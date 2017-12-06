const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [

      // 使用 loader 来处理 CSS
      // 事实上，对于 CSS 的模块热替换，并不需要做额外设置
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }

    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    
    // 之前提到的两个插件
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin('./dist')
  ]
};

module.exports = config;
