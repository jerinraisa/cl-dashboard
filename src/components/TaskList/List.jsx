import React from "react";

const List = props => (
  <ul>
    {props.items.map((item, index) => (
      <div key={index}>
        <li>
          {item}{" "}
          <button
            onClick={e => props.remove(e, index)}
            className="remove-button"
          >
            remove &#9747;
          </button>
        </li>
      </div>
    ))}
  </ul>
);
export default List;
