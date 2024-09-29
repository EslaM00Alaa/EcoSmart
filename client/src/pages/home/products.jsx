import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

import waterprof from "../../images/waterprrofw.png"
import mbp from "../../images/MB.png"

const Products = () => {
  return (
    <div className='mt-32 w-11/12 lg:w-9/12 mx-auto mb-16'>
   
    <motion.h2 
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className='text-center text-3xl font-bold mb-4'
    >
    Våra produkter
    </motion.h2>
    <motion.p
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className='text-xl text-gray-500 text-center my-2 mb-6 lg:w-7/12 mx-auto'
      style={{ width: "90%", maxWidth: "600px" }} // Adjust max-width for larger screens
    >
    Upptäck våra produkter som är utvecklade för att överträffa dina förväntningar. Utforska vårt breda utbud av högkvalitativa lösningar och hitta det som passar dina behov bäst!
    </motion.p>

    <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>

       
        <div className='w-11/12 mx-auto lg:w-6/12 my-3 lg:my-16'>
            <motion.h3
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
             className='text-2xl text-start font-bold my-4'>
              Waterproofing
            </motion.h3>

            <motion.h4
             variants={fadeIn("right", 0.4)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: true }}
            className='text-xl font-medium text-start mb-3'>
            Varför ska man välja Waterproofing vid fuktrenovering?
            </motion.h4>
           
           <motion.p
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
           className='text-lg text-start mb-6 text-gray-600'>
            Waterproofing ger en lång livslängd med 10 års garanti tack vare sin vattentäta tålighet mot extrem höga vattentryck upp till 10 bar. Vetenskapligt bevisat att det förhindrar fukt, mögel, radon och andra giftiga gaser från att tränga igenom substratet. 
           </motion.p>

           <motion.p
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
           className='text-lg text-start mb-6 text-gray-600'>

           Förutom sin effektiva vattentäta egenskaper ger Waterproofing en solid strukturell förstärkning och förbättrar substratdensiteten på olika murade ytor, inklusive sten, cement, betong och puts som kan användas året runt som klarar av temperaturer upp till 41 grader. 
           </motion.p>

           <motion.h4
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
           className='text-xl font-medium text-start mb-2'>
            Är denna metod bättre än dränering?
           </motion.h4>

           <motion.p
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
           className='text-lg text-start mb-6 text-gray-600'>
           Efter en lång tid i branschen med bland annat arbete med dränering ser man flera nackdelar än fördelar. Med denna revolutionerade metod slipper du nackdelarna med dränering. Sist men inte minst det är ett bra ekonomiskt val för att det minskar underhållningskostnader och reparationskostnader.
           </motion.p>

        </div>
        
        <motion.div
             variants={fadeIn("left", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: true }}
           className='rounded-xl  flex justify-center items-center relative w-10/12 mx-auto mt-10 lg:my-0 lg:w-3/12 bgGray h-96 '>
            <img className='w-full ' src={waterprof} alt="" />
        </motion.div>
        
      
    
    </div>    


    <div className='flex flex-col lg:flex-row  justify-between items-center'>
        <div className='w-11/12 mx-auto lg:w-8/12'>
            <motion.h2
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className='text-start mb-4 text-3xl font-bold'>
                PRISER
            </motion.h2>
            <motion.h1
             variants={fadeIn("up", 0.4)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: true }}
            className='text-4xl lg:text-5xl text-start'>Kostnad: <span className='font-bold lightblue '>2299 kr</span> per burk 25 kg.</motion.h1>
            
            <motion.a
             href="#4"
             variants={fadeIn("up", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: true }}
            className=' py-3 px-16 my-10 block w-fit bgblue text-gray-300 text-3xl rounded-2xl '>
            beställ nu</motion.a> 

        </div>
        <div className='w-11/12 mx-auto lg:w-6/12 mb-12'>
        <motion.h4
         variants={fadeIn("up", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: true }}
        className='text-xl font-medium text-start mb-6 text-gray-600'>
        Per pall utrymmer max 40 stycken WP burkar och 20 stycken MBP. 
        </motion.h4>
        <motion.h4 
         variants={fadeIn("up", 0.4)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: true }}
        className='text-xl font-medium text-start mb-3 text-gray-600'>
        Fraktkostnaden varierar baserad volym och destination.​ Vi fraktar även internationellt. Kontakta oss för mer information.
        </motion.h4>
        </div>
    </div>



    <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>

       
    <div className='w-11/12 mx-auto lg:w-6/12 my-3 lg:my-16'>
    <motion.h3 
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
    
    className='text-2xl text-start font-bold my-4'>
    Multi-Purpose Admixture Bonding Agent Premium Primer
    </motion.h3>

    <motion.h4 
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
    className='text-xl font-medium text-start mb-3'>
    Vad är MBP?  
    </motion.h4>
   
   <motion.p
     variants={fadeIn("right", 0.5)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: true }}
   className='text-lg text-start mb-6 text-gray-600'>
   Det är en premium vatten- och gasavvisande bindemedel - Blandning - Primer. En vattenbaserad formel för stål som är miljövänlig. Besitter även antioxidanta, antiskum egenskaper samt är frysstabil.
   </motion.p>



   <motion.h4
     variants={fadeIn("right", 0.6)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: true }}
   className='text-xl font-medium text-start mb-2'>
   Är den effektiv?
   </motion.h4>

   <motion.p
     variants={fadeIn("right", 0.7)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: true }}
   className='text-lg text-start mb-6 text-gray-600'>
   Ja! Det ger en förbättrad vidhäftning på ojämnt och svårt underlag samt gör sitt jobb vid regniga arbetsdagar och på fuktiga ytor. Förbättrar underlagets vidhäftning samt material och draghållfasthet flexibilitet med upp till 4 gånger.  
   </motion.p>

   <motion.h4 
     variants={fadeIn("right", 0.8)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: true }}
   className='text-xl font-medium text-start mb-2'>
   Hur funkar det med Waterproofing?
   </motion.h4>

   <motion.p 
     variants={fadeIn("right", 0.9)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: true }}
   className='text-lg text-start mb-6 text-gray-600'>
   Man blandar det med Waterproofing som ger en extra skyddsbarriär mot vattentryck och giftiga gaser. Hjälper även mot sprickmotstånd och ger en ökad hållbarhet. 
   </motion.p>

   <motion.h4
     variants={fadeIn("right", 1.0)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: true }}
   className='text-xl font-medium text-start mb-2'>
  Bra att veta!
   </motion.h4>

   <motion.p 
     variants={fadeIn("right", 1.1)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: true }}
   className='text-lg text-start mb-6 text-gray-600'>
   Används flitigt för betong i områden med kraftiga klimatvariationer, exponering för överbelastning och golvvärme. 
   </motion.p>





