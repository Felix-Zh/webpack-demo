import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from './container/App';


// 这里将渲染方法包装成一个函数
// 并将入口组件包裹在 react-hot-loader 提供的 AppContainer 组件中
// 这样一来，每次需要重加载时，AppContainer 就会重新渲染它的子组件
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#app')
  )
}

render(App);

if (module.hot) {

  // 注意这里指定接收入口模块的更新，并重新执行刚刚封装的 render 方法
  module.hot.accept('./container/App', () => render(App));

}
