import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/chips">
        Chips
      </NavLink>
      <NavLink exact to="/drinks">
        Drinks
      </NavLink>
      <NavLink exact to="/cookies">
        Cookies
      </NavLink>
    </nav>
  );
}

export default NavBar;
