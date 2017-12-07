const Koa = require('koa');
const koaWebpack = require('koa-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = new Koa();
const compiler = webpack(webpackConfig);

app.use(koaWebpack({ compiler }));

app.listen('8080', () => console.log('app is running at port 8080...'));
