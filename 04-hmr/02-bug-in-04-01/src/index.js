import handler from './handler';
import './mod';


// 创建按钮并注册事件
function createLogButton(handler) {
  const btn = document.createElement('button');

  btn.innerText = 'Click me!';
  btn.onclick = handler;

  return btn;
}

let btn = createLogButton(handler);
document.body.appendChild(btn);


// 热加载
// if (module.hot) {
//   module.hot.accept();
// }

// 尝试修改某个模块后（例如 handle 或 mod），发现热加载前的按钮依然存在
// 更进一步说，每次热更新都会保留旧的按钮
// 这是因为重复执行了 index.js 模块
// 可以通过在热加载的回调函数中将旧的 btn 移除
// 可以尝试注释上面的热加载代码，解锁下面的加载代码
if (module.hot) {
  module.hot.accept([
    './handler',
    './mod'
  ], () => {
    document.body.removeChild(btn);

    btn = createLogButton(handler);
    document.body.appendChild(btn);
  });
}

// 但类似的坑还有很多，手动解决肯定不是长久之计
// 可以使用一些 loader 来解决这类问题，参见 04-04
