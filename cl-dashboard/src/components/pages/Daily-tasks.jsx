import React from "react";
import List from "../List.jsx";
import Header from "./Title";

class DailyTasks extends React.Component {
  render() {
    return (
      <div>
        <Header>Daily Tasks</Header>
        <List />
      </div>
    );
  }
}

export default DailyTasks;
