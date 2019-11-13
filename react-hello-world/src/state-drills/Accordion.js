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
      show: this.state.show === section ? "banana" : section
    });
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.state);
    const arrayLi = this.sections.map((section, index) => {
      return (
        <li key={index}>
          <button onClick={() => this.handleClick(index)}>
            {section.title}
          </button>
          <p hidden={this.state.show !== index}>{section.content}</p>
        </li>
      );
    });
    return (
      <div>
        <ul> {arrayLi}</ul>
      </div>
    );
  }
}

export default Accordion;
