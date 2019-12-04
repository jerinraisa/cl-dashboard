import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "./index.css";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items.length !== this.props.items.length) {
      this.updatePercentage(this.props.completedItems);
    }
  }

  updatePercentage = completedItems => {
    if (!completedItems || (completedItems && !completedItems.length)) {
      return;
    }

    let percentage = 0;

    // Completed items divided by the total number of items (items + completed items)
    percentage =
      this.props.completedItems.length /
      (this.props.items.length + this.props.completedItems.length);

    // Multipled by 100 to make decimal into an integer
    percentage = percentage * 100;

    // Floored so you don't get numbers like 33.333, just 33
    percentage = Math.floor(percentage);

    this.setState({
      percentage
    });
  };

  render() {
    return (
      <CircularProgressbar
        value={this.state.percentage}
        text={`${this.state.percentage}%`}
      />
    );
  }
}
export default ProgressBar;
