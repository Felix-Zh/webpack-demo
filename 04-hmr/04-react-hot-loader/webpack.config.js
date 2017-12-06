const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: [
    '@babel/polyfill',

    // 注意这里需要将 react-hot-loader/patch 打入 chunk
    'react-hot-loader/patch',

    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin('./dist')
  ]
};

module.exports = config;


// 另外需要注意的一点是 .babelrc 配置文件
// 记得关闭 babel-preset-env 的 module
// 记得增加 react-hot-loader/babel 插件
// 详细配置参见本项目的 .babelrc
