import React, { useState } from 'react';
import BrainyImage from "../assets/Brainy.png";
import { FiArrowRight } from "react-icons/fi";


function Home() {
 

  return (
    <div className=" mx-auto  max-h-screen flex flex-wrap items-center bg-thirdColor w-screen">
    {/* left side */}
    <div className="flex-fluid  xl:-mt-32">
        <h1 className="font-bold xl:ml-32 text-seconadryColor font-Reem text-[3rem] md:text-[4rem] ">Welcome to </h1>
        <h1 className="font-bold xl:ml-32 text-seconadryColor font-Reem text-[3rem] md:text-[4rem]"><span className='bg-[#CEE250]'>Brainy ’s</span> <span>store !</span></h1> 
        <div className="my-8 mb-8">
        <p className="text-seconadryColor xl:ml-32 font-Reem font-medium text-3xl">Discover my chic swag collection! Elevate your style, embrace your brilliance Unleash your unique with every purchase </p>
        <button className="px-4 py-2 bg-primaryColor mt-16 font-Reem xl:ml-32 focus:outline-none rounded-full text-xl font-bold text-seconadryColor transition duration-200 flex items-center justify-center h-16 w-64 hover:bg-[#E9FF5C]">
            Join Us Now 
        </button>
        </div>
    </div>
        {/* right side */}
        <div className="flex-fluid xl:-mt-10">
        <div className="mx-auto">
        <img src={BrainyImage} alt="background" className="w-[100%] xl:scale-75 object-cover" />
        </div>        
        </div>
        
    </div>
    
  );
}

export default Home;
