const path = require('path');
const webpack = require('webpack');


const envMatch = /^build:([a-z]+)$/.exec(process.env.npm_lifecycle_event);
const env = envMatch ? envMatch[1] : 'dev';

// 注意这里将 uglifyjs-webpack-plugin 作为依赖项进行安装
// 而并没有使用 webpack.optimize.UglifyJsPlugin
// 这是因为，webpack 3 自带的 uglifyjs-webpack-plugin 插件版本较低
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');


const config = {
  devtool: 'source-map',
  plugins: []
};

if (env !== 'qa') {
  config.plugins = config.plugins || [];

  config.plugins.push(new UglifyJsPlugin());
}

module.exports = merge(commonConfig, config);
