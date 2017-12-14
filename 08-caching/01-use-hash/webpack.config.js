const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: {
    app: './src/Index',
    page2: './src/Page2'
  },
  output: {
    path: path.resolve(__dirname, './dist'),

    // 使用 [chunkhash] 占位符表示 hash，使用冒号数字表示 hash 的长度
    // 注意老版本的 webpack 可能会出现含有启动代码的 chunk（即使未修改但）每次构建 hash 都发生变化的情况
    // 这是因为启动代码（webpack bootstrap）中包含 runtime 和 manifest 代码
    // 新版本解决了该问题，但 webpack 仍然建议将这些样板代码抽出，参见 08-02
    filename: '[name].[chunkhash:5].js'

  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      template: './src/Index/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/Page2/index.html'
    })
  ]
};

module.exports = config;
