import React from "react";

const Footer = () => {
  const footerStyle = {
    textAlign: "center",
    backgroundColor: "#333",
    color: "white",
    padding: "0.5rem",
    fontSize: "0.9rem",
  };

  const smallFooterStyle = {
    ...footerStyle,
    fontSize: "0.8rem",
    padding: "0.3rem",
  };

  return (
    <footer style={footerStyle}>
      <p>© 2024 Angels Society. All rights reserved.</p>
      <p>Contact us: angelssocietymw@gmail.com</p>
    </footer>
  );
};

export default Footer;
