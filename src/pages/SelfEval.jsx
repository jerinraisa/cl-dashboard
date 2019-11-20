import React from "react";
import Form from "../components/TaskList/Form.jsx";
import Reflection from "../components/Likert/Likert.jsx";
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

class SelfEval extends React.Component {
  render() {
    return (
      <div>
        <MainContainer>
          {/* <Row>
            <h1>Self Evaluation</h1>
          </Row> */}
          {/* Current Week */}
          <Row>
            <h2>Week: September 1 - September 3, 2019</h2>
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
          <Row>
            <Reflection></Reflection>
          </Row>
        </MainContainer>
      </div>
    );
  }
}

export default SelfEval;
