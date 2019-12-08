import React from "react";
import { MainContainer, Row } from "../components/Global/Sections.jsx";
import Form from "../components/TaskList/index.jsx";
import styled from "styled-components";
import Archive from "../components/ArchiveSelector/index.jsx";
import * as moment from "moment";

let date = moment().format("MMM Do YY");
let d = new Date();

const ListContainer = styled.div`
  display: flex;
  align-content: space-between;
  padding: 0 !important;
  width: 100%;
  height: 35vh;
  margin-left: 0px;
`;

const DateContainer = styled.div`
  margin-top: 0.5em;
`;

// Date settings
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

class DailyTasks extends React.Component {
  render() {
    return (
      <MainContainer>
        <Row>
          <h2>Tasks</h2>
        </Row>
        <hr />
        <DateContainer>
          <Row>
            <h5>{d.toLocaleDateString("en-US", options)}</h5>
            <button onClick={this.setDate}>Yesterday</button>
          </Row>
        </DateContainer>
        <ListContainer>
          <Form
            name="daily-tasks"
            placeholder={"What did I do today?"}
            date={date}
          />
        </ListContainer>
        <Archive />
      </MainContainer>
    );
  }
}
export default DailyTasks;
