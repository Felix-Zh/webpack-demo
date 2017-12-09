// 注意，只有使用 ES Module 的模块才可以使用该功能
// 因为该功能依赖 ES Module 的静态编译能力
import { foo, bar } from './module';


foo();

// module.js 模块中有三个接口，分别为 foo bar 和 baz
// 其中导入了 foo 和 bar，没有导入 baz，且 只使用了 foo
// 因此在打包时，只有 foo 会被打入 bundle 中
