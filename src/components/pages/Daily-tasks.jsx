import React from "react";
import { MainContainer, Row } from "../Sections.jsx";
import List from "../List.jsx";

class DailyTasks extends React.Component {
  render() {
    return (
      <MainContainer>
        <List></List>
      </MainContainer>
    );
  }
}

export default DailyTasks;
