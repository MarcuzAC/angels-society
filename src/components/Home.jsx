import React from "react";

const Home = () => {
  const homeStyle = {
    textAlign: "center",
    padding: "2rem",
    background: "linear-gradient(to bottom, #e8f5e9, #ffffff)",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#4caf50",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#555",
  };

  return (
    <section style={homeStyle}>
      <h2 style={headingStyle}>Welcome to Angels Society</h2>
      <p style={paragraphStyle}>
        Dedicated to transforming healthcare access and delivery in Malawi. Join us in making a difference.
      </p>
    </section>
  );
};

export default Home;
