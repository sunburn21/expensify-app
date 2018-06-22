import React from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";
const Header = props => (
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
    <button onClick={props.startLogout}>LogOut</button>
  </div>
);
const mapDispatchToProps = dispatch => ({
  startLogout: () => {
    dispatch(startLogout());
  }
});
export default connect(
  undefined,
  mapDispatchToProps
)(Header);
