import React from "react";

// Import images for executives
import frankImage from "../assets/kaondo.jpeg";
import nelsonImage from "../assets/nazo.jpeg";
import kondwaImage from "../assets/kondwa.jpeg";

// Dummy data for the executive members
const executives = [
  {
    name: "Nalson Ramzie Nazombe",
    position: "Executive Director",
    contact: "+265 882 98 88 02",
    email: "n.n@angelssocietymw.com",
    image: nelsonImage,
  },
  {
    name: "Frank Kaondo",
    position: "Programs Manager",
    contact: "+265 986 61 61 01",
    email: "f.kaondo@angelssocietymw.com",
    image: frankImage,
  },
  {
    name: "Kondwani Patrick Waya",
    position: "Finance and Administration Manager",
    contact: "+265 888 47 16 61 55",
    email: "fam@angelssocietymw.com",
    image: kondwaImage,
  },
];

// Dummy data for the board members
const board = [
  {
    name: "Mary Banda",
    position: "Chairperson",
    contact: "+265 999 11 22 33",
    email: "mary.banda@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "James Phiri",
    position: "Secretary",
    contact: "+265 888 22 33 44",
    email: "james.phiri@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Patricia Mvula",
    position: "Treasurer",
    contact: "+265 777 33 44 55",
    email: "patricia.mvula@example.com",
    image: "https://via.placeholder.com/150",
  },
];

const About = () => {
  return (
    <section style={styles.aboutSection}>
      <h2>About Us</h2>
      <p>
        Angels Society is a non-profit organization founded by medical
        practitioners to bridge healthcare gaps in Malawi.
      </p>

      {/* Executives Section */}
      <h3>Secreteriat</h3>
      <div style={styles.tilesContainer}>
        {executives.map((executive, index) => (
          <div key={index} style={styles.tile}>
            <img
              src={executive.image}
              alt={executive.name}
              style={styles.image}
            />
            <div style={styles.info}>
              <h4>{executive.name}</h4>
              <p>
                <strong>Position:</strong> {executive.position}
              </p>
              <p>
                <strong>Contact:</strong> {executive.contact}
              </p>
              <p>
                <strong>Email:</strong> {executive.email}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Board Members Section */}
      <h3>Board Members</h3>
      <div style={styles.tilesContainer}>
        {board.map((member, index) => (
          <div key={index} style={styles.tile}>
            <img
              src={member.image}
              alt={member.name}
              style={styles.image}
            />
            <div style={styles.info}>
              <h4>{member.name}</h4>
              <p>
                <strong>Position:</strong> {member.position}
              </p>
              <p>
                <strong>Contact:</strong> {member.contact}
              </p>
              <p>
                <strong>Email:</strong> {member.email}
              </p>
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
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "1.5rem",
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
