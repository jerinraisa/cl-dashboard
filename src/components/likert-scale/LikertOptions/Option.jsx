import React from "react";
import Options from "../../../constants/options";
import "../index.css";

let submitted = false; // add a condition for when the week resets

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  // set value with button
  handleClick = (e, key) => {
    this.setState({
      value: key
    });

    this.props.callBack(key, this.props.prompt);
  };

  render() {
    return (
      <div className="item">
        <p>{this.props.prompt}</p>
        <section>
          {Options.map((option, index) => (
            <button
              className={
                this.state.value === index ? "selected" : "likert-option"
              }
              key={index}
              disabled={submitted}
              onClick={e => this.handleClick(e, index)}
            >
              {option}
            </button>
          ))}
        </section>
        {/* <p> score: {this.state.value}</p> */}
      </div>
    );
  }
}

export default Option;
