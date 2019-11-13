import React from "react";

class Accordion extends React.Component {
  state = {
    show: 0
    
  };
  sections = [
    {
      title: "title",
      content: "content"
    },
    {
      title: "title1",
      content: "content1"
    }
  ];
  handleClick(section) {
    this.setState({
      show: (this.state.show===section) ? "banana" : section
      
    })
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.state);
    
    return (
      <div>
        <ul>
          <li>
            <button onClick={() => this.handleClick(0)}>
              {this.sections[0].title}
            </button>
            <p hidden={this.state.show !== 0}>{this.sections[0].content}</p>
          </li>
          <li>
            <button onClick={() => this.handleClick(1)}>
              {this.sections[1].title}
            </button>
            <p hidden={this.state.show !== 1}>{this.sections[1].content}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Accordion;
