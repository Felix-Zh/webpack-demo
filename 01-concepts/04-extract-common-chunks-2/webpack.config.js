const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const config = {
  entry: {
    index: './src/pages/Index',
    page2: './src/pages/Page2',

    // 这里增加了一个名为 vendors 的 chunk，它会将 jquery 和 lodash 打包为一个 chunk
    vendors: ['jquery', 'lodash']

  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/Index/index.html',
      filename: 'index.html',
      chunks: ['vendors', 'index']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/Page2/page2.html',
      filename: 'page2.html',
      chunks: ['vendors', 'page2']
    }),

    // 由于使用了 commons-chunk-plugin，公共模块将被抽离到 vendors chunk 中
    // 其中包括 index 和 page2 都引入的 mod-a 和 mod-b
    // 如果不想包含 mod-a 和 mod-b，可以将 minChunks 设置为 Infinity，这样一来，只有出现过无限次的模块才会被打入 vendors chunk 中
    // 也就不会有除了 jquery 和 lodash 的其他模块被打入 vendors chunk 中了（注意 jquery 和 lodash 本身就包含在 vendors chunk 中）
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),

    new CleanWebpackPlugin('./dist')
  ]
};

module.exports = config;
