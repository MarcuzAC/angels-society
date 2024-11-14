import React from "react";

const Contact = () => {
  return (
    <section
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#f0f8ff",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          color: "#333",
          marginBottom: "10px",
        }}
      >
        Contact Us
      </h2>
      <p
        style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "20px",
        }}
      >
        We’d love to hear from you! Reach out to us through the following:
      </p>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#fff",
          borderRadius: "5px",
          border: "1px solid #ddd",
          marginBottom: "20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p
          style={{
            fontSize: "16px",
            color: "#007bff",
            margin: "10px 0",
          }}
        >
          Email:{" "}
          <a
            href="mailto:angelssocietymw@gmail.com"
            style={{
              textDecoration: "none",
              color: "#007bff",
              fontWeight: "bold",
            }}
          >
            angelssocietymw@gmail.com
          </a>
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#007bff",
            margin: "10px 0",
          }}
        >
          Facebook:{" "}
          <a
            href="https://facebook.com/angelssociety"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#007bff",
              fontWeight: "bold",
            }}
          >
            Angels Society
          </a>
        </p>
      </div>
      <p
        style={{
          fontSize: "14px",
          color: "#999",
          marginTop: "10px",
        }}
      >
        Thank you for supporting Angels Society. Together, we make a difference!
      </p>
    </section>
  );
};

export default Contact;
