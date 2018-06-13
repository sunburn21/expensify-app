import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    {/* //also a edit link */}
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </div>
);
export default Header;
