import React from "react";
import { Typewriter } from "react-simple-typewriter";
import backgroundImage from "../assets/angelshome.jpeg"; 

const Home = () => {
  const homeStyle = {
    textAlign: "center",
    padding: "2rem",
    background: `url(${backgroundImage}) no-repeat center center`, // Set the background image
    backgroundSize: "cover", // Ensure the image covers the entire section
    height: "100vh", // Optional: makes sure the section covers the full viewport height
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#034694", // Chelsea blue for the heading
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#333", // Darker text for better contrast
  };

  const animatedTextStyle = {
    fontSize: "1.5rem",
    color: "#034694", // Chelsea blue for animated text
    marginTop: "1rem",
    fontWeight: "bold",
  };

  return (
    <section style={homeStyle}>
      <h2 style={headingStyle}>Welcome to Angels Society</h2>
      <p style={paragraphStyle}>
        Dedicated to transforming healthcare access and delivery in Malawi. Join us in making a difference.
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
    </section>
  );
};

export default Home;
