import React from "react";

// Import images from the assets folder
import frankImage from "../assets/kaondo.jpeg"; 
import nelsonImage from "../assets/nazo.jpeg"; 
import trinityImage from "../assets/shawa.jpeg"; 
//import samuelImage from "../assets/samuel-moyo.jpeg"; 
//import mariaImage from "../assets/maria-banda.jpeg";

// Dummy data for the executive members
const executives = [
  {
    name: "Frank Kaondo",
    position: "Programs Manager",
    contact: "+265 986 61 61 01",
    email: "f.kaondo@angelssocietymw.com",
    image: frankImage, // Updated to import image from assets folder
  },
  {
    name: "Nelson Nazombe",
    position: "Managing Director",
    contact: "+265 882 98 88 02",
    email: "n.nazombe@angelssocietymw.com",
    image: nelsonImage, // Updated to import image from assets folder
  },
  {
    name: "Trinity Shawa",
    position: "Secretary",
    contact: "+265 999 456 789",
    email: "t.shawa@angelssocietymw.com",
    image: trinityImage, // Updated to import image from assets folder
  },
];

const About = () => {
  return (
    <section style={styles.aboutSection}>
      <h2>About Us</h2>
      <p>
        Angels Society is a non-profit organization founded by clinical medicine students
        to bridge healthcare gaps in Malawi.
      </p>
      
      <h3>Our Executive Members</h3>
      
      <div style={styles.tilesContainer}>
        {executives.map((executive, index) => (
          <div key={index} style={styles.tile}>
            <img src={executive.image} alt={executive.name} style={styles.image} />
            <div style={styles.info}>
              <h4>{executive.name}</h4>
              <p><strong>Position:</strong> {executive.position}</p>
              <p><strong>Contact:</strong> {executive.contact}</p>
              <p><strong>Email:</strong> {executive.email}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Styles for the component
const styles = {
  aboutSection: {
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
  },
  tilesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Grid with responsive columns
    gap: "1.5rem", // Space between tiles
    marginTop: "2rem",
  },
  tile: {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem",
  },
  info: {
    textAlign: "left",
  },
};

export default About;
