const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');


const config = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(commonConfig, config);
