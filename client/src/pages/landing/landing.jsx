import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"

import { fadeIn } from '../../variants';

import Logo from '../../components/logo/logo';
const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 1500); // Adjust this time to match the total animation duration

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigate]);

  return (
    <div className="w-full Landing h-100 flex justify-center items-center">
     <motion.div
     variants={fadeIn("left",.4)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:true}}
     >
     <Logo/>
     </motion.div>
   
    </div>
  );
};

export default Landing;
