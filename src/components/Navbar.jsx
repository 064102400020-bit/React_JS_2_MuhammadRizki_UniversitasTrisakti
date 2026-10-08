import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        ✨ MyApp
      </Link>
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/team" 
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Team
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
