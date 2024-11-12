import React from "react";

const Footer = () => {
  const footerStyle = {
    textAlign: "center",
    backgroundColor: "#333",
    color: "white",
    padding: "0.5rem", // Reduced padding to make the footer smaller
    fontSize: "0.9rem", // Reduced font size for a compact footer
    marginTop: "2rem",
  };

  const paragraphStyle = {
    margin: "0.3rem 0", // Reduced margin between paragraphs
  };

  return (
    <footer style={footerStyle}>
      <p style={paragraphStyle}>© 2024 Angels Society. All rights reserved.</p>
      <p style={paragraphStyle}>Contact us: angelssocietymw@gmail.com</p>
    </footer>
  );
};

export default Footer;
