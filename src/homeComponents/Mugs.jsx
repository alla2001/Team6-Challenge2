import React from "react";
import Mug1 from "../assets/mug1.png";
import Mug2 from "../assets/mug2.png";
import Mug3 from "../assets/mug3.png";

const Mugs = () => {
 
  const workInfoData = [
    {
      image: Mug1,
      title: "Price : 600DA",
    },
    {
      image: Mug2,
      title: "Price : 600DA",
    },
    {
      image: Mug3,
      title: "Price : 600DA",
    },
  ];

  const handleAddToCart = (title) => {
    // here we Handle the "Add to Cart" action
    console.log(`Added ${title} to cart`);
  };

  return (
    
    <div className="work-section-wrapper">
      <br></br> <br></br> <br></br> <br></br>
       <h1 className="primary-heading1">
      <span style={{ backgroundColor: "#CEE250", padding: "0 14px" }}>
        Mugs
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

export default Mugs;
