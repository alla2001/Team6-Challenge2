import React, { useEffect, useState } from 'react';
import barinylogo from "../assets/BrainyLogo.svg";
import cartsvg from "../assets/Cart.svg";
import Menuicon from "../assets/menu.svg";
import Closeicon from "../assets/Delete.svg";
import { Link , useLocation, useNavigate} from 'react-router-dom';



function Navbar({prop}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 const Navigate = useNavigate();
 const location = useLocation();
  const MenuHanleclick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 const handleClickLogo = () =>{
  Navigate("/");
 };
 const handleClickCart= () =>{
  Navigate("/cart");
 };
 
 const scrollToComponent = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

useEffect(()=>{
  if(prop){
    scrollToComponent('testimonials');
   
  }
});
  return (
    <header className='bg-thirdColor px-3 w-screen'>
      <navbar className="container mx-auto flex justify-between items-center h-[120px]">
        {/* logo */}
       
        <button className='w-[150px] min-w-[90px]  mt-6 ml-20' onClick={handleClickLogo} >
          <h1 className='text-seconadryColor tracking-[0.2em] text-5xl font-extrabold font-Reem'>BRAINY</h1>
        </button>
       

        {/* Desktop Menu */}
        <div className='hidden lg:flex gap-8 lg:gap-20 items-center mt-7 mr-20 '>
          <ul className="flex gap-12">
            <li className='font-Reem font-semibold text-xl lg:text-2xl mr-10 ml-5 sm:mr-0 text-seconadryColor group relative cursor-pointer'>
              <span>About</span>
              <span className='absolute bottom-0 left-0 w-full h-1 bg-primaryColor transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
            </li>
            <li className='font-Reem font-semibold text-xl lg:text-2xl mr-10 ml-5 sm:mr-0 text-seconadryColor group relative cursor-pointer' 
              onClick={() => {
                if(location.pathname != "" ){
                  Navigate("/" , {state:true});
                  scrollToComponent('testimonials');
                }
              }}>
              <span>Testimonials</span>
              <span className='absolute bottom-0 left-0 w-full h-1 bg-primaryColor transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
            </li>
            <li className='font-Reem font-semibold text-xl lg:text-2xl mr-10 ml-5 sm:mr-0 text-seconadryColor group relative cursor-pointer' 
             onClick={() => {
                if(location.pathname != "" ){
                  Navigate("/");
                  scrollToComponent('contact');
                }
              }}>
              <span>Contact</span>
              <span className='absolute bottom-0 left-0 w-full h-1 bg-primaryColor transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
            </li>
          </ul>

          {/* Cart Button */}
         
            <button  className='cartBtn ml-16 mr-2 w-[4rem] h-[4rem] sm:h-[5rem] sm:w-[5rem]'  onClick={handleClickCart}>
              <img src={cartsvg} className='w-[70%] pl-5' alt='cartsvg' />
            </button>
         
        </div>

        {/* Mobile Toggle Button */}
        <button aria-label="toggle button" aria-expanded="false"  id="menu-btn" className="cursor-pointer w-12 h-12 lg:hidden mt-[17px] mr-16 fill-seconadryColor" onClick={MenuHanleclick}>
        <img src={isMenuOpen ? Closeicon : Menuicon} alt="" />
        </button>

        

      </navbar>
       {/* Mobile Menu */}
       <div className={` ${isMenuOpen?'block':'hidden'}   lg:hidden `}>
          <ul className="w-full  top-full left-0   text-gray-800 border-b border-gray-200 flex flex-col items-center gap-12 mt-1 bg-thirdColor">
            <li className=' font-semibold text-xl lg:text-2xl mr-10 ml-5 sm:mr-0 text-seconadryColor group relative cursor-pointer'>
              <span>About</span>
              <span className='absolute bottom-0 left-0 w-full h-1 bg-primaryColor transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
            </li>
            <li className=' font-semibold text-xl lg:text-2xl mr-10 ml-5 sm:mr-0 text-seconadryColor group relative cursor-pointer' onClick={() => scrollToComponent('testimonials')}>
              <span>Testimonials</span>
              <span className='absolute bottom-0 left-0 w-full h-1 bg-primaryColor transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
            </li>
            <li className=' font-semibold text-xl lg:text-2xl mr-10 ml-5 sm:mr-0 text-seconadryColor group relative cursor-pointer' onClick={() => scrollToComponent('contact')}>
              <span>Contact</span>
              <span className='absolute bottom-0 left-0 w-full h-1 bg-primaryColor transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
            </li>
            <li className=' font-semibold text-xl lg:text-2xl mr-10 ml-5 sm:mr-0 text-seconadryColor group relative cursor-pointer' onClick={handleClickCart}>
              <span>Panier</span>
              <span className='absolute bottom-0 left-0 w-full h-1 bg-primaryColor transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
            </li>

          </ul>
        </div>
     
    </header>
    
  );
}

export default Navbar;
