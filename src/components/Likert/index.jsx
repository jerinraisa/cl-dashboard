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
      data: null
    };
  }

  // componentDidMount() {
  //   this.callBackend()
  //     .then(res => this.setState({ data: res.message }))
  //     .catch(e => console.log(e));
  // }

  callBackend = async () => {
    const response = await fetch("/add-items");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  // saveForm = async () => {
  //   const response = await fetch("/save-form");
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  submit = () => {
    var confirm = window.confirm("Submit?");
    if (confirm) {
      this.setState({
        submitted: true
      });
      this.callBackend().then(res => this.setState({ data: res.message }));
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
