// src/components/navbar/Navbar.js
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../../utils/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=11240+S+Lone+Elm+Rd,+Olathe,+KS+66061";

  return (
    <header className="navbar">
      <div className="navbar-accent" />

      <div className="navbar-inner">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <img className="brand-logo" src={logo} alt="Buddy's Always Friendly" />
          <span className="brand-name">Buddy’s Always Friendly</span>
        </NavLink>

        {/* Desktop Links */}
        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink className="link" to="/" end>
            Home
          </NavLink>

          <NavLink className="link" to="/whatweoffer">
            What We Offer
          </NavLink>

          <NavLink className="link" to="/faqs">
            FAQs
          </NavLink>

          <NavLink className="link" to="/about">
            About
          </NavLink>

          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </nav>

        <div className="nav-actions">
          <a
            className="nav-cta"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Get Directions
          </a>

          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            type="button"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`mobile-menu ${open ? "show" : ""}`}>
        <NavLink className="m-link" to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink className="m-link" to="/whatweoffer" onClick={closeMenu}>
          What We Offer
        </NavLink>

        <NavLink className="m-link" to="/faqs" onClick={closeMenu}>
          FAQs
        </NavLink>

        <NavLink className="m-link" to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink className="m-link" to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        <a
          className="m-cta"
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Get Directions
        </a>
      </div>
    </header>
  );
}