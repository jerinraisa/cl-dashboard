import React from "react";

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
      <div>
        <p>{this.props.prompt}</p>
        {this.state.options.map((option, index) => (
          <button key={index} onClick={e => this.handleClick(e, index)}>
            {option}
          </button>
        ))}
        <h3> score: {this.state.value}</h3>
      </div>
    );
  }

  //   isSelected = () => {
  //     if (this.state.selected) return "selected";
  //     else return "notSelected";
  //   };

  //   render() {
  //     return (
  //       <div className={this.isSelected()}>
  //         <button
  //           type="button"
  //           value={this.props.value}
  //           onClick={this.handleClick}
  //         >
  //           {this.props.text}
  //         </button>
  //       </div>
  //     );
  //   }
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
      <div>
        <Option prompt={"I managed my time well."} />
        <Option prompt={"I completed all of my assigned tasks."} />
        <button type={"submit"} onClick={this.submit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Reflection;
