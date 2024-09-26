import v1 from '../../videos/v1.mp4';
import v2 from '../../videos/v2.mp4';
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className='w-full bg-white p-10'>
        <motion.h2
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: true }}
        className='text-2xl font-bold mb-8'>VÅRT ARBETE</motion.h2>
      <motion.div
       variants={fadeIn("left", 0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: true }}
       className='w-11/12 my-10 lg:w-10/12 mx-auto flex flex-col lg:flex-row justify-between items-center'>
        <motion.div 
           variants={fadeIn("right", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: true }}
        className='w-full lg:w-5/12 mb-6'>
          <video className='rounded-xl' src={v1} autoPlay loop muted></video>
        </motion.div>
        <div className='w-full lg:w-5/12'>
          <video className='rounded-xl' src={v2} autoPlay loop muted></video>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
