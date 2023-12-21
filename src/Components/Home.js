import React from "react";

import BrainyImage from "../Assets/Brainy.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
       
        <div className="home-text-section">
        <h1 className="primary-heading">
            Welcome to <br />
            <span style={{ backgroundColor: "#CEE250", padding: "0 4px" }}>
              Brainy
            </span>{" 's  store !"}
          </h1>
          <p className="primary-text">
          Discover my chic swag collection ! Elevate your style, embrace your brilliance,
          and unleash your unique with every purchase. 
          </p>
          <button className="secondary-button">
            Shop Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BrainyImage} alt="" style={{ marginTop: "-60px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;