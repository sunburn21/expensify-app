import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
  <div>
    <Link to={`edit/${id}`}>
      <h3>{description}</h3>
    </Link>

    <p>
      {numeral(amount / 100).format("$0,0.00")}
      -
      {moment(createdAt).format("MMMM Do, YYYY")}
      {/* <button
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button> */}
    </p>
  </div>
);

export default connect()(ExpenseListItem);
