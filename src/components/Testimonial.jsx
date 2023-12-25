import React from "react";
import ProfilePic from "../assets/Mouhammed-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="bg-thirdColor w-screen flex flex-col justify-center items-center mb-28" id="testimonials">
      <div>
        <br></br>   <br></br>  <br></br>   <br></br>  <br></br>
      <h1 className="flex justify-center items-center">
      
      <span className="text-4xl sm:text-5xl sm:h-26 xl:text-7xl xl:h-28 font-Reem text-seconadryColor font-bold bg-primaryColor pt-4 px-4 h-20 mb-12">
         What they are saying 
      </span>
      </h1>
        <p className=" text-md tracking-wider text-center max-w-7xl md:text-xl lg:text-2xl xl:text-3xl font-Reem text-seconadryColor font-medium  max-w-500 mx-auto  md:mt-8 lg:mt-10 xl:mt-0">
        Explore the happiness of many happy customers who love Brainy Store's special and stylish items. 
        Join others who enjoy quality, creativity, and the happiness that each purchase brings. 
        At Brainy Store, we're not just selling things, we're creating experiences that stick with you !
        </p>
      </div>
      <div className="mt-8 bg-white py-6 px-8 flex items-center justify-center max-w-[750px] rounded-[3rem] flex-col text-center">
        <img src={ProfilePic} alt="" />
        <p className="font-Reem text-seconadryColor font-medium mt-5">
        Big thanks to Brainy Store for making shopping a delight! 
        I appreciate the quality, creativity, and the special touch that comes with every purchase. Can't wait to shop again!
        </p>
        <div className="flex flex-row mt-5 gap-5 text-3xl text-orange-600">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2 className="font-Reem text-seconadryColor font-medium text-xl sm:text-2xl xl:text-3xl mb-5" >Mouhammed</h2>
      </div>
    </div>
  );
};

export default Testimonial;