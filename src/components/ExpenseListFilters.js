import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import "../styles/filters.css";
class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = calenderFocused => {
    this.setState(() => ({ calenderFocused }));
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              placeholder="Search Expenses"
              className="text-input"
              type="text"
              name=""
              id=""
              value={this.props.filters.text}
              onChange={e => {
                this.props.dispatch(setTextFilter(e.target.value));
              }}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={e => {
                if (e.target.value === "date") {
                  this.props.dispatch(sortByDate());
                } else {
                  this.props.dispatch(sortByAmount());
                }
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calenderFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};
export default connect(mapStateToProps)(ExpenseListFilters);
