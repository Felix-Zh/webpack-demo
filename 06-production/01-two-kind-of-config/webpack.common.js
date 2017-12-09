const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const envMatch = /^build:([a-z]+)$/.exec(process.env.npm_lifecycle_event);
const env = envMatch ? envMatch[1] : 'dev';

console.log(`The env of this build is ${env}.`);

const config = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({

      // webpack-define-plugin 会直接进行文本替换，因此必须显式加上一个引号
      // 这里使用了模板字符串，注意这里的单引号就是显式加上的引号
      // 另一种常见的方法是使用 JSON.stringify
      __BUILD_ENV__: `'${env}'`

    })
  ]
};

module.exports = config;

// 注意 package.json 文件中 scripts 字段里的命令
// NODE_ENV 设置的值为 development（其实 start 和 build:qa 命令的 NODE_ENV 均为 development，没有写是因为 NODE_ENV 的默认值就是 development） 或 production 而不是直接地 dev、qa 或 prod
// 这是因为，development 和 production 是业界习惯，第三方库都应当按照这两个关键字来决定开发和生产时的不同逻辑
// 而像 dev、qa、prod 甚至 yz 这样的构建环境，和各公司开发和部署策略有很大关系，因此没有使用 NODE_ENV 变量
