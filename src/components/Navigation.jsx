import React from "react";
import {
  Route,
  Switch,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";
import { Pages } from "./pages.js";
import styled from "styled-components";
import Logo from "../assets/avatar-sm.png";

const PageContainer = styled.div`
  padding: 0px 10px;
  margin-left: 20%;
  width: 70%;
  height: 88vh;
`;

const NavWrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  height: 84vh;
  width: 200px;
  bottom: 0;
  justify-content: space-evenly;
  padding-left: 3em;
  padding-top: 10px;
  padding-bottom: 40px;
  background: #97aef4;
  font-size: 1em;
  border-radius: 0px 36px 0px 0px;
`;

const IconImage = styled.img`
  display: flex;
  align-content: center;
  width: 100px;
  height: 100px;
  // padding: 10px;
`;

const NameText = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: white;
  align-self: center;
  padding: 0;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100px;
`;

const TopWrapper = styled.div`
  display: flex;
  height: 11vh;
  justify-content: space-between;
  padding: 0 10px;
`;

// Date settings
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

let d = new Date();

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Overview"
    };
  }

  // there is definitely a much more efficient way of doing this
  // need to refactor code for this functionality
  newPage = (e, title) => {
    this.setState({
      title: title
    });
  };

  render() {
    return (
      <>
        <TopWrapper>
          <h3>{this.state.title}</h3>
          <h4>{d.toLocaleDateString("en-US", options)}</h4>
        </TopWrapper>

        <div>
          <Router>
            <NavWrapper>
              <ProfileContainer>
                <IconImage src={Logo} />
                <NameText>Name</NameText>
              </ProfileContainer>
              {/* Nav side bar  */}
              <NavLink
                to={"/overview"}
                title="Overview"
                activeClassName="curr-page"
                onClick={e => this.newPage(e, "Overview")}
              >
                Overview
              </NavLink>
              <NavLink
                to={"/daily-tasks"}
                activeClassName="curr-page"
                onClick={e => this.newPage(e, "Daily Tasks")}
              >
                Daily Tasks
              </NavLink>
              <NavLink
                to={"/self-evaluation"}
                activeClassName="curr-page"
                onClick={e => this.newPage(e, "Self Evaluation")}
              >
                Self Evaluation
              </NavLink>
              <NavLink
                to={"/goals"}
                activeClassName="curr-page"
                onClick={e => this.newPage(e, "Goals")}
              >
                Goals
              </NavLink>
              <NavLink
                to={"/resources"}
                activeClassName="curr-page"
                onClick={e => this.newPage(e, "Resources")}
              >
                Resources
              </NavLink>
            </NavWrapper>
            <PageContainer>
              <Switch>
                {Pages.map(page => {
                  return (
                    <Route
                      key={page.page}
                      path={page.path}
                      component={page.page}
                    />
                  );
                })}
              </Switch>
            </PageContainer>
          </Router>
        </div>
      </>
    );
  }
}

export default Navigation;
