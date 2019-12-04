import React, { Component } from "react";

class GoalItems extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e, item) => {
    if (e.target.checked) {
      setTimeout(() => {
        this.props.completeGoal(item);
      }, 200);
    }
  };

  // handleChange = (e, undo_item) => {
  //   if (e.target.checked) {
  //     setTimeout(() => {
  //       this.props.incompleteGoal(undo_item);
  //     }, 200);
  //   }
  // };

  createItem = item => {
    return (
      <li key={item.key}>
        <label className="checkbox">
          <input type="checkbox" onChange={e => this.handleChange(e, item)} />
        </label>
        {item.text}
        <button
          onClick={() => this.props.deleteGoal(item)}
          className="remove-button"
        >
          remove &#9747;
        </button>
      </li>
    );
  };

  render() {
    return (
      <ul className="theList">
        {this.props.entries && this.props.entries.length
          ? this.props.entries.map(this.createItem)
          : null}
      </ul>
    );
  }
}

export default GoalItems;