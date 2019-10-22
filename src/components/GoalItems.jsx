import React, { Component } from "react";

class GoalItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <li onClick={() => this.props.deleteItem(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  render() {
    var entries = this.props.entries;
    var listItems = entries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default GoalItems;
