import React from "react";
import { MainContainer, Row } from "../Sections";
import styled from "styled-components";
import List from "../Form.jsx";
import GoalList from "../GoalList";

const DateContainer = styled.div`
  display: flex;
  margin-top: 0.5em;
  width: 30%;
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
`;

const TrackerContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  width: 50%;
  height: auto;
  border-radius: 10px;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 !important;
  width: 150%;
  height: 35vh;
  margin-left: 0px;
`;

const CompleteBox = styled.div`
  color: #313660;
  font-size: 1em;
  margin: 3vh 0;
  padding: 10px;
  width: 35.5%;
  height: 25vh;
  max-height: 100%;
  border: 1px solid gray;
  border-radius: 10px;
  overflow: auto;
`;

// Date settings
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

let d = new Date();

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      completedItems: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const element = document.getElementById("goalInput");

    if (element.value !== "") {
      var newItem = {
        text: element.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      element.value = "";
    }

    console.log(this.state.items);
  }

  deleteItem(key) {
    var deletedItems = this.state.items.filter(function(item) {
      return item.key === key;
    });

    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      ...this.state,
      items: filteredItems,
      completedItems: [...deletedItems, ...this.state.completedItems]
    });
  }

  render() {
    return (
      <div>
        <MainContainer>
          <Row>
            <h2>Weekly Goals</h2>
          </Row>
          <hr />
          <DateContainer>
            <Row>
              <h5>{d.toLocaleDateString("en-US", options)}</h5>
            </Row>
          </DateContainer>
          <TopContainer>
            <ListContainer>
              {/* <List placeholder={"Add a goal"} /> */}
              <GoalList
                items={this.state.items}
                deleteItem={this.deleteItem}
                addItem={this.addItem}
              />
            </ListContainer>
            <TrackerContainer>
              <h5>Goal Tracker</h5>
            </TrackerContainer>
          </TopContainer>
          <Row>
            <h5>Completed Goals</h5>
          </Row>
          <CompleteBox>
            {this.state.completedItems.map((value, i) => (
              <p key={`${value.text}-${i}`}>{value.text}</p>
            ))}
          </CompleteBox>
        </MainContainer>
      </div>
    );
  }
}

export default Goals;
