import React from "react";
import styled from "styled-components";

const TopWrapper = styled.div`
  display: flex;
  height: 11vh;
  justify-content: space-between;
  padding: 0 10px;
  font-weight: bolder;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TopWrapper>
        <h3>{this.props.pageTitle}</h3>
        <h4>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </h4>
      </TopWrapper>
    );
  }
}

export default Header;
