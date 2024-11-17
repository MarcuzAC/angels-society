import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#034694",
    padding: "0.5rem 2rem",
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
    width: "40px",
    height: "40px",
    marginRight: "10px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    padding: "0.5rem 1rem",
    fontWeight: "bold",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "1rem",
  };

  const menuButtonStyle = {
    display: "none", // Hidden by default
    fontSize: "1.5rem",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
  };

  const mobileMenuStyle = {
    display: isMenuOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "#034694",
    padding: "1rem 0",
    zIndex: 1000,
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo */}
      <Link to="/" style={logoStyle}>
        <img src={logo} alt="Logo" style={logoImageStyle} />
        Angels Society
      </Link>

      {/* Desktop Links */}
      <div
        style={{
          ...navLinksStyle,
          display: window.innerWidth > 768 ? "flex" : "none", // Hide on smaller screens
        }}
      >
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/programs" style={linkStyle}>
          Programs
        </Link>
        <Link to="/get-involved" style={linkStyle}>
          Get Involved
        </Link>
        <Link to="/about" style={linkStyle}>
          About Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        style={{ ...menuButtonStyle, display: window.innerWidth <= 768 ? "block" : "none" }}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle}>
        <Link to="/" style={linkStyle} onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/programs" style={linkStyle} onClick={() => setIsMenuOpen(false)}>
          Programs
        </Link>
        <Link to="/get-involved" style={linkStyle} onClick={() => setIsMenuOpen(false)}>
          Get Involved
        </Link>
        <Link to="/about" style={linkStyle} onClick={() => setIsMenuOpen(false)}>
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
