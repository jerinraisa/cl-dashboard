import React from "react";
import Options from "./Options";
import "./index.css";
import axios from "axios";

let submitted = false; // add a condition for when the week resets

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  // set value with button
  handleClick = (e, key) => {
    this.setState({
      value: key
    });

    this.props.callBack(key, this.props.info.num);
    // this.saveData(key);
  };

  // saveData(score) {
  //   alert(this.props.prompt);
  //   axios.post("/evaluation/submit-evaluation", {
  //     week: "test week",
  //     prompt: this.props.prompt,
  //     score: score
  //   });
  // }

  render() {
    return (
      <div className="item">
        <p>{this.props.info.prompt}</p>
        <section>
          {Options.map((option, index) => (
            <button
              className={
                this.state.active === index ? "selected" : "likert-option"
              }
              key={index}
              disabled={submitted}
              onClick={e => this.handleClick(e, index)}
            >
              {option}
            </button>
          ))}
        </section>
        <p> score: {this.state.value}</p>
      </div>
    );
  }
}

export default Option;
