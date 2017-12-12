// 07-04 中的例子只能算是异步 chunk 但并不能算是懒加载
// 因为 lodash chunk 无条件被引入，它还是同其他 chunk 一起被下载
// 由于拆包，还增加了一次 HTTP 请求，事实上是一个负优化
// 懒加载的真正用武之地是在某些交互或某些条件触发后进行 import
function createUI() {
  const div = document.createElement('div');
  const button = document.createElement('button');

  div.innerHTML = '点击下面的按钮并查看 DevTool 的 Network 面板';
  button.innerText = 'Click me!';

  button.addEventListener('click', () => {

    // 在事件处理函数中使用 import()，将在事件触发时才加载异步 chunk
    // 注意已经加载过的 chunk 不会再次发起网络请求
    import(/* webpackChunkName: "print" */ './print')
      .then(({ default: print }) => {
        print();
      });
    
  });

  div.appendChild(document.createElement('br'));
  div.appendChild(button);

  return div;
}

document.body.appendChild(createUI());
