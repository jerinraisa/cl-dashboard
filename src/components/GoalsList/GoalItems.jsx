import React, { Component } from "react";

class GoalItems extends Component {
  handleChange = (e, item) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setTimeout(() => {
        this.props.completeGoal(item);
      }, 200);
    }
  };

  createTasks = item => {
    return (
      <li key={item.key}>
        <label className="checkbox">
          <input type="checkbox" onChange={e => this.handleChange(e, item)} />
        </label>
        {item.goal}
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
    var entries = this.props.entries;

    // axios.get("/goals/get-goals").then(res => (entries = res.data));
    // console.log(entries);
    var listItems = entries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default GoalItems;
