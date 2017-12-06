import mod from './mod';


// 在入口处加入此段代码，接受所有模块热加载
// 也可以为 module.hot.accept 增加参数以高级使用热加载，见文档
if (module.hot) {
  module.hot.accept();
}

mod();
