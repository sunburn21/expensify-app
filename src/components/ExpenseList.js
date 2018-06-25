import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import "../styles/visiblity.css";

const ExpenseList = props => {
  const theexpenses = props.expenses.map((expense, i) => (
    <ExpenseListItem key={expense.id} {...expense} />
  ));
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="mobile">Expenses</div>
        <div className="desktop">Expense</div>
        <div className="desktop">Amount</div>
      </div>
      <div className="list-body">
        {theexpenses.length > 0 ? (
          theexpenses
        ) : (
          <div className="list-item__error">No expenses yet.</div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpenseList);
