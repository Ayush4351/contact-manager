import React from "react";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        <img
          src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"
          height="30"
          width="30"
          alt="branding_logo"
        />{" "}
        {props.branding}
      </a>
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
