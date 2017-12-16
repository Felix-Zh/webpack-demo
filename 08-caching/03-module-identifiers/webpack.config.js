const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// 在 /containers/Index/index.js 模块中，第 2 行注释是对模块 bar 的引用
// 解开注释和加上注释对项目进行编译，可以发现 app、common、page2 和 runtime 这些 chunk 的 hash 都会有变化
// 其中，app 和 runtime 的 hash 变化很好理解，因为
// app chunk 的内容发生了改变（引入了 bar 模块）
// runtime 包含 chunk 名字典（由于 app chunk 名发生变化因此 runtime chunk 中记录的 chunk 名字典也会变化）
// 而 common 和 page2 这两个 chunk 的变化就有点匪夷所思了
// 事实上，这是因为 webpack 使用模块 id 来记录模块，模块 id 是从 1 开始的递增数
// 新引入了一个模块，其他模块的 id 必然会受到影响，因此其他 chunk 的 hash 也会发生变化
// 使用 NamedModulesPlugin 插件可以解决这个问题
// 该插件能够让 webpack 使用字符串（事实上是模块路径）而不是模块 id 来对模块进行标记，不过 bundle 中全是路径效率很低，只推荐在开发环境使用
// 另外一个方法是使用 HashedModuleIdsPlugin 插件，推荐在生产环境使用

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

    // 使用 HashedModulesIdsPlugin 插件解决 hash 变化问题
    new webpack.HashedModuleIdsPlugin(),
    
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'libs', 'runtime']
    })
  ]
};

module.exports = config;
