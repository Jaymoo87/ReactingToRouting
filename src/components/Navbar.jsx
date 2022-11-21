import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active btn btn-success" : null}`}>
        Home
      </NavLink>
      <NavLink to="/people" className={({ isActive }) => `nav-link ${isActive ? "active btn btn-success" : null}`}>
        About
      </NavLink>
    </div>
  );
};

export default Navbar;
