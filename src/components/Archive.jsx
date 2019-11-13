import React from "react";
import styled from "styled-components";
import DropdownDate from "react-dropdown-date";

const DateContainer = styled.div`
  display: flex;
  padding: 0 !important;
  width: 100%;
  margin-left: 0px;
`;

const formatDate = date => {
  // formats a JS date to 'yyyy-mm-dd'
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

let d = new Date();

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: null, selectedDate: "2019-11-15" };
  }
  render() {
    return (
      <DateContainer>
        <DropdownDate
          startDate={
            // optional, if not provided 1900-01-01 is startDate
            "2019-01-01" // 'yyyy-mm-dd' format only
          }
          endDate={
            // optional, if not provided current date is endDate
            "2030-12-31" // 'yyyy-mm-dd' format only
          }
          selectedDate={
            // optional
            this.state.selectedDate // 'yyyy-mm-dd' format only
          }
          onDateChange={date => {
            this.setState({ date: date, selectedDate: formatDate(date) });
          }}
          ids={
            // optional
            {
              year: "select-year",
              month: "select-month",
              day: "select-day"
            }
          }
          names={
            // optional
            {
              year: "year",
              month: "month",
              day: "day"
            }
          }
          defaultValues={
            // optional
            {
              year: "select year",
              month: "select month",
              day: "select day"
            }
          }
          options={
            // optional
            {
              yearReverse: true, // false by default
              monthShort: true, // false by default
              monthCaps: true // false by default
            }
          }
        />
      </DateContainer>
    );
  }
}

export default Archive;
