import React from "react";
import styled from "styled-components";
import GoalItems from "./GoalItems.jsx";
import "./GoalsList.css";

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
            <button type="submit">+</button>
          </form>
          <GoalItems
            entries={this.props.items}
            deleteItem={this.props.deleteItem}
          />
        </div>
        {/* <hr /> */}
      </div>
    );
  }
}

export default GoalList;
