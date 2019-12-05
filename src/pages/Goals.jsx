import React from "react";
import { MainContainer, Row } from "../components/Global/Sections";
import styled from "styled-components";
import GoalList from "../components/GoalsList/index.jsx";
import ProgressBar from "../components/ProgressBar/index.jsx";
import axios from "axios";

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
  display: flex;
  align-content: center;
  flex-direction: column;
  width: 50%;
  height: auto;
  border-radius: 10px;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  padding-top: 1em;
  justify-content: center;
  width: 100%;
  height: auto;
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
  border: 1px solid #99a3ad;
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
  }

  addItem = e => {
    e.preventDefault();
    const element = document.getElementById("goalInput");

    if (element.value !== "") {
      var newItem = {
        goal: element.value,
        key: Date.now(),
        date: Date.now(), // change this to MMM DD YY later
        complete: false
      };

      axios.post("/goals/add-goals", newItem);
      this.listUpdate();
      element.value = "";
    }

    console.log(this.state.items);
  };

  listUpdate = () => {
    axios.get("/goals/get-goals").then(res => {
      this.setState({
        items: res.data
      });
    });
  };

  completeGoal = goal => {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== goal.key;
    });

    this.setState({
      ...this.state,
      items: filteredItems,
      completedItems: [...this.state.completedItems, goal]
    });
  };

  deleteGoal = goal => {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== goal.key;
    });

    this.setState({
      ...this.state,
      items: filteredItems
    });
  };

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
                completeGoal={this.completeGoal}
                deleteGoal={this.deleteGoal}
                addItem={this.addItem}
              />
            </ListContainer>
            <TrackerContainer>
              <h5>Goal Tracker</h5>
              <ProgressBarContainer>
                <ProgressBar
                  items={this.state.items}
                  completedItems={this.state.completedItems}
                />
              </ProgressBarContainer>
            </TrackerContainer>
          </TopContainer>
          <Row>
            <h5>Completed Goals</h5>
          </Row>
          <CompleteBox>
            {this.state.completedItems.map((value, i) => (
              <h6 key={`${value.goal}-${i}`}>{value.goal}</h6>
            ))}
          </CompleteBox>
        </MainContainer>
      </div>
    );
  }
}

export default Goals;
