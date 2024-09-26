import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';
import image from "./images/image1.png"
import image1 from "./images/ecoImage.jpg"
import mo from "./images/moayna.jpg"
import eq from "./images/equipment.jpg"
import ec from "./images/ecozmart.jpg"
import { FaCaretRight } from "react-icons/fa";
const Services = () => {
  return (
    <div className='mt-32 w-11/12 lg:w-9/12 mx-auto mb-16'>
   
    <motion.h2 
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className='text-center text-3xl font-bold mb-4'
    >
      Våra tjänster
    </motion.h2>
    <motion.p
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className='text-xl text-gray-500 text-center my-2 mb-6 lg:w-7/12 mx-auto'
      style={{ width: "90%", maxWidth: "600px" }} // Adjust max-width for larger screens
    >
      Upptäck våra tjänster som är utformade för att möta dina behov. Få tillgång till skräddarsydda lösningar och låt oss hjälpa dig att uppnå dina mål med våra experttjänster!
    </motion.p>
  
      {/* Image and Text Section */}
      <div className='w-11/12 lg:w-9/12 flex flex-col lg:flex-row justify-between items-center text-start mx-auto my-16'>
        
        {/* Image Section */}
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        className='relative w-full lg:w-1/3 mb-8 lg:mb-0'>
          <img className='w-full border-8 border-white shadow-xl' src={image1} alt="Main Image" />
          <img className='absolute top-28 right-0 lg:-right-24 w-40 lg:w-52 border-4 border-white shadow-xl' src={image} alt="Overlay Image" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        className='w-full lg:w-1/2 lg:pl-8'>
          <h2 className='text-2xl lg:text-3xl font-medium leading-relaxed'>
            Vi är ett team av passionerade renoveringsproffs som brinner för att skapa vackra och hållbara hem åt våra kunder. Vi erbjuder en mängd olika renoveringstjänster för att förvandla ditt hem till din drömboende. Vår erfarenhet och engagemang gör oss till det bästa valet för din renoveringsprojekt.
          </h2>
        </motion.div>
      </div>

 
     <div>
     <motion.h2 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className='text-center text-3xl  font-bold'
      >
       Hur vi renoverar ditt hem
      </motion.h2>
      
      







      <div className='my-16 w-full flex flex-col lg:flex-row  justify-between'>
  {/* First Card */}
  <motion.div
    variants={fadeIn("up", 0.4)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className='w-11/12  lg:w-4/12 bg-white p-4 rounded-lg shadow-lg relative mx-4 mb-3'> {/* Add mx-4 here */}
    
    <img className='w-full h-auto rounded-md' src={mo} alt="Project Image" />

    <div className='absolute left-1/2 transform -translate-x-1/2 -mt-6 w-10/12 p-4 box z-50 rounded-md'>
      <h3 className='font-bold text-center text-white'>Projekt förhandsgranskning</h3>
    </div>

    <div className='text-start w-10/12 mt-12 mb-6 mx-auto'>
      <h3 className='font-bold mb-2'>Projekt förhandsgranskning</h3>
      <h3 className='font-bold mb-2'>Inspektion av problemområde</h3>
      <h3 className='font-bold mb-2'>Bedömning av potentiella problem</h3>
      <h3 className='font-bold mb-2'>Slutförslag</h3>
      <h3 className='font-bold mb-2'>Anpassad utvärdering och beräkningar</h3>
      <h3 className='font-bold'>Skräddarsydd lösning och uppskattning</h3>
      <div className='mt-8 text-center text-lg font-medium' style={{ color: "#704d4d" }}>
        <a 
        href="#4"
        className='flex justify-center items-center p-2 rounded-xl w-fit bg-gray-50 mx-auto'>
          <span>Kontakta oss</span>
          <span className='ml-2 mt-1 rounded-full' style={{ color: "#704d4d" }}>
            <FaCaretRight />
          </span>
        </a>
      </div>
    </div>
  </motion.div>




  {/* Second Card */}

  <motion.div variants={fadeIn("up", 0.8)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
   className='w-11/12  lg:w-4/12 bg-white p-4 rounded-lg shadow-lg relative mx-4 mb-3'> {/* Add mx-4 here */}
    
    <img className='w-full h-auto rounded-md' src={eq} alt="Project Image" />

    <div className='absolute left-1/2 transform -translate-x-1/2 -mt-6 w-10/12 p-4 box z-50 rounded-md'>
      <h3 className='font-bold text-center text-white'>Materiallogistik</h3>
    </div>

    <div className='text-start w-10/12 mt-12 mb-6 mx-auto'>
      <h3 className='font-bold mb-2'>Materiallogistik & Projektering</h3>
      <h3 className='font-bold mb-2'>Projektövervakning och kvalitetskontroll</h3>
      <h3 className='font-bold mb-2'>Besiktning efter ansökan.</h3>
      <div className='mt-8 text-center text-lg font-medium my-24 lg:my-0' style={{ color: "#704d4d" }}>
        <a 
        href="#4"
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center p-2 rounded-xl w-fit bg-gray-50 mx-auto'>
          <span>Kontakta oss</span>
          <span className='ml-2 mt-1 rounded-full' style={{ color: "#704d4d" }}>
            <FaCaretRight />
          </span>
        </a>
      </div>
    </div>
  </motion.div>

  {/* Third Card */}
  <motion.div
    variants={fadeIn("up", 1.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className='w-11/12  lg:w-4/12 bg-white p-4 rounded-lg shadow-lg relative mx-4 mb-3'> {/* Add mx-4 here */}
    
    <img className='w-full h-auto rounded-md' src={ec} alt="Project Image" />

    <div className='absolute left-1/2 transform -translate-x-1/2 -mt-6 w-10/12 p-4 box z-50 rounded-md'>
      <h3 className='font-bold text-center text-white'>EcoZmart</h3>
    </div>

    <div className='text-start w-10/12 mt-12 mb-6 mx-auto'>
      <h3 className='font-bold'>
        Vid fuktrenovering använder vi oss av nya produkten EcoZmart som är miljövänligt och sker på ett smidigt sätt. 
        Undvik buller från maskin som stör grannarna och satsa smart på EcoZmart.
      </h3>
      <div className='mt-8 text-center text-lg font-medium my-24 lg:my-0' style={{ color: "#704d4d" }}>
      <a
      href="#4"
      className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center p-2 rounded-xl w-fit bg-gray-50 mx-auto'>
          <span>Kontakta oss</span>
          <span className='ml-2 mt-1 rounded-full' style={{ color: "#704d4d" }}>
            <FaCaretRight />
          </span>
        </a>
      </div>
    </div>
  </motion.div>
</div>



      



     </div>















    <div className='mt-36'>
    <motion.h2 
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className='text-center text-3xl  font-bold'
      >
     tjänsterna
      </motion.h2>






      <div className='my-16 w-full flex  flex-wrap justify-between'>
  {/* First Card */}
  <motion.div
    variants={fadeIn("up", 0.4)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className='w-11/12 mx-auto lg:mx-0 lg:w-[30%] bgGray p-4 rounded-lg shadow-lg relative mb-5 lg:mb-16'> {/* Adjust width to 30% and add mb-8 for vertical spacing */}
    
    <div className='text-center w-10/12 mt-12 mb-6 mx-auto'>
      <h3 className='font-bold text-xl'>Fuktrenovering</h3>
      <h4 className='text-lg mt-5 font-medium'>
        Med hjälp av EcoZmarts revolutionerade produkter Waterproof och MBP utförs denna tjänst på ett miljövänligt sätt.
      </h4>
    </div>

    <div className='mt-8 text-center text-lg font-medium text-white w-9/12 lg:w-6/12 mx-auto'>
      <a
      href="#4"
      className='flex justify-center items-center p-2 rounded-md w-full bgblue'>
        <span>Kontakta oss</span>
        <span className='ml-2 mt-1' style={{ color: "#fff" }}>
          <FaCaretRight />
        </span>
      </a>
    </div>
  </motion.div>

  {/* Second Card */}
  <motion.div
    variants={fadeIn("up", .8)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className='w-11/12 mx-auto lg:mx-0 lg:w-[30%] bgGray p-4 rounded-lg shadow-lg relative mb-5 lg:mb-16'>
    
    <div className='text-center w-10/12 mt-12 mb-6 mx-auto'>
      <h3 className='font-bold text-xl'>Vattentätning</h3>
      <h4 className='text-lg mt-5 font-medium'>
        Av byggnader och konstruktioner, såsom murväggar, simbassänger och källare.
      </h4>
    </div>

    <div className='mt-16 text-center text-lg font-medium text-white w-9/12 lg:w-6/12 mx-auto'>
      <a
      href="#4"
      className='flex justify-center items-center p-2 rounded-md w-full bgblue'>
        <span>Kontakta oss</span>
        <span className='ml-2 mt-1' style={{ color: "#fff" }}>
          <FaCaretRight />
        </span>
      </a>
    </div>
  </motion.div>

  {/* Third Card */}
  <motion.div
    variants={fadeIn("up", 1.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className='w-11/12 mx-auto lg:mx-0 lg:w-[30%] bgGray p-4 rounded-lg shadow-lg relative mb-5 lg:mb-16'>
    
    <div className='text-center w-10/12 mt-12 mb-6 mx-auto'>
      <h3 className='font-bold text-xl'>Radon & gassanering</h3>
      <h4 className='text-lg mt-5 font-medium'>
        Med sanering samt neutralisering av miljö från radon och farliga gaser som kommer från mark och konstruktion.
      </h4>
    </div>

    <div className='mt-8 text-center text-lg font-medium text-white  w-9/12 lg:w-6/12 mx-auto'>
      <a
      href="#4"
      className=' flex justify-center items-center p-2 rounded-md w-full bgblue'>
        <span>Kontakta oss</span>
        <span className='ml-2 mt-1' style={{ color: "#fff" }}>
          <FaCaretRight />
        </span>
      </a>
    </div>
  </motion.div>
  
  <motion.div
    variants={fadeIn("up", .4)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className='w-11/12 mx-auto lg:w-[30%] bgGray p-4 rounded-lg shadow-lg relative mb-5 lg:mb-16'>{/* Adjust width to 30% and add mb-8 for vertical spacing */}
    
    <div className='text-center w-10/12 mt-12 mb-6 mx-auto'>
      <h3 className='font-bold text-xl'>Förstärkning</h3>
      <h4 className='text-lg mt-5 font-medium'>
        Av byggnadskonstruktioner för ökad styrka och hållbarhet.
      </h4>
    </div>

    <div className='mt-8 text-center text-lg font-medium text-white  w-9/12 lg:w-6/12 mx-auto'>
      <a 
      href="#4"
      className='flex justify-center items-center p-2 rounded-md w-full bgblue'>
        <span>Kontakta oss</span>
        <span className='ml-2 mt-1' style={{ color: "#fff" }}>
          <FaCaretRight />
        </span>
      </a>
    </div>
  </motion.div>

  {/* Fifth Card */}
  <motion.div
    variants={fadeIn("up", .8)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className='w-11/12 mx-auto lg:w-[30%] bgGray p-4 rounded-lg shadow-lg relative mb-5 lg:mb-16'>
    
    <div className='text-center w-10/12 mt-12 mb-6 mx-auto'>
      <h3 className='font-bold text-xl'>Inomhusrenovering</h3>
      <h4 className='text-lg mt-5 font-medium'>
        Badrumsrenovering & Köksrenovering
      </h4>
    </div>

    <div className='mt-16 text-center text-lg font-medium text-white  w-9/12 lg:w-6/12 mx-auto'>
      <a
      href="#4"
      className='flex justify-center items-center p-2 rounded-md w-full bgblue'>
        <span>Kontakta oss</span>
        <span className='ml-2 mt-1' style={{ color: "#fff" }}>
          <FaCaretRight />
        </span>
      </a>
    </div>
  </motion.div>

  {/* Sixth Card */}
  <motion.div
    variants={fadeIn("up", 1.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className='w-11/12 mx-auto lg:w-[30%] bgGray p-4 rounded-lg shadow-lg relative mb-5 lg:mb-16'>
    
    <div className='text-center w-10/12 mt-12 mb-6 mx-auto'>
      <h3 className='font-bold text-xl'>Övriga tjänster</h3>
      <h4 className='text-lg mt-5 font-medium'>
        Fasad & Elektriker & VVS & Måleri
      </h4>
    </div>

    <div className='mt-16 text-center text-lg font-medium text-white  w-9/12 lg:w-6/12 mx-auto'>
      <a 
      href="#4"
      className='flex justify-center items-center p-2 rounded-md w-full bgblue'>
        <span>Kontakta oss</span>
        <span className='ml-2 mt-1' style={{ color: "#fff" }}>
          <FaCaretRight />
        </span>
      </a>
    </div>
  </motion.div>





</div>


    




    </div>






    </div>
  );
};

export default Services;
