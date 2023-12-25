import React from "react";
import Mug1 from "../assets/mug1.png";
import Mug2 from "../assets/mug2.png";
import Mug3 from "../assets/mug3.png";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Mugs = () => {
 
  const navigateTo  = useNavigate();

  const handleButtonClick = (itemParams) => {
    navigateTo (`/details/${encodeURIComponent(itemParams.name)}/${encodeURIComponent(itemParams.price)}/${encodeURIComponent(itemParams.description)}/${encodeURIComponent(itemParams.image)}`, { state: { itemParams } });
  };
  const workInfoData = [
    {
      id:1,
      image: Mug1,
      title: "Price : 600DA",
      Name: "Coffee Mug Classic",
      Price: "600",
      Description: "A classic coffee mug made of durable ceramic. Perfect for your morning coffee or tea."
    },
    {
      id:2,
      image: Mug2,
      title: "Price : 700DA",
      Name: "Travel Mug Insulated",
      Price: "700",
      Description: "An insulated travel mug with a secure lid, ideal for carrying your beverages on the go."
    },
    {
      id:3,
      image: Mug3,
      title: "Price : 650DA",
      Name: "Personalized Mug",
      Price: "650",
      Description: "A customizable mug, perfect for adding your favorite photo or design for a personal touch."
    },
  ];

  const handleAddToCart = (title) => {
    // here we Handle the "Add to Cart" action
    console.log(`Added ${title} to cart`);
  };

  return (
    
    <div className="bg-thirdColor w-screen" >
      <br></br> <br></br> <br></br> <br></br>
       <h1 className="font-bold  text-seconadryColor font-Reem text-[3rem] md:text-[4rem] ">
      <span className=" bg-primaryColor md:pl-32">
        Mugs
      </span>
      </h1>
      <div className="mt-20 flex justify-center items-center flex-wrap md:mt-4">
        {workInfoData.map((data) => (
          <div className="w-72 min-h-96 bg-thirdColor p-4 flex flex-col justify-center items-center text-center rounded-xl m-20" key={data.title}>
          <div className="cursor-pointer" onClick={() => handleButtonClick({ name: data.Name, price:data.Price,description: data.Description, image:data.image  })}>
          <div className="w-72 min-h-96 " >
              <img src={data.image} alt="" />
            </div>
            <div className="flex flex-row mt-6 gap-5 text-3xl ml-5 text-primaryColor cursor-default">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
            <h2 className="text-seconadryColor text-2xl font-semibold">{data.Name}</h2>
            <h2 className="text-primaryColor text-2xl font-semibold">{data.title}</h2>
          </div>
            <button className="px-4 py-2 bg-primaryColor mt-10 focus:outline-none rounded-full text-lg font-semibold text-seconadryColor transition duration-200 flex items-center justify-center h-16 w-64 hover:bg-[#E9FF5C]" onClick={() => handleAddToCart(data.title)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mugs;
