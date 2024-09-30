import  { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';
import { MdMarkEmailUnread } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendMessage } from '../../apis/sendemail';
const Contact = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setPhone] = useState("");
    const [add, setAdd] = useState("");
    const [add2, setAdd2] = useState("");
    const [message, setmessage] = useState("");
 
    const HandelSendMessage = async() =>{
    
      if (!name || !email || !phone || !add || !message) {
        toast.error("Must fill all input fields");
        return;
      }
      

     let flag = await sendMessage(name,email,phone,`${add}    ${add2}`,message)
        setname("")
        setemail("")
        setmessage("")
        setPhone("")
        setAdd("")
        setAdd2("")
        if(flag)
        toast.success("meddelande har skickats");
    }

  return (
    <div className='mt-32 w-11/12 lg:w-9/12 mx-auto mb-16'>
        <ToastContainer />
    {/* Heading Section */}
    <motion.h2 
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className='text-center text-3xl font-bold'
    >
     Kontakta oss
    </motion.h2>
    <motion.p
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className='text-xl text-gray-600 font-medium text-center my-2 mb-6 w-full lg:w-5/12 mx-auto'
    >
     Har du en fråga eller behöver du hjälp? Skicka ett meddelande till oss så återkommer vi till dig inom kort!
    </motion.p>
      
 
      <div className='flex justify-between flex-col-reverse lg:flex-row items-center my-16 '>
          
          <div className='w-11/12 mx-auto my-10 lg:my-0 lg:w-5/12  p-2'>
           <motion.h2
             variants={fadeIn("right", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: true }}
             className='text-start text-2xl lg:text-3xl font-bold'
           >
            Hör av dig
            </motion.h2> 

            <motion.p
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className='text-start text-gray-600  text-lg my-3 w-11/12'
            >
            Vi vill gärna höra från dig! Oavsett om du har frågor, feedback eller bara vill säga hej, hör gärna av dig. Vänligen fyll i formuläret nedan med ditt meddelande, så återkommer vi till dig så snart som möjligt. Du kan också följa oss på våra sociala mediekanaler för att hålla kontakten!
            </motion.p>


            <motion.div  
                 variants={fadeIn("right", 0.6)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once: true }} className='flex justify-start items-center'>
                
                <div className='p-4 bgGray w-fit rounded-full my-4 mr-6 '>
                <span className='text-2xl'>
                <MdMarkEmailUnread />
                </span>
                </div>

                <div className='flex flex-col items-start'>
                 <h4 className='text-xl mb-0 font-semibold'>E-post</h4>
                 <h5 className='text-lg text-gray-500 font-medium'>ecosmartbygg1@gmail.com</h5>
                </div>
            </motion.div>


           <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className='w-full  bg-gray-400 my-4 mb-6' style={{height:"1px"}}></motion.div>
          
            
            <div>
                <motion.h4 
                   variants={fadeIn("right", 0.9)}
                   initial="hidden"
                   whileInView={"show"}
                   viewport={{ once: true }}
                className='text-2xl font-bold text-start my-3'>följ oss</motion.h4>
                <div className='flex '>
                    <motion.a
                       target='_blank'
                       href='https://www.facebook.com/profile.php?id=61566492813762&mibextid=ZbWKwL'
                       variants={fadeIn("up", 1)}
                       initial="hidden"
                       whileInView={"show"}
                       viewport={{ once: true }}
                    className='p-3 bgGray w-fit rounded-full m-2 ml-0 text-xl '>
                        <ImFacebook/>
                    </motion.a>
                    <motion.a
                     target='_blank'
                     href='https://www.instagram.com/ecosmart57/'
                     variants={fadeIn("up", 1.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: true }}
                    className='p-3 bgGray w-fit rounded-full m-2 text-xl'>
                       <FaInstagram/>
                    </motion.a>
                    <motion.a
                      target='_blank'
                     href='https://www.tiktok.com/@eco.smart3?_t=8q8AXJdgYtj&_r=1'
                     variants={fadeIn("up", 1.4)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: true }}
                    className='p-3 bgGray w-fit rounded-full m-2 text-xl'>
                        <FaTiktok/>
                    </motion.a>
                   
                </div>
            </div>


          </div>

          <motion.div 
           variants={fadeIn("left", .6)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: true }}
          className='p-3 bg-white rounded-lg w-11/12  lg:w-4/12  px-5 lg:px-10 py-6 flex flex-col '>
            <h3 className='font-semibold text-2xl lg:text-3xl text-start mb-10'>
            skicka ett meddelande
            </h3>
          
            <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder='Namn *' className='input text-gray-500 text-start text-xl lg:text-2xl focus:outline-none placeholder:text-gray-500 w-11/12' />
            
            <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder='E-postadress *' className='input text-gray-500 text-start text-xl lg:text-2xl focus:outline-none placeholder:text-gray-500 w-11/12 mt-10' />
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='telefonnummer *' className='input text-gray-500 text-start text-xl lg:text-2xl focus:outline-none placeholder:text-gray-500 w-11/12 mt-10' />
            <input value={add} onChange={(e)=>setAdd(e.target.value)} type="text" placeholder='adressen *' className='input text-gray-500 text-start text-xl lg:text-2xl focus:outline-none placeholder:text-gray-500 w-11/12 mt-10' />
            <input value={add2} onChange={(e)=>setAdd2(e.target.value)} type="text"  className='input text-gray-500 text-start text-xl lg:text-2xl focus:outline-none placeholder:text-gray-500 w-11/12 ' />
           
            <textarea value={message} onChange={(e)=>setmessage(e.target.value)} placeholder='Meddelande *' className='input text-gray-500 text-start text-xl lg:text-2xl focus:outline-none placeholder:text-gray-500 w-11/12 my-10' name="input" ></textarea>

           
           <div className='w-full flex justify-end'>
            <button onClick={ HandelSendMessage} className='p-3 px-16 rounded-lg bgGray text-xl lg:text-2xl font-medium'>skicka</button>
           </div>
          

          </motion.div>

      </div>


    </div>
  );
};

export default Contact;