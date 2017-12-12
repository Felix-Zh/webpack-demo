// 注意这里使用 import() 方法而不是静态 import 命令来引入模块
// import() 方法同样来自于 ES Module 规范
// 这里的 webpackChunkName 可以为动态模块命名，而不是使用默认的 id
// id 为从 1 开始的正整数
import(/* webpackChunkName: "lodash" */'lodash')
  .then(_ => {
    const raw = { foo: 1, bar: 2, baz: 3 };

    console.log(_.pick(raw, ['foo', 'baz']));
  });
