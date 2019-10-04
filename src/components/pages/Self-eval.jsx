import React from "react";
import List from "../List.jsx";
import Reflection from "../Likert.jsx";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  border: 1px solid red;
`;

class SelfEval extends React.Component {
  render() {
    return (
      <div>
        <h1>Self Evaluation</h1>
        {/* Current Week */}
        <h2>Week: </h2>
        <ListContainer>
          <List placeholder={"Something I learned this week..."} />
          <List placeholder={"Something I accomplished this week..."} />
        </ListContainer>
        <h2>Weekly Reflection</h2>
        <Reflection></Reflection>
      </div>
    );
  }
}

export default SelfEval;
