import React, { useState } from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuIsDisplayed, setMenuIsDisplayed] = useState(false);
  return (
    <nav
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="title is-size-1">ZipCity</h1>
        </Link>

        <div
          className={`navbar-burger ${menuIsDisplayed ? "is-active" : ""}`}
          onClick={() => setMenuIsDisplayed(!menuIsDisplayed)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={`navbar-menu ${menuIsDisplayed ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link to="/city" className="navbar-item">
            Find City
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
