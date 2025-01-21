import React from 'react';
import { FaRegUser } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-6 h-24">
    
        <div className="flex items-center flex-shrink-0 w-48 space-x-2">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="/images/VC.png"
              alt="Logo"
              className="h-16 w-16 object-contain"
            />
            <span className="text-xl font-semibold text-gray-800">VC FINCORP</span>
          </a>
        </div>

        <nav className="flex-1 flex justify-center">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><span className='text-lg'>About Us</span></a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><span className='text-lg'>Loans</span></a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition"><span className='text-lg'>Contact Us</span></a>
          </div>
        </nav>

    
        <div className="flex items-center space-x-8">
          <a href="#" className="bg-yellow-400 text-black py-1.5 px-4 rounded hover:bg-yellow-500 transition"><span className='text-sm font-normal'>Pay EMI</span></a>
          <a href="#login" className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition flex items-center space-x-1">
            <FaRegUser />
            <span className='text-sm font-normal'>Register / Login</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
