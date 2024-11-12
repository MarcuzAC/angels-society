import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import GetInvolved from "./components/GetInvolved";
import Contact from "./components/Contact";

const App = () => {
  const appStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Ensures the container fills the viewport
  };

  const contentStyle = {
    flex: 1, // Pushes the footer to the bottom by taking up available space
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;