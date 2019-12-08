import React from "react";
import Form from "../components/task-list/index.jsx";
import Likert from "../components/likert-scale/index.jsx";
import styled from "styled-components";
import { MainContainer, Row } from "../components/Global/Sections.jsx";

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 !important;
  width: 100%;
  height: 35vh;
  margin-left: 0px;
`;

const LikertContainer = styled.div`
  padding-top: 15px;
`;

// Date settings
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

let d = new Date();

class SelfEval extends React.Component {
  render() {
    return (
      <div>
        <MainContainer>
          <Row>
            <h2>Week Of : {d.toLocaleDateString("en-US", options)}</h2>
          </Row>
          <hr />
          <ListContainer>
            <Form
              placeholder={"Something I learned this week..."}
              name="list-learn"
            />
            <Form
              placeholder={"Something I accomplished this week..."}
              name="accomplishments"
            />
          </ListContainer>
          <Row>
            <h5>Weekly Reflection</h5>
          </Row>
          <LikertContainer>
            <Row>
              <Likert></Likert>
            </Row>
          </LikertContainer>
        </MainContainer>
      </div>
    );
  }
}

export default SelfEval;
