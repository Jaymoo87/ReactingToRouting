import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav d=flex justify-content-around bg-dark p-3 text-dark">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-link ${
            isActive ? "active btn btn-dark text-secondary btn-outline-dark" : "btn btn-secondary text-light"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/people"
        className={({ isActive }) =>
          `nav-link ${
            isActive ? "active btn btn-dark text-secondary btn-outline-dark" : "btn btn-secondary text-light"
          }`
        }
      >
        People
      </NavLink>
      <NavLink
        to="/films"
        className={({ isActive }) =>
          `nav-link ${
            isActive ? "active btn btn-dark text-secondary btn-outline-dark" : "btn btn-secondary text-light"
          }`
        }
      >
        Films
      </NavLink>
    </nav>
  );
};

export default Navbar;
