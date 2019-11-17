import React from "react";
import styled from "styled-components";
import "./List.css";
import axios from "axios";

const ListCard = styled.div`
  margin: 3vh 0;
  padding: 10px;
  width: 47%;
  height: auto;
  max-height: 100%;
  border: 1px solid gray;
  border-radius: 10px;
  overflow: auto;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      items: [{}],
      value: ""
    };
  }

  // set value to input
  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    // check if the task is empty
    if (!this.state.value.replace(/\s/g, "").length) {
      alert("Cannot add empty task.");
      return;
    }
    this.setState({
      // items: [...this.state.items, this.state.value],
      value: ""
    });

    this.appendItem();
    this.listUpdate();
  };

  appendItem() {
    const path = "/" + this.state.name + "/add-items";
    axios
      .post(path, {
        item: this.state.value,
        date: Date(),
        complete: false
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  listUpdate = () => {
    const path = "/daily-tasks/get-items";
    axios.get(path).then(res => {
      this.setState({ items: res.data });
    });
  };

  // handle enter key press
  onKeyPress = e => {
    if (e.key === "Enter") {
      this.handleSubmit(e);
    }
  };

  // remove items from list
  remove = (e, index) => {
    const { items } = this.state;
    var toRemove = items[index]; // item to be removed
    alert("Remove " + toRemove + "?");
    if (index !== -1) {
      items.splice(index, 1);
    }
    this.setState({
      items: items
    });
    this.removeRequest(toRemove);
  };

  removeRequest(toRemove) {
    const path = "/" + this.state.name + "/remove-items";
    axios
      .post(path, {
        name: toRemove
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <ListCard>
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            onKeyPress={this.onKeyPress}
            className={"input-field"}
          />
        </label>
        <input
          type="button"
          value="+"
          onClick={this.handleSubmit}
          className="add-button"
        />
        <hr />
        <ul>
          {this.state.items.map((item, index) => (
            <div key={item._id}>
              <li>
                {item.item}{" "}
                <button
                  onClick={e => this.remove(e, item)}
                  className="remove-button"
                >
                  remove &#9747;
                </button>
              </li>
            </div>
          ))}
        </ul>
      </ListCard>
    );
  }
}

export default Form;
