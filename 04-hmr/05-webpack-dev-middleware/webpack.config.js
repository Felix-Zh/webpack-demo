const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const config = {

  // 将 webpack-hot-middleware/client 加入入口 chunk
  // 该模块的功能是与开发服务器相连接，当重新编译时使得客户端能够接收到编译消息并更新客户端 bundle
  // 注意 webpack-hot-middleware 并不需要手动安装，因为在安装 koa-webpack 时
  // 已经将 webpack-hot-middleware 安装在 node_modules 目录
  // 参见“笔记/工具与环境/NPM/NPM 的依赖优化处理”
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin('./dist')
  ]
};

module.exports = config;
