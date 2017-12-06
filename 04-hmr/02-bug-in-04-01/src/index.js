import handler from './handler';


// 创建按钮并注册事件
function createLogButton(handler) {
  const btn = document.createElement('button');

  btn.innerText = 'Click me!';
  btn.onclick = handler;

  return btn;
}

const btn = createLogButton(handler);
document.body.appendChild(btn);


// 热加载
// 尝试修改 handler 模块后，发现热加载前的按钮依然存在
// 更进一步说，每次热更新都会保留旧的按钮
// 这是因为重复执行了 index.js 模块
// 虽然可以通过在热加载的回调函数中将旧的 btn 移除，但这肯定不是长久之计
// 可以使用一些 loader 来解决这类问题，参见 04-04
if (module.hot) {
  module.hot.accept();
}
