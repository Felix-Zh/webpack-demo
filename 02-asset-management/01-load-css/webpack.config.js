const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  // 使用 module.rules 配置项来为模块增加 loader
  // loader 用来解析各种非 js 模块
  module: {

    // 注意 rules 中的规则是有执行顺序的
    // 会按照从下到上的顺序执行
    // 对于本例中的 CSS 文件，会先执行 css-loader，然后执行 style-loader
    // 如果将两个 loader 的执行顺序互换，先抽离 <style> 标签成为 js 代码，再通过 css-loader 解析
    // 无疑 css-loader 会不能识别 js 代码，抛出异常
    // 另外，webpack 也支持一次匹配执行多个 loader，记为 { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    rules: [

      // style-loader 可以将样式抽离成为 <style> 标签并通过 js 插入 html 文档
      // 事实上，style-loader 生成的 js 代码并不感知 html 文件的存在
      // 它只是试图生成 <style> 然后插入固定的位置（例如 head 或 bottom，可通过 insertAt 配置）
      { test: /\.css$/, use: 'style-loader' },

      // css-loader 可以解析 CSS 模块
      { test: /\.css$/, use: 'css-loader' }
    ]

  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin('./dist')
  ]
};

module.exports = config;
