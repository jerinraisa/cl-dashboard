import React from "react";
import List from "../List.jsx";

class DailyTasks extends React.Component {
  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <List placeholder={"What did I accomplish today?"} />
      </div>
    );
  }
}

export default DailyTasks;
