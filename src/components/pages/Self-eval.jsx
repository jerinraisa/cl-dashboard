import React from "react";
import List from "../List.jsx";
import Reflection from "../Likert.jsx";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  align-content: space-bewteen;
  justify-content: space-between;
`;
const ListContainer = styled.div`
  display: flex;
  padding: 0 !important;
  width: 100%;
  height: 35vh;
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
