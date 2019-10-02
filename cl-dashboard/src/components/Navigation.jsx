import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Pages } from "./pages/pages.js";
import styled from "styled-components";
import List from "./List.jsx";

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fefefe;
`;

const TodayDate = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #a7b0bc;
  text-align: right;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  // margin: 15px;
  padding-right: 10px;
  padding-top: 10px;
  background: #fefefe;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 84.5vh;
  width: 25vh;
  justify-content: space-evenly;
  padding-left: 40px;
  padding-top: 40px;
  background: #97AEF4;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800
  font-size: 1em;
  border-radius: 0px 36px 0px 0px;
`;

// Date settings
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
let d = new Date();

function PageLink(props) {
  return (
    <div>
      <a
        rel="noopener noreferrer"
        href={props.site}
        target={props.target}
        style={{ paddingLeft: 13, textDecoration: "none" }}
      >
        <i className="navlink ">{props.tag}</i>
      </a>
    </div>
  );
}

class Navigation extends React.Component {
  render() {
    return (
      <>
        <TodayDate>{d.toLocaleDateString("en-US", options)}</TodayDate>
        <Container>
          <div>
            {/* Routing for navigation bar  */}
            <Router>
              {Pages.map(page => {
                return (
                  <Route
                    key={page.page}
                    path={page.path}
                    component={page.page}
                  />
                );
              })}
            </Router>
            <NavWrapper>
              {/* Nav side bar  */}
              <PageLink site={"/overview"} tag={"Overview"} />
              <PageLink site={"/daily-tasks"} tag={"Daily Tasks"} />
              <PageLink site={"/self-evaluation"} tag={"Self Evaluation"} />
              <PageLink site={"/goals"} tag={"Goals"} />
              <PageLink site={"/resources"} tag={"Resources"} />
            </NavWrapper>
          </div>
          {/* <List></List> */}
        </Container>
      </>
    );
  }
}

export default Navigation;
