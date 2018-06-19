import "./firebase/firebase";
import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default jsx;
