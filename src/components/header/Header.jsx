import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 h-16 md:h-20">
        <div className="flex items-center flex-shrink-0 space-x-2">
          <a href="#" className="flex items-center space-x-2">
            <img
              src="images/VC.png"
              alt="Logo"
              className="h-12 w-12 md:h-16 md:w-16 object-contain"
            />
            <span className="text-lg md:text-xl font-semibold text-gray-800">
              VC FINCORP
            </span>
          </a>
        </div>

        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center space-x-4 lg:space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <span className="text-sm md:text-base lg:text-lg">Home</span>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <span className="text-sm md:text-base lg:text-lg">Loans</span>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <span className="text-sm md:text-base lg:text-lg">
                Contact Us
              </span>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <span className="text-sm md:text-base lg:text-lg">About Us</span>
            </a>
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-4 md:space-x-8">
          <a
            href="#"
            className="bg-yellow-400 text-black py-1 px-3 md:py-1.5 md:px-4 rounded hover:bg-yellow-500 transition"
          >
            <span className="text-sm md:font-normal">Pay EMI</span>
          </a>
          <a
            href="#login"
            className="bg-yellow-400 text-black py-2 px-3 md:py-2 md:px-4 rounded hover:bg-yellow-500 transition flex items-center space-x-1"
          >
            <FaRegUser />
            <span className="text-sm md:font-normal">Register / Login</span>
          </a>
        </div>

        {/* Hamburger Menu button */}
        <div className="md:hidden px-4 py-2">
          <button
            className="text-gray-600 hover:text-blue-600"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-2 space-y-4">
          <a
            href="#"
            className="block text-gray-600 hover:text-blue-600 transition py-2"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-blue-600 transition py-2"
          >
            Loans
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-blue-600 transition py-2"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-blue-600 transition py-2"
          >
            About Us
          </a>
          <div className="space-y-3 pt-2">
            <a
              href="#"
              className="block w-full bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition text-center"
            >
              <span className="text-sm">Pay EMI</span>
            </a>
            <a
              href="#login"
              className="w-full bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition text-center flex items-center justify-center space-x-2"
            >
              <FaRegUser />
              <span className="text-sm">Register / Login</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
