import { firebase } from "./firebase/firebase";
import ReactDOM from "react-dom";
import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import AppRouter, { history } from "./router/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
const store = configureStore();
ReactDOM.render(<p>Loading...</p>, document.getElementById("root")); //<App />
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root")); //<App />
    hasRendered = true;
  }
};
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
ReactDOM.render(jsx, document.getElementById("root")); //<App />
//finally done
