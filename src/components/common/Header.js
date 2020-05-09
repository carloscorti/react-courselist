import React from "react";

const Header = () => {
  return (
    <nav className="container-fluid">
      <a href="/">Home</a>
      <span> | </span>
      <a href="/about">About</a>
      <span> | </span>
      <a href="/courses">Courses</a>
    </nav>
  );
};

export default Header;
