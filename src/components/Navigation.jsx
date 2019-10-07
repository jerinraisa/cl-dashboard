import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Pages } from "./pages/pages.js";
import styled from "styled-components";
import Logo from "../assets/logo2.png";

// const Container = styled.div`
//   // display: flex;
//   justify-content: flex-start;
//   flex-direction: row !important;
//   height: 100vh;
//   margin: 0;
// `;

const PageContainer = styled.div`
  // display: flex;
  padding: 0px 10px;
  margin-left: 20%;
  margin-top: 11vh;
  width: 70%;
  border: 1px solid red;
  height: 88vh;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  top: 0;
`;

const TodayDate = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #a7b0bc;
  top:0;
  text-align: right;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  padding-right: 10px;
  padding-top: 10px;
  background: #fefefe;
  position: fixed;
  right: 0;
  border: 1px solid red;
`;

const NavWrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  height: 85vh;
  width: 14em;
  justify-content: space-evenly;
  padding-left: 40px;
  padding-top: 40px;
  bottom: 0;
  background: #97AEF4;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  font-size: 1em;
  border-radius: 0px 36px 0px 0px;
  border: 1px solid red;
`;

const IconImage = styled.img`
  display: flex;
  align-content: center;
  width: 100px;
  height: 100px;
  border: 1px solid red;
`;

const NameText = styled.h3`
  font-size: 20px;
  font-weight: 800;
  justify-content: center;
  border: 1px solid red;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100px;
  margin-left: 45px;
  // border: 1px solid red;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 200px;
  height: 500px;
  border: 1px solid red;
`;


// Date settings
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
let d = new Date();

const PageLink = props => {
  return (
    <div>
      <a
        rel="noopener noreferrer"
        href={props.site}
        style={{ paddingLeft: 13, textDecoration: "none" }}
        onClick={e => props.newPage(e, props.tag)}
      >
        <i className="navlink">{props.tag}</i>
      </a>
    </div>
  );
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  newPage = (e, title) => {
    this.setState({
      title: title
    });
  };

  render() {
    return (
      <>
        <TodayDate>{d.toLocaleDateString("en-US", options)}</TodayDate>
          <div>
            {/* Routing for navigation bar  */}
            <Title>{this.state.title}</Title>
            <NavWrapper>
              <ProfileContainer>
                  <IconImage src={Logo} />
                  <NameText>Name</NameText>
              </ProfileContainer>
              <LinksContainer>
              {/* Nav side bar  */}
              <PageLink
                site={"/overview"}
                tag={"Overview"}
                newPage={this.newPage}
              />
              <PageLink
                site={"/daily-tasks"}
                tag={"Daily Tasks"}
                newPage={this.newPage}
              />
              <PageLink
                site={"/self-evaluation"}
                tag={"Self Evaluation"}
                newPage={this.newPage}
              />
              <PageLink site={"/goals"} tag={"Goals"} newPage={this.newPage} />
              <PageLink
                site={"/resources"}
                tag={"Resources"}
                newPage={this.newPage}
              />
              </LinksContainer>
            </NavWrapper>
            <PageContainer>
            <Router>
              {/* <Title>{this.state.title}</Title> */}

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
          </PageContainer>
        </div>
        {/* <List></List> */}
      </>
    );
  }
}

export default Navigation;
