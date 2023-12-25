import React from "react";
import Planner1 from "../assets/planner1.png";
import Planner2 from "../assets/planner2.png";
import Planner3 from "../assets/planner3.png";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from "react";

const Planners = () => {
  const [PanierVide, setPanierVide] = useState(true);
  const [selectedProduct , setselectedProduct]  = useState([]);
  const Navigate = useNavigate();
  const retrieveTableData = () => {
    const storedData = localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts') ) :[];
    if (storedData.length) {

      setselectedProduct (storedData);
    
        setPanierVide (false);
     
      
    }else{
      setPanierVide (true);
    }
  };

  useEffect(()=>{
    retrieveTableData();
  },  []);

  const handleSubmitProduct =(Nam , Prix  ,img) =>{
    retrieveTableData();
   
      selectedProduct.push({name : Nam ,price: Prix ,image: img ,count: 1 });
  
   
    localStorage.setItem('cartProducts',JSON.stringify(selectedProduct));
  
  Navigate("/cart");
  
  };
  const navigateTo  = useNavigate();

  const handleButtonClick = (itemParams) => {
    navigateTo (`/details/${encodeURIComponent(itemParams.name)}/${encodeURIComponent(itemParams.price)}/${encodeURIComponent(itemParams.description)}/${encodeURIComponent(itemParams.image)}`, { state: { itemParams } });
  };
 
  const workInfoData = [
    {
      id:1,
      image: Planner1,
      title: "Price : 400DA",
      Name: "Weekly Planner Notebook",
      Price: "400",
      Description: "A daily planner notebook to organize your tasks, appointments, and goals for efficient planning."
    },

    {
      id:2,
      image: Planner2,
      title: "Price : 400DA",
      Name: "Weekly Planner Pad",
      Price: "400",
      Description: "A weekly planner pad with ample space for scheduling tasks and events for the week ahead."
    },
    {
      id:3,
      image: Planner3,
      title: "Price : 400DA",
      Name: "Weekly Planner Binder",
      Price: "400",
      Description: "A monthly planner binder with dividers and sections for comprehensive monthly planning."
    },
  ];

  const handleAddToCart = (title) => {
    // Handle the "Add to Cart" action, e.g., update a shopping cart state
    console.log(`Added ${title} to cart`);
  };

  return (
    
    <div className="bg-thirdColor w-screen">
      <br></br> <br></br> <br></br> <br></br>
       <h1 className="font-bold  text-seconadryColor font-Reem text-[3rem] md:text-[4rem]">
      <span className=" bg-primaryColor md:pl-32">
        Planners
      </span>
      </h1>
      <div className="mt-20 flex justify-center items-center flex-wrap md:mt-4">
        {workInfoData.map((data) => (
          <div className=" w-82 min-h-96 bg-thirdColor p-4 flex flex-col justify-center items-center text-center rounded-xl m-20" key={data.title}>
           <div className="cursor-pointer" onClick={() => handleButtonClick({ name: data.Name, price:data.Price,description: data.Description, image:data.image  })}>
           <div  className="w-72 min-h-96 ">
              <img src={data.image} alt="" />
            </div>
            <div className="flex flex-row mt-5 gap-5 text-3xl ml-5 text-primaryColor cursor-default">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
           <h2 className="text-seconadryColor text-2xl font-semibold">{data.Name}</h2>
            <h2 className="text-seconadryColor text-2xl font-semibold">{data.title}</h2>
           </div>
            <button className="px-4 py-2 bg-primaryColor mt-10 focus:outline-none rounded-full text-lg font-semibold text-seconadryColor transition duration-200 flex items-center justify-center h-16 w-64 hover:bg-[#E9FF5C]" onClick={() => handleSubmitProduct(data.Name,data.Price,data.image)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planners;
