import React from "react";
import Typed from "react-typed";

const AnimatedWords = () => {
  return (
    <div style={{ textAlign: "center", fontSize: "2rem", marginTop: "2rem" }}>
      <Typed
        strings={[
          "Welcome to Angels Society",
          "Transforming Healthcare in Malawi",
          "Join Us in Making a Difference",
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </div>
  );
};

export default AnimatedWords;
