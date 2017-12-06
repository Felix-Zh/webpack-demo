import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ val: evt.target.value });
  }

  render() {
    const { state } = this;

    return (
      <div>
        <h1>04-04 React Hot Loader</h1>
        <p>
          下面的 input 使用了 this.state，<br />
          react-hot-loader 能够保持 state 不会因为模块重新执行而消逝
        </p>
        <input
          type="text"
          value={state.val}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
