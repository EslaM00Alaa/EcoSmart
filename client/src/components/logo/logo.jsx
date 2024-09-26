import React from 'react';
import { FaStar } from 'react-icons/fa6';
import logo from '../../images/logo.png'

const Logo = () => {
  return (
    <div 
    className='flex items-center justify-center'>
    <img className='w-12 h-12  mr-2' src={logo} alt="no image"  />
    <h1 className='text-3xl font-bold text-white'>Eco Smart</h1>
   </div>
  );
};

export default Logo;