import React from "react";
import { Typewriter } from "react-simple-typewriter";
import backgroundImage from "../assets/angelshome.jpeg";

const Home = () => {
  const homeStyle = {
    position: "relative",
    textAlign: "center",
    padding: "2rem",
    background: `url(${backgroundImage}) no-repeat center center`,
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the alpha for desired darkness
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2, // Ensure content is above the overlay
  };

  const headingStyle = {
    fontSize: "3rem", // Larger font size
    fontWeight: "bold", // Bold text
    color: "#034694",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontSize: "1.5rem", // Slightly larger paragraph text
    fontWeight: "500", // Semi-bold for better readability
    color: "#f2f2f2",
    marginBottom: "2rem",
  };

  const animatedTextStyle = {
    fontSize: "2rem", // Larger animated text
    fontWeight: "bold", // Bold text
    color: "#034694",
    marginTop: "1.5rem",
  };

  return (
    <section style={homeStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Welcome to Angels Society</h2>
        <p style={paragraphStyle}>
          Dedicated to transforming healthcare access and delivery in Malawi.
        </p>
        <p style={paragraphStyle}>
        Join us in making a difference.
        </p>
        {/* Animated Words */}
        <div style={animatedTextStyle}>
          <Typewriter
            words={[
              "Providing Free Medical Services",
              "Educating Communities on Healthcare",
              "Advocating for Health Equity",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
