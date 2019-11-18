import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "./index.css";

const percentage = 90;

class ProgressBar extends React.Component {
  render() {
    return <CircularProgressbar value={percentage} text={`${percentage}%`} />;
  }
}
export default ProgressBar;
