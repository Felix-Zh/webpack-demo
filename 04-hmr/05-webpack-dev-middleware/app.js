const koa = require('koa');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackMiddleware = require('koa-webpack');


const app = new koa();
const compiler = webpack(webpackConfig);

// koa-webpack 封装了 webpack-dev-middleware 和 webpack-hot-middleware
// 另外，不知道为什么，还要手动安装一下 babel-runtime，否则会报错
app.use(webpackMiddleware({ compiler }));

app.listen(8080, () => console.log('app is running at port 8080...'));
