import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const email = "joshishreya2019@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  
  return (
    <div name="contact" className="w-full bg-primary text-textPrimary pt-0 pb-10 flex items-center justify-center scroll-mt-0">
      <div className="max-w-screen-lg w-full flex flex-col items-center">
        <motion.h2 
          initial={{opacity:0,x:-20}} 
          whileInView={{opacity:1,x:0}} 
          transition={{duration:0.5}} 
          className="text-4xl font-bold text-[#61dafb] border-b-4 border-[#61dafb] mb-8"
        >
          Contact
        </motion.h2>
        <motion.div 
          initial={{opacity:0,y:20}} 
          whileInView={{opacity:1,y:0}} 
          transition={{duration:0.5}} 
          className="text-center"
        >
          <p className="text-xl mb-4">Get in touch with me at:</p>
          <a 
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-[#61dafb] hover:scale-105 transition-transform duration-300 inline-block"
          >
            {email}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;