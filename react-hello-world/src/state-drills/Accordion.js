import React from "react";

class Accordion extends React.Component {
  state = {
    show: false,
    hidden: true
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

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <button onClick={() => this.sections}>
              {this.sections[0].title}
            </button>
            <p hidden>{this.sections[0].content}</p>
          </li>
          <li>
            <button onClick={() => this.sections}>
              {this.sections[1].title}
            </button>
            <p hidden>{this.sections[1].content}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Accordion;
