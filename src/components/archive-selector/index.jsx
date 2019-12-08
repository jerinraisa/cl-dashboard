import Dropdown from "react-dropdown";
import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import "./index.css";
import { Month, Day, Year } from "../../constants/archive";

const ArchiveContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "",
      day: "",
      year: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(property, value) {
    this.setState({ ...this.state, [property]: value });
  }

  select(e) {
    alert(e.target.value);
  }

  render() {
    return (
      <ArchiveContainer>
        <Dropdown
          className="test1"
          options={Day}
          onChange={e => this.handleChange("day", e.target.value)}
          placeholder="Day"
        />
        <Dropdown
          className="test2"
          options={Month}
          onChange={e => this.handleChange("month", e.target.value)}
          placeholder="Month"
        />
        <Dropdown
          className="test3"
          options={Year}
          onChange={e => this.handleChange("year", e.target.value)}
          placeholder="Year"
        />
      </ArchiveContainer>
    );
  }
}

export default Archive;
