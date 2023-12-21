import React from "react";
import ProfilePic from "../assets/Mouhammed-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <br></br>   <br></br>  <br></br>   <br></br>  <br></br>
      <h1 className="primary-heading1">
      <span style={{ backgroundColor: "#CEE250", padding: "0 20px" }}>
        What they are saying
      </span>
      </h1>
        <p className="primary-text">
        Explore the happiness of many happy customers who love Brainy Store's special and stylish items. 
        Join others who enjoy quality, creativity, and the happiness that each purchase brings. 
        At Brainy Store, we're not just selling things, we're creating experiences that stick with you !
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p style={{color : "#013762"}}>
        Big thanks to Brainy Store for making shopping a delight! 
        I appreciate the quality, creativity, and the special touch that comes with every purchase. Can't wait to shop again!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2 style={{color : "#013762"}} >Mouhammed</h2>
      </div>
    </div>
  );
};

export default Testimonial;