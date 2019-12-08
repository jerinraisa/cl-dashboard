import React from "react";
import "./index.css";
import styled from "styled-components";
import Option from "./LikertOptions/Option";
import Prompts from "../../constants/prompts";
import axios from "axios";

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
      promptData: []
    };
  }

  submit = () => {
    this.setState({
      submitted: true
    });
    submitted = true;
    this.saveValues();
    return true;
  };

  getValues = (numVal, prompt) => {
    let exists = false;
    const { promptData } = this.state;
    exists = promptData.find(existingPrompts => existingPrompts.id === prompt);
    if (exists) {
      promptData.map((data, i) => {
        if (data.id === prompt) {
          data.value = numVal;
        }
      });
    } else {
      promptData.push({
        id: prompt,
        value: numVal
      });
    }
    this.setState({ promptData });
    console.log(promptData);
  };

  saveValues() {
    axios.post("/evaluation/submit", {
      week: "1st week of December",
      scores: this.state.promptData
    });
  }

  render() {
    return (
      <>
        <section>
          {Prompts.map((prompt, i) => (
            <Option callBack={this.getValues} key={i} id={i} prompt={prompt} />
          ))}
        </section>
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
