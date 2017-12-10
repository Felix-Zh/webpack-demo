const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const config = {
  entry: {

    // 此处设置了两个入口 chunk
    // 因此会生成两个 bundle，这就实现了代码的拆分（即不再是只会输出一个 bundle 文件了）
    app: './src/index',
    another: './src/another-module'

  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
};

module.exports = config;

// 但目前的问题是，由于 app 和 another 两个 chunk 都有引入 jquery 模块
// 因此 jquery 被同时打在了两个 bundle 中，导致两个 bundle 都非常大
// 这样的冗余代码肯定是不能忍的……
