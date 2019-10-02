import React from "react";
import List from "../List.jsx";
import Reflection from "../Likert.jsx";

class SelfEval extends React.Component {
  render() {
    return (
      <div>
        <h1>Self Evaluation</h1>
        {/* Current Week */}
        <h2>Week: </h2>
        <List placeholder={"Something I learned this week..."} />
        <List placeholder={"Something I accomplished this week..."} />
        <h2>Weekly Reflection</h2>
        <Reflection></Reflection>
      </div>
    );
  }
}

export default SelfEval;
