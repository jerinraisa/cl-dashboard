import React from "react";
import axios from "axios";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <div key={index}>
            <li>
              {item}{" "}
              <button
                onClick={e => this.props.remove(e, index)}
                className="remove-button"
              >
                remove &#9747;
              </button>
            </li>
          </div>
        ))}
      </ul>
    );
  }
}
export default List;
