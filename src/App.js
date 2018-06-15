import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
const store = configureStore();

// store.dispatch(
//   addExpense({ description: "Water bill", amount: 5000, createdAt: 1000 })
// );
// store.dispatch(
//   addExpense({ description: "Gas bill", amount: 2000, createdAt: 2000 })
// );
// store.dispatch(
//   addExpense({ description: "Rent", amount: 10000, createdAt: -1000 })
// );
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <AppRouter />
//       </div>
//     );
//   }
// }

export default jsx;
