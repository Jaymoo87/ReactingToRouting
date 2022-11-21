import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav d=flex justify-content-around bg-info p-3">
      <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active btn btn-success" : null}`}>
        Home
      </NavLink>
      <NavLink to="/people" className={({ isActive }) => `nav-link ${isActive ? "active btn btn-success" : null}`}>
        People
      </NavLink>
      <NavLink to="/films" className={({ isActive }) => `nav-link ${isActive ? "active btn btn-success" : null}`}>
        Films
      </NavLink>
    </div>
  );
};

export default Navbar;
