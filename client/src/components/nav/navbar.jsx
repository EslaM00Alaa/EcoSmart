import React, { useState } from 'react';
import Logo from '../logo/logo';
import { FiAlignJustify } from "react-icons/fi"; // Import the menu icon
import { FiX } from "react-icons/fi"; // Import close icon
import "./nav.css";
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

const Nav = ({ active, setActive }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu visibility

  // Function to handle setting the active link
  const handleSetActive = (menuItem) => {
    setActive(menuItem);
    setIsMobileMenuOpen(false); // Close menu when an item is clicked
  };

  return (
    <div className='bgblue py-5 px-4 w-full'>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className='w-11/12 lg:w-9/12 mx-auto flex justify-between items-center'
      >
        {/* Logo Section */}
        <span>
          <Logo />
        </span>

        {/* Desktop Navigation menu items */}
        <div className='hidden lg:flex menu-items w-7/12 text-2xl font-bold text-white justify-between items-center'>
          {['Hem', 'Om oss', 'Tjänster', 'Våra produkter', 'Kontakta oss'].map((menuItem, index) => (
            <a
              href={`#${index}`}
              key={menuItem}
              className={`cursor-pointer ${active === menuItem ? 'text-active border-active' : 'text-white hover:text-hover hover:border-hover'}`}
              onClick={() => handleSetActive(menuItem)}
            >
              {menuItem}
            </a>
          ))}
        </div>

        {/* FiAlignJustify icon for mobile view */}
        <div className="lg:hidden icon-menu text-white text-4xl cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FiAlignJustify />
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className='mobile-menu absolute top-0 right-0 w-10/12 h-screen bgblue text-white flex flex-col items-start p-6 z-50'
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
        >
          {/* Close Button */}
          <div className='w-full flex justify-end mb-4'>
            <FiX className="text-4xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
          </div>

          {['Hem', 'Om oss', 'Tjänster', 'Våra produkter', 'Kontakta oss'].map((menuItem, index) => (
            <a
              href={`#${index}`}
              key={menuItem}
              className='text-3xl mb-6 cursor-pointer'
              onClick={() => handleSetActive(menuItem)}
            >
              {menuItem}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Nav;
