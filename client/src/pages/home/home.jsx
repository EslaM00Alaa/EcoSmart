import React from 'react';
import waterprof from "../../images/waterprrofw.png"
import mbp from "../../images/MB.png"

import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

const Homeinfo = ({ setActive }) => {
  
  return (
    <div 
      className='w-11/12 lg:w-9/12 mx-auto flex flex-col-reverse lg:flex-row justify-between items-center py-10'
      onMouseEnter={() => setActive('Hem')} // This triggers setActive when hovering over the component
    >
      <div className='lg:w-6/12 text-start'>
        <motion.h1
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          className='text-4xl lg:text-6xl font-bold'>
          Eco Zmart
        </motion.h1>
        <motion.p 
         variants={fadeIn("right", 0.5)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: true }}
         style={{ lineHeight: '1.625' }} 
         className='my-6 lg:my-12 text-gray-600 text-lg lg:text-3xl lg:w-10/12'>
         REVOLUTIONERANDE SVENSK INNOVATION INOM BYGGTEKNIK SOM GARANTERAR FUKTSKYDD, HÄLSOSAM BOENDEMILJÖ OCH ÖKAD HÅLLBARHET.
         </motion.p>

        <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-start'>
          <motion.a
            href='#3'
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className='cursor-pointer px-6 mb-4 lg:mb-0 py-3 bgLightblue mr-6 text-white text-2xl rounded-xl'>
            Lär känna vår produkt
          </motion.a>
          <motion.a
            href='#2'
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className='cursor-pointer px-6 py-3 bgblue text-white text-2xl rounded-xl'>
            Lär känna våra tjänster
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className='lg:w-5/12 flex flex-row w-full my-8 lg:mt-0 '>
       <img src={waterprof} className='w-6/12' alt="" />
       <img src={mbp} className='w-6/12' alt="" />
      </motion.div>
    </div>
  );
};

export default Homeinfo;
