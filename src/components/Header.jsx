import React, { useState } from 'react';
import { FaHome, FaStar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BiPlus, BiCameraMovie } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { UserContext } from './context/UserContext';

function Header() {

  const [signOutBtn, setSignOutBtn] = useState(false);
  const { signInWithGoogle, displayName, photoURL, setDisplayName, setPhotoURL } = UserContext();

  const signOut = () => {
    setDisplayName(null);
    setPhotoURL(null);
    setSignOutBtn(false);
  };

  return (
    <nav className='w-full h-[10vh] z-50 bg-[#141b29] sticky top-0 left-0 px-2 md:px-4 lg:px-6 flex items-center justify-between shadow-2xl text-gray-400 font-montserrat'>

      <div className='md:w-1/4'>
        <img className='w-20' src="/images/logo.svg" alt="disney-plus-logo" />
      </div>

      {
        (displayName && photoURL)
        &&
        <div className='w-2/4 hidden md:block'>
          <ul className='flex justify-evenly'>
            <li className='cursor-pointer flex items-center gap-2 hover:text-white'>
              <FaHome className="text-lg" />
              <span className='link text-sm font-semibold'>Home</span>
            </li>
            <li className='hidden cursor-pointer lg:flex items-center gap-2 hover:text-white'>
              <IoSearch className="text-lg" />
              <span className='link text-sm font-semibold'>Search</span>
            </li>
            <li className='cursor-pointer flex items-center gap-2 hover:text-white'>
              <BiPlus className="text-lg" />
              <span className='link text-sm font-semibold'>Watchlist</span>
            </li>
            <li className='cursor-pointer flex items-center gap-2 hover:text-white'>
              <FaStar className="text-lg" />
              <span className='link text-sm font-semibold'>Originals</span>
            </li>
            <li className='hidden cursor-pointer lg:flex items-center gap-2 hover:text-white'>
              <BiCameraMovie className="text-lg" />
              <span className='link text-sm font-semibold'>Movies</span>
            </li>
            <li className='cursor-pointer flex items-center gap-2 hover:text-white'>
              <AiFillPlayCircle className="text-lg" />
              <span className='link text-sm font-semibold'>Series</span>
            </li>
          </ul>
        </div>
      }

      {
        displayName && photoURL ? 
        <div className='md:w-1/4 flex justify-end items-center gap-4'>
          <strong className='text-sm font-semibold text-white'>{ displayName }</strong>
          <div className='w-12 h-12 relative cursor-pointer'>
            <img 
              src={ photoURL } alt="profile-image"
              className='w-full h-full rounded-full object-contain'
              onClick={() => signOutBtn ? setSignOutBtn(false) : setSignOutBtn(true)}
            />
            <button onClick={ signOut } className={`signout ${signOutBtn &&displayName ? 'block':'hidden'} w-24 py-1 bg-white rounded absolute -bottom-10 right-0`}>
              <span className='text-xs font-bold text-gray-800'>Sign Out</span>
            </button>
          </div>
        </div>
        :
        <div className='md:w-1/4 flex justify-end items-center'>
          <button onClick={ signInWithGoogle } className='px-6 py-2 text-sm font-semibold border border-white text-white hover:text-gray-900 hover:bg-white'>Log In</button>
        </div>
      }
    </nav>
  );
};

export default Header;