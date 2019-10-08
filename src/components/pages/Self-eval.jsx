import React from "react";
import List from "../List.jsx";
import Reflection from "../Likert.jsx";
import styled from "styled-components";
import { MainContainer, Row } from "../Sections.jsx";

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
            <List placeholder={"Something I learned this week..."} />
            <List placeholder={"Something I accomplished this week..."} />
          </ListContainer>
          <Row>
            <h2>Weekly Reflection</h2>
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
