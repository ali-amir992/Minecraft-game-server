import React, { useState, useEffect } from 'react';
import logo from "../assets/logotext.png";
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import "../index.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) { // Assuming 768px as a breakpoint for "small screens"
        setDimensions({ width: 200, height: 200 });
      } else {
        setDimensions({ width: 300, height: 300 });
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-theme1 border-theme2 border-b shadow-lg">

      <div className="max-w-7xl  mx-auto px-4">

        <div className="flex py-2  justify-between items-center">


          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img src={logo} height={dimensions.height} width={dimensions.width} alt="" />
              </Link>
            </div>


          </div>
          <div className="hidden md:block lg:pl-14 ">
            <div className="ml-10 flex items-baseline space-x-6 ">
              <a href="#" className="text-white  hover:text-theme2 px-3 py-2 rounded-md text-lg font-medium font-primary">VPS</a>
              <Link to="/about" className="text-white hover:text-theme2 px-3 py-2 rounded-md text-lg font-medium font-primary text-nowrap">
                About Us
              </Link>
              <Link to='/gameserver' className="text-white hover:text-theme2 px-3 py-2 rounded-md text-lg font-medium font-primary">Server</Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center md:ml-6">
              <Link to={"/admin/dashboard"} className="bg-theme2 text-white font-medium font-primary w-full px-4 py-2 border-2 border-theme2 text-nowrap transition ease-in duration-200 rounded-md
            hover:bg-transparent hover:border-2 hover:border-theme2 hover:text-theme2">Get Started</Link>
              {/* <div className='ml-4 '>
              <MdDarkMode className='text-4xl' />
              </div> */}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg className={`h-6 w-6 ${isOpen ? 'rotate-90' : 'rotate-0'} transition-transform duration-300 ease-in-out`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

      </div>

      <div className={`${isOpen ? 'max-h-full' : 'max-h-0'} md:hidden overflow-hidden transition-max-h duration-300 ease-in-out absolute w-full bg-theme1`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-max-h duration-300 ease-in-out">
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block font-primary px-3 py-2 rounded-md text-base font-medium">VPS</a>
          <Link to="/about" className="text-white hover:text-theme2 px-3 py-2 rounded-md text-lg font-medium font-primary">
            About Us
          </Link>
          <Link to='/gameserver' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 font-primary rounded-md text-base font-medium">Server</Link>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 font-primary rounded-md text-base font-medium">Login</a>
        </div>
      </div>

    </nav>

  );
};

export default Navbar;
