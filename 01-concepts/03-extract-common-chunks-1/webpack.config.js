const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const config = {
  entry: {
    index: './src/pages/Index',
    page2: './src/pages/Page2'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/Index/index.html',
      filename: 'index.html',
      chunks: ['common', 'index']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/Page2/page2.html',
      filename: 'page2.html',
      chunks: ['common', 'page2']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new CleanWebpackPlugin('./dist')
  ]
};

module.exports = config;
