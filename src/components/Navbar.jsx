import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#034694", // Chelsea blue background
    padding: "0.5rem 2rem",  // Reduced height by decreasing vertical padding
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

      {/* Links */}
      <div style={navLinksStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/programs" style={linkStyle}>Programs</Link>
        <Link to="/get-involved" style={linkStyle}>Get Involved</Link>
        <Link to="/about" style={linkStyle}>About Us</Link>
        <Link to="/contact" style={linkStyle}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
