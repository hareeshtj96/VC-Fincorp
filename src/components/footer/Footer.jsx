import React from "react";
import { FaFacebook, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-150 text-gray-900 py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-6">
          <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray">
            Stay Connected
          </h4>

          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:-translate-y-1"
            >
              <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-transform transform hover:-translate-y-1"
            >
              <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:-translate-y-1"
            >
              <FaSquareXTwitter className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:flex-wrap sm:justify-center gap-4 sm:gap-6 md:gap-8">
          <a
            href="#"
            className="text-gray-500 hover:text-blue-500 transition-colors text-sm sm:text-base w-full sm:w-auto"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-500 transition-colors text-sm sm:text-base w-full sm:w-auto"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-500 transition-colors text-sm sm:text-base w-full sm:w-auto"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-500 transition-colors text-sm sm:text-base w-full sm:w-auto"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
