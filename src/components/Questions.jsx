import React from "react";

const Questions = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-thirdColor w-screen mb-16" id="contact">
    <div className=" max-w-[700px]">
      <h1 className="text-4xl sm:text-5xl sm:h-26 xl:text-7xl xl:h-28 font-Reem text-seconadryColor font-bold pt-4  h-20">Have Question In Mind?</h1>
      <h1 className="font-Reem text-seconadryColor font-bold text-xl sm:text-2xl xl:text-3xl">Let Us Help You</h1>
      <div className="   mt-12 flex items-center rounded-5xl bg-white h-36 sm:w-[700px] w-[250px] flex-1 rounded-[60px] border-none outline-none text-lg md:text-base p-2">
        <input className="bg-white h-24 xl:w-[700px] w-[250px] flex-1 rounded-[60px] border-none outline-none text-base text-left pl-10  p-2" type="text" placeholder="yourmail@gmail.com" />
      <button className=" bg-primaryColor  font-Reem xl:ml-32 focus:outline-none rounded-full text-lg font-semibold text-blue-900 transition duration-200 flex items-center justify-center h-16 w-64 hover:bg-[#E9FF5C]">Submit</button>
      </div>
    </div>
    </div>
  );
};

export default Questions;