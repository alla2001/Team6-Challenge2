import React from "react";
import Shirt1 from "../assets/shirt1.png";
import Shirt2 from "../assets/shirt2.png";
import Shirt3 from "../assets/shirt3.png";

const Shirts = () => {
 
  const workInfoData = [
    {
      image: Shirt1,
      title: "Price : 1900DA",
    },
    {
      image: Shirt2,
      title: "Price : 1900DA",
    },
    {
      image: Shirt3,
      title: "Price : 1900DA",
    },
  ];

  const handleAddToCart = (title) => {
    // Handle the "Add to Cart" action, e.g., update a shopping cart state
    console.log(`Added ${title} to cart`);
  };

  return (
    
    <div className="work-section-wrapper">
      <br></br> <br></br>
       <h1 className="primary-heading1">
      <span style={{ backgroundColor: "#CEE250", padding: "0 8px" }}>
        T-shirts
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

export default Shirts;