</div>

<motion.div
  variants={fadeIn("left", 0.7)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: true }}
  className='rounded-xl  flex justify-center items-center relative w-10/12 mx-auto mt-10 lg:my-0 lg:w-3/12 bgGray h-96 '>
    <img className='w-full  ' src={mbp} alt="" />
</motion.div>



</div>    

<div className='flex flex-col lg:flex-row  justify-between items-center'>
<div className='w-11/12 mx-auto lg:w-8/12'>
    <motion.h2
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
    className='text-start mb-4 text-3xl font-bold'>
        PRISER
    </motion.h2>
    <motion.h1
      variants={fadeIn("right", 0.7)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
    className='text-4xl lg:text-5xl text-start'>Kostnad: <span className='font-bold lightblue '>799  kr</span> per fem liter förpackning.</motion.h1>
    
     <motion.a
             href="#4"
    variants={fadeIn("up", 0.9)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true }}
    className=' py-3 px-16 my-10 block w-fit bgblue text-gray-300 text-3xl rounded-2xl '>
    beställ nu</motion.a> 

</div>
<div className='w-11/12 mx-auto lg:w-6/12 mb-12'>
<motion.h4
  variants={fadeIn("left", 0.5)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: true }}
className='text-xl font-medium text-start mb-6 text-gray-600'>
Per pall utrymmer max 40 stycken WP burkar och 20 stycken MBP. 
</motion.h4>
<motion.h4
variants={fadeIn("left", 0.7)}
initial="hidden"
whileInView={"show"}
viewport={{ once: true }}
className='text-xl font-medium text-start mb-3 text-gray-600'>
Fraktkostnaden varierar baserad volym och destination.​ Vi fraktar även internationellt. Kontakta oss för mer information.
</motion.h4>
</div>
</div>


    </div>
  );
};

export default Products;