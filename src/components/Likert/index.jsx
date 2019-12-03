import React from "react";
import "./index.css";
import styled from "styled-components";
import Option from "./Option";

let submitted = false; // add a condition for when the week resets

// likert scale for self evaluation with for options
const ButtonContainer = styled.div`
  text-align: right;
  width: 100%;
  margin-top: 10px;
`;

class Likert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      option1: {
        num: "1",
        prompt: "I managed my time well",
        data: 0
      },
      option2: {
        num: "2",
        prompt: "I completed all of my assigned tasks.",
        data: 0
      },
      option3: {
        num: "3",
        prompt: "I collaborated with my coworkers.",
        data: 0
      },
      option4: {
        num: "4",
        prompt: "I learned valuable skills.",
        data: 0
      }
    };
  }

  submit = () => {
    if (window.confirm("Submit?")) {
      this.setState({
        submitted: true
      });
      submitted = true;
      // this.getValues();
      return true;
    }
  };

  getValues = (value, num) => {};
  render() {
    return (
      <>
        <Option info={this.state.option1} callBack={this.getValues} />
        <Option info={this.state.option2} callBack={this.getValues} />
        <Option info={this.state.option3} callBack={this.getValues} />
        <Option info={this.state.option4} callBack={this.getValues} />
        <ButtonContainer>
          <button
            type={"submit"}
            onClick={this.submit}
            className="submit-button"
            disabled={submitted}
          >
            Submit
          </button>
        </ButtonContainer>
        <p>{this.state.data}</p>
      </>
    );
  }
}

export default Likert;
