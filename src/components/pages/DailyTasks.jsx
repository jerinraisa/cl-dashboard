import React from "react";
import { MainContainer, Row } from "../Sections.jsx";
import List from "../Form.jsx";
import styled from "styled-components";

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
    max-height: 100%;
    border: 1px solid gray;
    border-radius: 10px;
    overflow: auto;
`;

const DateContainer = styled.div`
  margin-top: 0.5em;
`;

const ArchivesContainer = styled.div`
  display: flex;
  width: 48.5%
  border: 1px solid gray;
`;

// Date settings
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const formatDate = (date) => {	// formats a JS date to 'yyyy-mm-dd'
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

let d = new Date();

class DailyTasks extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: null, selectedDate: '2012-11-15' };
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
        </Row>
        </DateContainer>
        <ListContainer>
        <List placeholder={"What did I do today?"} />
        </ListContainer>
        <ArchivesContainer>
        <h5>Archives</h5>
        </ArchivesContainer>
        <CompleteBox></CompleteBox>
      </MainContainer>
    );
  }
}

export default DailyTasks;
