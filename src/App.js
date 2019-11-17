import React from "react";
import "./App.css";
import axios from "axios";
import Board from "./components/Board";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
