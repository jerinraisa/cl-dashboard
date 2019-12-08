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
    if (prevProps.items !== this.props.items) {
      this.updatePercentage();
    } else if (prevProps.completedItems !== this.props.completedItems) {
      this.updatePercentage();
    }
  }

  componentDidMount() {
    this.updatePercentage();
  }
  updatePercentage = () => {
    const { completedItems, items } = this.props;
    if (items + completedItems === 0) {
      return this.setState({ percentage: 0 });
    }
    // Completed items divided by the total number of items (items + completed items)
    // and Multipled by 100 to make decimal into an integer
    const new_percentage = (completedItems / (items + completedItems)) * 100;

    // Floored so you don't get numbers like 33.333, just 33
    const floored_new_percentage = Math.floor(new_percentage);

    this.setState({
      percentage: floored_new_percentage
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
