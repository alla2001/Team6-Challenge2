import React from 'react'
import barinylogo from "../assets/BrainyLogo.svg"
import cartsvg from "../assets/Cart.svg"
import { Link } from 'react-router-dom'
function DetailsNavbar() {
  return (
    <header className='bg-thirdColor px-3'>
    <navbar className="container mx-auto flex justify-between items-center">
      {/* logo */}
      <button className='w-[128px] min-w-[90px]  mt-6 ml-5'>
         <img src={barinylogo} className='w-full h-full' alt='barinylogo' />
      </button>

      <div className='flex gap-8 lg:gap-20 items-center mt-7'>
      <Link className='font-semibold text-xl lg:text-2xl mr-10 ml-5 sm:mr-0 text-seconadryColor'>About</Link>
          {/* About */}
      <Link className='font-semibold text-xl lg:text-2xl mr-2 ml-[-20px] sm:ml-0 sm:mr-20 text-seconadryColor'>Contact</Link>
          {/* Contact */}
      <Link>
          <button className='cartBtn w-[4rem] h-[4rem] sm:h-[5rem] sm:w-[5rem]'>
          <img src={cartsvg} className='w-[70%] pl-5' alt='cartsvg' />
          </button>
      </Link>
      </div>

      
      </navbar>
    </header>
  )
}

export default DetailsNavbar
