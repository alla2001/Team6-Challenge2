import React from "react";
import Planner1 from "../assets/planner1.png";
import Planner2 from "../assets/planner2.png";
import Planner3 from "../assets/planner3.png";

const Planners = () => {
 
  const workInfoData = [
    {
      image: Planner1,
      title: "Price : 400DA",
    },
    {
      image: Planner2,
      title: "Price : 400DA",
    },
    {
      image: Planner3,
      title: "Price : 400DA",
    },
  ];

  const handleAddToCart = (title) => {
    // Handle the "Add to Cart" action, e.g., update a shopping cart state
    console.log(`Added ${title} to cart`);
  };

  return (
    
    <div className="work-section-wrapper">
      <br></br> <br></br> <br></br> <br></br>
       <h1 className="primary-heading1">
      <span style={{ backgroundColor: "#CEE250", padding: "0 14px" }}>
        Planners
      </span>
      </h1>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2 style={{ color: "#013762" }}>{data.title}</h2>
            <button className="secondary-button"onClick={() => handleAddToCart(data.title)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planners;
