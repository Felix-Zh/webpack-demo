import React from 'react';
import './app.scss';


export default class Home extends React.Component {
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
    return (
      <div>
        <h1>Hey man!</h1>
        <input
          type="text"
          value={this.state.val}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
