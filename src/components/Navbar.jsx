import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4caf50",
    padding: "0.5rem 1rem", // Reduced padding
    color: "white",
  };

  const navLinksStyle = {
    listStyle: "none",
    display: "flex",
    gap: "0.5rem", // Reduced gap
    margin: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "0.9rem", // Reduced font size
  };

  const logoStyle = {
    fontSize: "1.2rem", // Reduced font size
    fontWeight: "bold",
  };

  return (
    <nav style={navbarStyle}>
      <h1 style={logoStyle}>Angels Society</h1>
      <ul style={navLinksStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/programs" style={linkStyle}>Programs</Link></li>
        <li><Link to="/get-involved" style={linkStyle}>Get Involved</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
