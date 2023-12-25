import React from "react";
import Logo from "../assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-[70px] flex  flex-col justify-between bg-seconadryColor">
      <div className="flex-initial">
        <div className="max-w-[110px]">
          <img src={Logo} alt="" />
        </div>
        <div className="mt-20 text-2xl py-5 flex flex-row text-primaryColor  gap-5">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="flex justify-end flex-initial md:-mt-32">
        <div className="flex flex-col">
          <span className="my-1 mx-0 font-semibold text-primaryColor cursor-pointer font-Reem" >Quality</span>
          <span className="my-1 mx-0 font-semibold text-primaryColor cursor-pointer font-Reem">Help</span>
          <span className="my-1 mx-0 font-semibold text-primaryColor cursor-pointer font-Reem">Share</span>
          <span className="my-1 mx-0 font-semibold text-primaryColor cursor-pointer font-Reem">Carrers</span>
          <span className="my-1 mx-0 font-semibold text-primaryColor cursor-pointer font-Reem">Testimonials</span>
          <span className="my-1 mx-0 font-semibold text-primaryColor cursor-pointer font-Reem">Work</span>
        </div>
        <div className="flex flex-col">
          <span className="my-1 mx-0 font-semibold text-primaryColor cursor-pointer font-Reem">Delivery</span>
          <span className="my-1 mx-0 font-semibold text-primaryColor cursor-pointer font-Reem"> Contact & Support</span>
          <span className="my-1 mx-0 font-semibold text-primaryColor cursor-pointer font-Reem">For investors</span>
          <span className="my-1 mx-0 font-semibold text-primaryColor cursor-pointer font-Reem">For media</span>
        </div>
        <div  className="flex flex-col">
          <span className="my-1 mx-0 font-semibold text-primaryColor cursor-pointer font-Reem">Terms & Conditions</span>
          <span className="my-1 mx-0 font-semibold text-primaryColor cursor-pointer font-Reem">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;