import React from "react";
import GoalItems from "./ListItems/GoalItems.jsx";
import "./index.css";

class GoalList extends React.Component {
  render() {
    return (
      <div className="ListCard">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              id="goalInput"
              ref={a => (this._inputExlement = a)}
              placeholder="Add a goal"
              className={"input-field"}
            ></input>
            <button type="submit" className="add-button">
              +
            </button>
            <hr />
          </form>
          <GoalItems
            entries={this.props.items}
            deleteGoal={this.props.deleteGoal}
            completeGoal={this.props.completeGoal}
          />
        </div>
        {/* <hr /> */}
      </div>
    );
  }
}

export default GoalList;
