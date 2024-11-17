import React, { useState } from "react";
import emailjs from "emailjs-com";

// Import images
import joinImage from "../assets/join.jpeg";
import donateImage from "../assets/donate.jpg";
import involvementImage from "../assets/involvement.jpg";
import Slider from "react-slick";

// Setting up React Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GetInvolved = () => {
  const [formState, setFormState] = useState({
    involvementType: "",
    name: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formState.name,
      email: formState.email,
      involvementType: formState.involvementType,
      message: formState.message,
    };

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_USER_ID")
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSubmissionStatus(
            `Thank you, ${formState.name}! Your ${formState.involvementType} request has been received.`
          );
        },
        (error) => {
          console.error("Email send error:", error);
          setSubmissionStatus("There was an error. Please try again.");
        }
      );

    setFormState({
      involvementType: "",
      name: "",
      email: "",
      message: "",
    });
  };

  const handleOptionSelect = (option) => {
    setFormState({ ...formState, involvementType: option });
    setSubmissionStatus(null);
  };

  // Slider settings for swipe effect
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, // auto scroll every 3 seconds
    fade: true,
  };

  return (
    <section
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "10px",
        }}
      >
        Get Involved
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "20px",
        }}
      >
        Join us as a volunteer or supporter to make healthcare more accessible for everyone.
      </p>

      {/* Slider for swipeable images */}
      <div style={{ marginBottom: "20px" }}>
        <Slider {...sliderSettings}>
          <div onClick={() => handleOptionSelect("Request to Join Society")}>
            <img
              src={joinImage}
              alt="Join Society"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
            <button
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Request to Join Society
            </button>
          </div>

          <div onClick={() => handleOptionSelect("Make Donation")}>
            <img
              src={donateImage}
              alt="Make a Donation"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
            <button
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Make a Donation
            </button>
          </div>

          <div onClick={() => handleOptionSelect("Other Involvement")}>
            <img
              src={involvementImage}
              alt="Other Involvement"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
            <button
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px",
                backgroundColor: "#ffc107",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Other Involvement
            </button>
          </div>
        </Slider>
      </div>

      {submissionStatus && (
        <p
          style={{
            textAlign: "center",
            color: submissionStatus.includes("Thank you") ? "#28a745" : "#dc3545",
            marginBottom: "20px",
          }}
        >
          {submissionStatus}
        </p>
      )}

      {formState.involvementType && (
        <form onSubmit={handleSubmit}>
          <h3
            style={{
              color: "#333",
              marginBottom: "10px",
            }}
          >
            {formState.involvementType}
          </h3>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              color: "#555",
            }}
          >
            Name:
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </label>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              color: "#555",
            }}
          >
            Email:
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </label>
          {formState.involvementType === "Make Donation" && (
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                color: "#555",
              }}
            >
              Donation Amount:
              <input
                type="number"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
          )}
          {formState.involvementType === "Other Involvement" && (
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                color: "#555",
              }}
            >
              Message:
              <textarea
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  height: "100px",
                }}
              />
            </label>
          )}
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
};

export default GetInvolved;
