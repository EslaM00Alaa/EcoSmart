import React from 'react';
import './style.css';  // تأكد من استيراد ملف CSS
import m1 from "./leaf (1).png";
import m2 from "./eco.png";
import m3 from "./esg.png";
import m4 from "./ce-seal.png";

const Line = () => {
  return (
    <div className='overflow-hidden bg-white h-fitw mt-12 lg:mt-36 mb-12'>
      <div className='animate-marquee h-40 flex justify-between items-center  px-7 py-4 bg-white w-[200%] '>
        <span className='mx-2'>
          <img className='w-32' src={m1} alt="" />
        </span>
        <span className='mx-2'>
          <img className='w-32' src={m2} alt="" />
        </span>
        <span className='h-32 w-32 mx-2 border-4 rounded-full flex justify-center items-center' style={{borderColor:"#E0E0E0"}}>
          <span className='text-3xl font-bold' style={{color:"#E0E0E0"}}>
              WRC
          </span>
         </span>
         <span className='mx-2'>
          <img className='w-32' src={m3} alt="" />
        </span>
        <span className='h-32 w-32 mx-2 border-4 rounded-full flex justify-center items-center' style={{borderColor:"#E0E0E0"}}>
          <span className='text-3xl font-bold' style={{color:"#E0E0E0"}}>
              WRAS
          </span>
         </span>
         <span className='mx-2'>
          <img className='w-32' src={m4} alt="" />
        </span>
        
        {/* تكرار العناصر لجعل الحركة سلسة ومتواصلة */}
        <span className='mx-2'>
          <img className='w-32' src={m1} alt="" />
        </span>
        <span className='mx-2'>
          <img className='w-32' src={m2} alt="" />
        </span>
        <span className='h-32 w-32 mx-2 border-4 rounded-full flex justify-center items-center' style={{borderColor:"#E0E0E0"}}>
          <span className='text-3xl font-bold' style={{color:"#E0E0E0"}}>
              WRC
          </span>
         </span>
         <span className='mx-2'>
          <img className='w-32' src={m3} alt="" />
        </span>
        <span className='h-32 mx-2 w-32 border-4 rounded-full flex justify-center items-center' style={{borderColor:"#E0E0E0"}}>
          <span className='text-3xl font-bold' style={{color:"#E0E0E0"}}>
              WRAS
          </span>
         </span>
         <span className='mx-2'>
          <img className='w-32' src={m4} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Line;
