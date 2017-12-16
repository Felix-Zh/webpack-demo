const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  src: path.resolve(__dirname, './src')
};

const config = {
  entry: {
    libs: ['jquery', 'lodash'],
    app: ['@babel/polyfill', './src/containers/App'],
    page2: ['@babel/polyfill', './src/containers/Page2']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  devServer: {
    hot: true
  },
  devtool: 'eval',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', include: PATHS.src },
      { test: /\.s?css$/, loader: ['style-loader', 'css-loader', 'sass-loader'], include: PATHS.src },
      { test: /\.(?:jpg|png|gif|svg)$/, use: { loader: 'url-loader', options: { limit: 2 * 1024 } }, include: PATHS.src }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]",
      include: './src'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/containers/App/index.html',
      chunks: ['manifest', 'libs', 'common', 'app']
    }),
    new HtmlWebpackPlugin({
      filename: 'page2.html',
      template: './src/containers/App/index.html',
      chunks: ['manifest', 'libs', 'common', 'page2']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'libs', 'manifest']
    })
  ]
};

module.exports = config;
