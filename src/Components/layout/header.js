import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  // const Header = ({branding}) => {};
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home mr-1" />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addContacts" className="nav-link">
              <i className="fas fa-plus mr-1" />
              Add
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
