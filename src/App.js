import "./firebase/firebase";
import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import "normalize.css/normalize.css";
const store = configureStore();

store.dispatch(startSetExpenses());
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
export default jsx;
