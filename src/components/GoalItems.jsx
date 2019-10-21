import React, { Component } from "react";

class GoalItems extends Component {

  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }
 
  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
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
