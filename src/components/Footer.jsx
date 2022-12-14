import React from 'react';
import { FaFacebookF, FaInstagram, FaGooglePlay, FaApple } from "react-icons/fa";

function Footer() {
  return (
    <footer className='w-full min-h-[20vh] bg-[#141b29] font-montserrat text-gray-400 p-2 md:p-4 lg:px-6 grid grid-cols-1 md:grid-cols-4 gap-4 justify-center items-center'>

        <div className='md:col-span-2'>
          <strong className='block md:hidden text-sm font-semibold mb-4'>About Us</strong>
          <ul className='hidden md:flex justify-between mb-4'>
            <li className='text-sm cursor-pointer font-semibold hover:text-blue-500'>About Disney+</li>
            <li className='text-sm cursor-pointer font-semibold hover:text-blue-500'>Terms Of Use</li>
            <li className='hidden lg:block text-sm cursor-pointer font-semibold hover:text-blue-500'>Privacy Policy</li>
            <li className='hidden lg:block text-sm cursor-pointer font-semibold hover:text-blue-500'>FAQ</li>
            <li className='text-sm cursor-pointer font-semibold hover:text-blue-500'>Feedback</li>
            <li className='text-sm cursor-pointer font-semibold hover:text-blue-500'>Contact</li>
          </ul>
          <p className='text-xs font-medium'>
            ©2022 Disney+ Clone. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam possimus commodi impedit, esse neque quos cupiditate. Atque, nam rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, incidunt.
          </p>
        </div>

        <div className='md:col-span-1 md:flex flex-col items-center'>
          <strong className='block text-sm font-semibold mb-4'>Connect With Us</strong>
          <div className='flex gap-2'>
            <button className="w-12 h-12 rounded-md bg-gray-800 grid place-items-center hover:bg-blue-500">
              <FaFacebookF className="text-xl text-white" />
            </button>
            <button className="w-12 h-12 rounded-md bg-gray-800 grid place-items-center hover:bg-blue-500">
              <FaInstagram className="text-xl text-white" />
            </button>
          </div>
        </div>

        <div className='md:col-span-1'>
          <strong className='block text-sm font-semibold mb-4'>Disney+ App</strong>
          <div className='flex gap-2'>
            <button className="h-12 px-4 flex items-center justify-center gap-2 rounded-md bg-gray-800 hover:bg-blue-500">
              <FaGooglePlay className="text-xl text-white" />
              <span className="text-sm font-semibold text-white">Google Play</span>
            </button>
            <button className="h-12 px-4 flex items-center justify-center gap-2 rounded-md bg-gray-800 hover:bg-blue-500">
              <FaApple className="text-xl text-white" />
              <span className="text-sm font-semibold text-white">App Store</span>
            </button>
          </div>
        </div>
        
    </footer>
  );
};

export default Footer;