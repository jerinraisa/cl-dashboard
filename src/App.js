import "./App.css";
import React from "react";
import Header from "./components/Global/Header";
import Navigation from "./components/Global/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import PageSwitcher from "./components/Global/PageSwitcher";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Your Dashboard"
    };
  }

  newPage = (e, pageTitle) => {
    this.setState({ pageTitle });
  };

  render = () => (
    <div className="App">
      <Router>
        <Header pageTitle={this.state.pageTitle} />
        <Navigation newPage={this.newPage} />
        <PageSwitcher />
      </Router>
    </div>
  );
}

export default App;
