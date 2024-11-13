import React, { useState } from "react";
import mobileClinicImg from "../assets/mobile.jpg";
import educationImg from "../assets/education.jpg";
import trainingImg from "../assets/training.jpg";
import outreachImg from "../assets/outreach.jpg";
import advocacyImg from "../assets/advocacy.jpg";

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(null);

  // Dummy data for each program
  const programs = [
    {
      title: "Mobile Clinics",
      description:
        "We bring healthcare services to underserved areas through mobile clinics equipped to provide general checkups, immunizations, and treatment for common ailments.",
      image: mobileClinicImg,
    },
    {
      title: "Health Education Initiatives",
      description:
        "Empowering communities with knowledge about nutrition, hygiene, and disease prevention through workshops and seminars.",
      image: educationImg,
    },
    {
      title: "Volunteer Training",
      description:
        "Providing hands-on training and resources to volunteers who help in healthcare delivery and community programs.",
      image: trainingImg,
    },
    {
      title: "Community Outreach",
      description:
        "Building connections with local communities to understand their needs and provide tailored health solutions.",
      image: outreachImg,
    },
    {
      title: "Advocacy and Research",
      description:
        "Engaging in policy advocacy and conducting research to address systemic healthcare challenges in Malawi.",
      image: advocacyImg,
    },
  ];

  // Toggles the active program
  const toggleProgram = (title) => {
    setActiveProgram(activeProgram === title ? null : title);
  };

  return (
    <section style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", textAlign: "center", color: "#034694" }}>
        Our Programs
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {programs.map((program) => (
          <div
            key={program.title}
            onClick={() => toggleProgram(program.title)}
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
          >
            <img
              src={program.image}
              alt={program.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1.5rem", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.5rem", color: "#034694", marginBottom: "1rem" }}>
                {program.title}
              </h3>
              {activeProgram === program.title ? (
                <p style={{ fontSize: "1rem", color: "#333" }}>{program.description}</p>
              ) : (
                <p style={{ fontSize: "1rem", color: "#666", fontStyle: "italic" }}>
                  Click to learn more
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
