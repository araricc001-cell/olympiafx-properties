// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SITE } from "../config/siteConfig";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navItem = ({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link");

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="navbar-brand-mark">O</span>
          <span className="navbar-brand-text">{SITE.brandName}</span>
        </NavLink>

        <button
          className="navbar-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>

        <nav className={`navbar-links ${isOpen ? "navbar-links-open" : ""}`}>
          <NavLink to="/" className={navItem} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/properties" className={navItem} onClick={closeMenu}>
            Properties
          </NavLink>
          <NavLink to="/buy-land" className={navItem} onClick={closeMenu}>
            Buy Land
          </NavLink>
          <NavLink to="/build-home" className={navItem} onClick={closeMenu}>
            Build a Home
          </NavLink>
          <NavLink to="/contact" className="nav-link nav-link-cta" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
