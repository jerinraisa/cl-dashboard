import React from "react";
import { MainContainer, Row } from "../Sections";
import Form from "../Form";

class DailyTasks extends React.Component {
  render() {
    return (
      <MainContainer>
        <Form name="daily-tasks"></Form>
      </MainContainer>
    );
  }
}

export default DailyTasks;
