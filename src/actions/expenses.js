import uuid from "uuid";
import database from "../firebase/firebase";
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            ...expense,
            id: ref.key
          })
        );
      });
  };
};
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//Set_Expenses

export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(expense => {
          expenses.push({
            id: expense.key,
            ...expense.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
export const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(snapshot => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const startEditExpense = (id, expense) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/expenses/${id}`)
      .update(expense)
      .then(snapshot => {
        dispatch(editExpense(id, expense));
      });
  };
};
