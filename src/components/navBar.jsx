import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        RMBC Referral Utility
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/addRef">
            Add Referral
          </NavLink>
          <NavLink className="nav-item nav-link" to="/viewRef">
            View Referral
          </NavLink>
          <NavLink className="nav-item nav-link" to="/updateRef">
            Update Referral
          </NavLink>
          <NavLink className="nav-item nav-link" to="/delRef">
            Delete Referral
          </NavLink>
          <NavLink className="nav-item nav-link" to="/audit">
            Audit Trail
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
