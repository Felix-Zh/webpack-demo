// 相同的异步 chunk 也会被抽离，且不需要使用 CommonsChunkPlugin
// 可以看到 webpack.config.js 中并没有使用 CommonsChunkPlugin
// 但 dist 目录中只有一个 lodash.bundle.js
// 另外，异步 chunk 的 chunkName 由最后一个指定的 webpackChunkName 决定
// 虽然 index.js 中指定的 lodash 的 chunkName 为“lodash”
// 但 dist 目录中 lodash chunk 的文件名为 another.js 中指定的 lodash1.bundle.js
import(/* webpackChunkName: "lodash1" */ 'lodash')
  .then(_ => {
    console.log(_);
  });
