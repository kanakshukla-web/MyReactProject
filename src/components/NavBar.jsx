import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "../index.css";

const NavBar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand" to="/home">
                Ananya Industries
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="https://www.google.comnavbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/home"
                    >
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/services"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/logout"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
