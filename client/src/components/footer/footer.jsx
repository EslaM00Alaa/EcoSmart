import { CCircleFill} from 'react-bootstrap-icons';
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';
const Footer = () => {
  return (
    <div className='w-full h-fit footer flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-16 py-4 '>
      <motion.h3
       variants={fadeIn("up", 0.4)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: true }}
      className='flex items-center text-base md:text-xl mb-4 md:mb-0 white'>
        <CCircleFill className='mr-2 md:mr-3'/>
        alla upphovsrätter reserverade @2024
      </motion.h3>

    </div>
  );
};

export default Footer;
