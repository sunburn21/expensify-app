import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";
import numeral from "numeral";
const ExpensesSummary = props => {
  const expenseWord = props.expenses.length == 1 ? "expense" : "expenses";
  return (
    <div>
      <h3>
        Viewing {props.expenses.length} {expenseWord} totaling{" "}
        {numeral(expensesTotal(props.expenses) / 100).format("$0,0.00")}
      </h3>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
