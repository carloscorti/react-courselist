import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "orange" };
  return (
    <nav className="container-fluid">
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      <span> | </span>
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      <span> | </span>
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
    </nav>
  );
};

export default Header;
