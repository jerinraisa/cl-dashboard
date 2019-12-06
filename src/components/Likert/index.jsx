import React from "react";
import "./index.css";
import styled from "styled-components";
import Option from "./LikertOptions/Option";

let submitted = false; // add a condition for when the week resets

// likert scale for self evaluation with for options
const ButtonContainer = styled.div`
  text-align: right;
  width: 100%;
  margin-top: 5px;
`;

class Likert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      data: null
    };
  }

  submit = () => {
    var confirm = window.confirm("Submit?");
    if (confirm) {
      this.setState({
        submitted: true
      });
      submitted = true;

      return true;
      // submit values to some database
    }
  };

  render() {
    return (
      <>
        <Option prompt={"I managed my time well."} />
        <Option prompt={"I completed all of my assigned tasks."} />
        <Option prompt={"I collaborated with my coworkers."} />
        <Option prompt={"I improved on x skill."} />
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
