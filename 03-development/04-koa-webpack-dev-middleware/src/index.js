// 现在，服务通过 koa 启动，但使用了 webpack-dev-middleware
// 因此目前的服务是由 koa + webpack-dev-middleware 搭建起来的
// 不过需要注意的是，webpack-dev-middleware 并没有提供热加载和 live-reloading 功能
console.log('hey man!');
