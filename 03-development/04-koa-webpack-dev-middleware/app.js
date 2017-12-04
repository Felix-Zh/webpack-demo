const koa = require('koa');
const webpack = require('webpack');
const koaWebpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackConfig = require('./webpack.config');


const app = new koa();
const compiler = webpack(webpackConfig);

// 使用 koa-webpack-dev-middleware 中间件
// 这是对 webpack-dev-middleware 中间件的 koa 版本封装
app.use(koaWebpackDevMiddleware(compiler, {
  publicPath: '/'
}));

app.listen(8080, () => console.log('app is running at port 3000...'));
