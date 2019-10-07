import React from "react";
import styled from "styled-components";
import "./Likert.css";
// likert scale for self evaluation with for options

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locked: false,
      options: ["strongly disagree", "disagree", "agree", "strongly agree"],
      value: 0
      // map week number and submitted (t/f) to ensure one submit / week
    };
  }

  // set value with button
  handleClick = (e, key) => {
    this.setState({
      value: key
    });
  };

  render() {
    return (
      <div className="item">
        <p>{this.props.prompt}</p>

        {this.state.options.map((option, index) => (
          <button key={index} onClick={e => this.handleClick(e, index)}>
            {option}
          </button>
        ))}

        <p> score: {this.state.value}</p>
      </div>
    );
  }
}

class Reflection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  submit = () => {
    var confirm = window.confirm("Submit?");
    if (confirm) {
      this.setState({
        submitted: true
      });
      return true;
      // submit values to some database
    }
  };

  disabled() {
    // if not submitted then disabled == false
    // if submitted and weekday
  }
  render() {
    return (
      <>
        <Option prompt={"I managed my time well."} />
        <Option prompt={"I completed all of my assigned tasks."} />
        <Option prompt={"I collaborated with my coworkers."} />
        <Option prompt={"I improved on x skill."} />

        <button type={"submit"} onClick={this.submit}>
          Submit
        </button>
      </>
    );
  }
}

export default Reflection;
