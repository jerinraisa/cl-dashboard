import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import { Pages } from "../../constants/pages";
import styled from "styled-components";
import Logo from "../../assets/383x383.png";

const NavWrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  height: 100vh;
  width: 200px;
  bottom: 0;
  justify-content: center;
  padding-left: 3em;
  padding-bottom: 10vh;
  background: #e6a541;
  font-size: 1em;
`;

const Links = styled.div`
  display: flex;
  height: 35vh;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 0;
  margin-top: 50px;
`;

const IconImage = styled.img`
  display: flex;
  align-content: center;
  width: 100px;
  height: 100px;
`;

const NameText = styled.h3`
  font-family: "Signika";
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

class Navigation extends React.Component {
  render() {
    return (
      <NavWrapper>
        <ProfileContainer>
          <IconImage src={Logo} />
          <NameText>Lynn</NameText>
        </ProfileContainer>
        <Links>
          {Pages.map(page => {
            return (
              <NavLink
                to={page.path}
                title={page.name}
                activeClassName="curr-page"
                onClick={e => this.props.newPage(e, page.name)}
              >
                {page.name}
              </NavLink>
            );
          })}
        </Links>
      </NavWrapper>
    );
  }
}

export default Navigation;
