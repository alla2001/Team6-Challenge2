import React from "react";
import Shirt1 from "../assets/shirt1.png";
import Shirt2 from "../assets/shirt2.png";
import Shirt3 from "../assets/shirt3.png";
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";


const Shirts = () => {
  const navigateTo  = useNavigate();

  const handleButtonClick = (itemParams) => {
    navigateTo (`/details/${encodeURIComponent(itemParams.name)}/${encodeURIComponent(itemParams.price)}/${encodeURIComponent(itemParams.description)}/${encodeURIComponent(itemParams.image)}`, { state: { itemParams } });
  };
  
 
  const workInfoData = [
    {
      id:1,
      image: Shirt1,
      title: "Price : 1900DA",
      Name: "T-shirt Brainy Casual Parakeet Green",
      Price: "1900",
      Description: "Fabriqué à partir de matériaux de qualité, il offre un confort optimal pour une utilisation quotidienne. Son design simple est rehaussé du logo BRAINY imprimé. Avec sa coupe décontractée et sa couleur polyvalente, ce t-shirt est parfait pour une tenue décontractée ou pour une séance d’entraînement. Il incarne le confort et le style sportif, en faisant un choix pratique et tendance pour toutes les occasions.",

    },
    {
      id:2,
      image: Shirt2,
      title: "Price : 1900DA",
      Name: "T-shirt Brainy Casual Basil Green",
      Price: "1900",
      Description: "Fabriqué à partir de matériaux de qualité, il offre un confort optimal pour une utilisation quotidienne. Son design simple est rehaussé du logo BRAINY imprimé. Avec sa coupe décontractée et sa couleur polyvalente, ce t-shirt est parfait pour une tenue décontractée ou pour une séance d’entraînement. Il incarne le confort et le style sportif, en faisant un choix pratique et tendance pour toutes les occasions.",
    },
    {
      id:3,
      image: Shirt3,
      title: "Price : 1900DA",
      Name: "T-shirt Brainy Casual Sage Green",
      Price: "1900",
      Description: "Fabriqué à partir de matériaux de qualité, il offre un confort optimal pour une utilisation quotidienne. Son design simple est rehaussé du logo BRAINY imprimé. Avec sa coupe décontractée et sa couleur polyvalente, ce t-shirt est parfait pour une tenue décontractée ou pour une séance d’entraînement. Il incarne le confort et le style sportif, en faisant un choix pratique et tendance pour toutes les occasions.",
    },
  ];

 
  return (
    
    <div className="bg-thirdColor w-screen">
    
      <br></br> <br></br>
      <h1 className="font-bold  text-seconadryColor font-Reem text-[3rem] md:text-[4rem] mt-96 md:mt-0">
      <span className=" bg-primaryColor md:pl-32">
        T-shirts
      </span>
      </h1>
      <div className="mt-10 flex justify-center items-center flex-wrap md:mt-4">
        {workInfoData.map((data) => (
          <div className="w-72 min-h-96 bg-thirdColor p-4 flex flex-col justify-center items-center text-center rounded-xl m-20 " key={data.title}>
            <div className="cursor-pointer  " onClick={() => handleButtonClick({ name: data.Name, price:data.Price,description: data.Description, image:data.image  })}>
            <div>
              <img src={data.image}  alt="" />
            </div>
            <div className="flex flex-row mt-5 gap-5 text-3xl text-primaryColor cursor-default">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
            <h2 className="text-seconadryColor text-2xl font-semibold">{data.Name}</h2>
            <h2 className="text-primaryColor text-2xl font-semibold">{data.title}</h2>
            </div>
            <button  className="px-4 py-2 bg-primaryColor mt-10 focus:outline-none rounded-full text-lg font-semibold text-seconadryColor transition duration-200 flex items-center justify-center h-16 w-64 hover:bg-[#E9FF5C]"onClick={() => handleButtonClick({ name: data.Name, price:data.Price,description: data.Description, image:data.image  })}>
            Choisissez La Taille
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shirts;
