const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: {
    libs: ['lodash', 'jquery'],
    app: './src/containers/Index',
    page2: './src/containers/Page2'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash:5].js'
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/containers/Index/index.html',
      chunks: ['runtime', 'libs', 'common', 'app']
    }),
    new HtmlWebpackPlugin({
      filename: 'page2.html',
      template: './src/containers/Page2/index.html',
      chunks: ['runtime', 'libs', 'common', 'page2']
    }),

    // 使用 CommonsChunkPlugin 抽出公共 chunk common、库 chunk libs 和引导样板代码 chunk runtime
    // 注意这里三个 chunk 的顺序，common 模块应该放在 libs chunk 前
    // 否则公共模块会被抽离到 libs chunk 中
    // 如果数组末尾存在一个非初始 chunk，且所有公共 chunk 已经被抽取
    // 那么将会把引导样板代码抽离到这个 chunk 中（对于本例，这个 chunk 为 runtime）
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'libs', 'runtime']
    })

  ]
};

module.exports = config;
