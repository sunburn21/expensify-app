import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";
import numeral from "numeral";
import { Link } from "react-router-dom";
import "../styles/content-container.css";
import "../styles/summary.css";
const ExpensesSummary = props => {
  const expenseWord = props.expenses.length == 1 ? "expense" : "expenses";
  return (
    <div className="summary">
      <div className="content-container">
        <h1 className="summary__title">
          Viewing <span className="">{props.expenses.length}</span>{" "}
          {expenseWord} totaling{" "}
          <span>
            {numeral(expensesTotal(props.expenses) / 100).format("$0,0.00")}
          </span>
        </h1>
        <div className="summary__actions">
          <Link className="box-layout__button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
