 import React, { useState } from 'react';
import Nav from '../../components/nav/navbar';
import Homeinfo from './home';
import Line from '../../components/lineimage/line';
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';
import AboutUs from './aboutus';
import Products from './products';
import Services from './services';
import Contact from './contact';
import Footer from '../../components/footer/footer';
import Work from '../../components/work/work';
 const Home = () => {

  const [active, setActive] = useState('Hem');

   return (
     <div>
       <Nav active={active} setActive={setActive} />
       <Homeinfo setActive={setActive} />
     
       <Work/>

  <div id='3'>
    <Products/>
  </div>


  <div id='1'>
  <AboutUs/>
  </div>

  
<div id='2'>
  <Services/>
</div>
<motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
       >
       <Line/>
       </motion.div> 

<div id='4'>
  <Contact/>
</div>


<Footer/>

     </div>
   );
 };
 
 export default Home;