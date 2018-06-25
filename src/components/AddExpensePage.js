import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

const AddExpensePage = props => (
  <div>
    <div className="summary">
      <div className="content-container">
        <h1 className="summary__title">Add an expense</h1>
      </div>
    </div>
    <div className="content-container">
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(startAddExpense(expense));
          props.history.push("/dashboard");
        }}
      />
    </div>
  </div>
);
export default connect()(AddExpensePage);
