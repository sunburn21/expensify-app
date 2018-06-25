import React from "react";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";
import "../styles/header.css";
import "../styles/content-container.css";
const Header = props => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>KnowExpense</h1>
        </Link>
        {/* <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink> */}
        {/* //also a edit link */}
        <button className="header__button" onClick={props.startLogout}>
          LogOut
        </button>
      </div>
    </div>
  </header>
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
