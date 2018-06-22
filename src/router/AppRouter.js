import { Router, Route, Switch } from "react-router-dom";
import React from "react";
import createHistory from "history/createBrowserHistory";
import ExpensifyDashboardPage from "../components/ExpensifyDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpExpensePage from "../components/HelpExpensePage";
import NotFoundPage from "../components/notFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./privateRoute";

export const history = createHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpensifyDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
