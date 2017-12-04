const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  // config.devServer 字段用来配置 webpack-dev-server
  // 我们还在 package.json 中增加了新的 script —— start，用以启动 webpack-dev-server
  // 注意 --open 参数表示在 webpack-dev-server 启动时打开浏览器
  devServer: {

    // 这里告诉 webpack-dev-server 编译后文件的目录
    // 也就是说 webpack-dev-server 会响应该目录下的资源请求
    contentBase: './dist'

  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin('./dist')
  ]
};

module.exports = config;
