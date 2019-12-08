import Dropdown from "react-dropdown";
import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import "./index.css";
import ArchiveImg from "../../assets/20x20.png";
import { Month, Day, Year } from "../../constants/archive";
import * as moment from "moment";
import axios from "axios";

let date = moment().format("MMM Do YY");
// let d = new Date();

const ArchiveContainer = styled.div`
  display: flex;
  // flex-direction: column;
  width: 45%;
  justify-content: space-between;
`;
const Row = styled.div`
  display: flex;
`;
const Title = styled.div`
  display: flex;
  width: 50%;
  /* border: 1px solid #99a3ad; */
`;
const ArcImg = styled.img`
  display: flex;
  padding-left: 20px;
  padding-top: 10px;
  width: 20px;
  height: 20px;
`;
const CompleteBox = styled.div`
  margin: 3vh 0;
  padding: 10px;
  width: 47%;
  height: 25vh;
  background-color: white;
  max-height: 100%;
  border: 1px solid #99a3ad;
  border-radius: 10px;
  overflow: auto;
`;
class Archive extends Component {
  state = {
    day: "",
    month: "",
    year: "",
    archive: ["hello"]
  };

  componentDidMount() {
    // should pass in date selected from drop down
    this.getArchives("Dec 9th 19");
  }

  setDate() {}

  getArchives(date) {
    axios.post("/daily-tasks/set-date", {
      filter: date
    });
    axios
      .get("/daily-tasks/get-archive")
      .then(res => this.setState({ archive: res.data }));
  }
  // handleChange = (property, value) => {
  //   this.setState({ ...state, ...{ [property]: value } });
  //   console.log(e);
  // };

  // select(e) {
  //   alert(e.target.value);
  // }
  render() {
    return (
      <>
        <ArchiveContainer>
          <Title>
            <h5>Archives</h5>
            <ArcImg src={ArchiveImg} />
          </Title>
          <Row>
            <Dropdown className="test2" options={Month} placeholder="Month" />

            <Dropdown className="test1" options={Day} placeholder="Day" />

            <Dropdown className="test3" options={Year} placeholder="Year" />
          </Row>
        </ArchiveContainer>
        <CompleteBox>
          {this.state.archive.map(item => (
            <div key={item._id}>
              <li>{item.item} </li>
            </div>
          ))}
        </CompleteBox>
      </>
    );
  }
}

export default Archive;
