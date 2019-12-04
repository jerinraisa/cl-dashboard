import Dropdown from "react-dropdown";
import ReactDOM from "react-dom";
import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import "./index.css";
import { Month, Day, Year } from "../../constants/archive";

const ArchiveContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
class Archive extends Component {
  handleChange = e => {
    this.setState({ value: e });
    console.log(e);
  };

  render() {
    return (
      <ArchiveContainer>
        <div>
          <Dropdown
            className="test2"
            options={Month}
            onChange={this._onSelect}
            placeholder="Month"
          />
        </div>
        <Dropdown
          className="test1"
          options={Day}
          onChange={this._onSelect}
          placeholder="Day"
        />

        <Dropdown
          className="test3"
          options={Year}
          onChange={this._onSelect}
          placeholder="Year"
        />
      </ArchiveContainer>
    );
  }
}

export default Archive;
