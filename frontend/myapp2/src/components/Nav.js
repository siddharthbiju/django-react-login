import React from "react";
import PropTypes from "prop-types";
import "./nav.css";

function Nav(props) {
  const logged_out_nav = (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => props.display_form("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => props.display_form("login")}>
              Login
            </a>
          </li>
          <li>
            <a href="#" onClick={() => props.display_form("signup")}>
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );

  const logged_in_nav = (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={props.handle_logout}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
