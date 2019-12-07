import React from "react";
import { Pages } from "../../constants/pages";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

const Switcher = styled.div`
  padding: 0px 10px;
  margin-left: 20%;
  width: 70%;
  height: 88vh;
`;

class PageSwitcher extends React.Component {
  render() {
    return (
      <Switcher>
        <Switch>
          {Pages.map(page => {
            return (
              <Route key={page.page} path={page.path} component={page.page} />
            );
          })}
        </Switch>
      </Switcher>
    );
  }
}

export default PageSwitcher;
