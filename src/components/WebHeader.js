import React from "react";

export default class WebHeader extends React.Component {
  constructor() {
    super();
    this.ifClick = this.ifClick.bind(this);
    this.state = {
      first: "Hello World",
      second: "Goodbye",
      val: true
    };
  }

  ifClick(input) {
    if (input) {
        this.setState({
            first: "Goodbye",
            second: "Hello World",
            val: false
        });
    } else {
        this.setState({
            first: "Hello World",
            second: "Goodbye",
            val: true
        });
    }

  }

  render() {
    return (
      <div>
        <div>
          {this.state.first}
          <br></br>
          {this.state.second}
        </div>
        <button onClick={() => this.ifClick(this.state.val)}>CHANGE THE PAGE</button>
      </div>
    );
  }
}
