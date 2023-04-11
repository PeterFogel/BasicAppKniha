import React from "react";
import homeImmage from "../assets/home.jpg";
// import Swal from "sweetalert2";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%"
        // height: "100%"
      }}
    >
      <img
        src={homeImmage}
        alt="placeholder"
        style={{
          width: "100%",
          height: "95vh"
        }}
      />
    </div>
  );
};

export default Home;
