import React from "react";

class HelloWorld extends React.Component {
  state = {
    who: "Hello, world"
  };
  handleButtonClick = word => {
    this.setState({
      who: word
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.who}</p>
        <button onClick={() => this.handleButtonClick("world")}>world</button>
        <button onClick={() => this.handleButtonClick("friend")}>friend</button>
        <button onClick={() => this.handleButtonClick("react")}>react</button>
      </div>
    );
  }
}

export default HelloWorld;

//When a user clicks on one of the three buttons, use state and an event handler to update the state property who so that the content in the p element changes.
