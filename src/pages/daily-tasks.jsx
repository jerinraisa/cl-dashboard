import React from "react";
import { MainContainer, Row } from "../components/Global/Sections.jsx";
import Form from "../components/task-list/index.jsx";
import styled from "styled-components";
import ArchiveImg from "../assets/20x20.png";
import Archive from "../components/archive-selector/index.jsx";
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

const CompleteBox = styled.div`
  margin: 3vh 0;
  padding: 10px;
  width: 47%;
  height: 25vh;
  background-color: white;
  max-height: 100%;
  border: 1px solid #99a3ad;
  border-radius: 10px;
  overflow: auto;
`;

const DateContainer = styled.div`
  margin-top: 0.5em;
`;

const Title = styled.div`
  display: flex;
  width: 50%;
  /* border: 1px solid #99a3ad; */
`;

const DateSelector = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  > div {
    justify-content: space-between;
  }
  /* border: 1px solid red; */
`;

const ArchivesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 48.5%;
  /* border: 1px solid #99a3ad; */
`;

const ArchiveImage = styled.img`
  display: flex;
  padding-left: 20px;
  padding-top: 10px;
  width: 20px;
  height: 20px;
`;

// Date settings
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

class DailyTasks extends React.Component {
  setDate() {
    date = moment()
      .subtract(1, "days")
      .format("MMM Do YY");
  }
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
        <ArchivesContainer>
          <Title>
            <h5>Archives</h5>
            <ArchiveImage src={ArchiveImg} />
          </Title>
          <DateSelector>
            <Archive />
          </DateSelector>
        </ArchivesContainer>
        <CompleteBox></CompleteBox>
      </MainContainer>
    );
  }
}

export default DailyTasks;
