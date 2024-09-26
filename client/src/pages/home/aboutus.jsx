import React from 'react';
import image from './Screenshot 2024-09-23 011311.png'
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';
const AboutUs = () => {
  return (
    <div className='bg-white mt-32 mb-16 py-16'>
      <div className='w-11/12 lg:w-9/12 mx-auto flex flex-col lg:flex-row justify-center items-center'>
        <motion.div
         variants={fadeIn("right", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: true }}
        >
        <img className='rounded-xl w-10/12 mx-auto lg:w-8/12' src={image} alt="" />
        </motion.div> 
        <div className=' w-11/12 mx-auto my-5  lg:w-7/12'>
            <motion.h2 
             variants={fadeIn("up", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: true }}
              className='text-start text-3xl font-bold'>
              upptäck-ecozmart
            </motion.h2>
            <motion.p
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className='text-xl text-gray-500 text-start my-6 '>
            Sverige är först med en ny bevisad teknologi och innovation som genom en och samma produkt och behandling på bara några dagar garanterar vattentäta byggnader med skydd mot vattentryck upp till 10 bar.
            </motion.p>
            <motion.p 
               variants={fadeIn("up", 0.8)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: true }}
            className='text-xl text-gray-500 text-start my-6 '>
         

Denna innovation säkerställer en hälsosam boendemiljö fri från alla cancerframkallande gaser inklusive radon och erbjuder upp till fyra gånger hållbarhet samt förstärkt byggnadssäkerhet i samma klass som avancerade konstruktioner som broar och undervattensstrukturer. 
            </motion.p>
            <motion.p 
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className='text-xl text-gray-500 text-start my-6 '>
            Totalt erbjuder vi 10 fördelar i ett paket. Teknologin är vetenskapligt bevisad av svensk forskning och erkända institutioner världen över.
            </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;