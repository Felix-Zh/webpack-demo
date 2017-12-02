const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {

    // 使用了相对路径，相对于当前模块（webpack.config.js）
    path: path.resolve(__dirname, './dist'),

    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin('./dist')
  ]
};

module.exports = config;
