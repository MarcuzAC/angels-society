import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#034694", // Chelsea blue background
    padding: "1rem 2rem",
    color: "white",
    position: "relative",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.5rem",
  };

  const logoImageStyle = {
    width: "40px", // Logo size
    height: "40px",
    marginRight: "10px",
  };

  const dropdownStyle = {
    display: menuOpen ? "block" : "none",
    position: "absolute",
    top: "60px",
    right: "10px",
    backgroundColor: "#034694", // Chelsea blue background
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    zIndex: 1000,
  };

  const dropdownLinkStyle = {
    display: "block",
    textDecoration: "none",
    color: "white",
    padding: "0.5rem 1rem",
    fontWeight: "bold",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  };

  const toggleButtonStyle = {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "1.5rem",
    cursor: "pointer",
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo */}
      <Link to="/" style={logoStyle}>
        <img
          src={logo} // Replace with your logo's path
          alt="Logo"
          style={logoImageStyle}
        />
        Angels Society
      </Link>

      {/* Toggle Button for Small Screens */}
      <button
        style={toggleButtonStyle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Dropdown Menu */}
      <ul style={dropdownStyle}>
        <li>
          <Link to="/" style={dropdownLinkStyle} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={dropdownLinkStyle} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/programs" style={dropdownLinkStyle} onClick={() => setMenuOpen(false)}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="/get-involved" style={dropdownLinkStyle} onClick={() => setMenuOpen(false)}>
            Get Involved
          </Link>
        </li>
        <li>
          <Link to="/contact" style={dropdownLinkStyle} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
