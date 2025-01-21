import React from 'react'
import { FaFacebook, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-gray-150 text-gray-900 py-8'>

        <div className='text-center mb-6'>
            <h4 className='text-xl font-semibold mb-4 text-gray'>Stay Connected</h4>

            <div className='flex justify-center space-x-6'>
                <a href="https://facebook.com" target='_blank' className='hover:text-blue-500 transition-transform transform hover:-translate-y-1'>
                <FaFacebook size={30} />
                </a>

                <a href="https://instagram.com" target='_blank' className='hover:text-red-500 transition-transform transform hover:-translate-y-1'>
                <FaInstagram size={30} />
                </a>

                <a href="https://twitter.com" target='_blank' className='hover:text-blue-500 transition-transform transform hover:-translate-y-1'>
                <FaSquareXTwitter size={30} />
                </a>
            </div>
        </div>

        {/* Links Section */}
        <div className='flex flex-wrap justify-center space-x-8 mb-6'>
            <a href="#" className='text-gray-500 hover:text-blue-500 transition-colors'>About Us</a>
            <a href="#" className='text-gray-500 hover:text-blue-500 transition-colors'>Contact Us</a>
            <a href="#" className='text-gray-500 hover:text-blue-500 transition-colors'>Privacy Policy</a>
            <a href="#" className='text-gray-500 hover:text-blue-500 transition-colors'>Terms of Service</a>
        </div>
    </footer>
  )
}

export default Footer
