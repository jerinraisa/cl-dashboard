import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "./index.css";

class ProgressBar extends React.Component {
  render() {
    let percentage = 0;

    // This check makes sure we aren't dividing 0, if there are no goals added, like when you start up
    if (this.props.completedItems.length + this.props.items.length != 0) {
      // Completed items divided by the total number of items (items + completed items)
      percentage =
        this.props.completedItems.length /
        (this.props.items.length + this.props.completedItems.length);

      // Multipled by 100 to make decimal into an integer
      percentage = percentage * 100;

      // Floored so you don't get numbers like 33.333, just 33
      percentage = Math.floor(percentage);
    }

    return <CircularProgressbar value={percentage} text={`${percentage}%`} />;
  }
}
export default ProgressBar;
