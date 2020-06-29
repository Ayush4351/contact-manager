import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        <img
          src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"
          height="30"
          width="30"
          alt="branding_logo"
        />{" "}
        {props.branding}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Togglenavigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus"></i> Add Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question"></i>About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
