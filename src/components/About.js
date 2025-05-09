import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-primary text-textPrimary">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-[#61dafb] inline border-b-4 border-[#61dafb]"
          >
            About Me
          </motion.h2>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mt-5"
        >
          I am currently pursuing my Master's in Computer Applications (MCA) with a strong foundation in computer science fundamentals. My academic journey has equipped me with extensive knowledge in various programming languages and development tools.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mt-5"
        >
          I am passionate about web development and software engineering, constantly exploring new technologies and best practices to enhance my skills. I enjoy tackling complex problems and creating efficient, user-friendly solutions.
        </motion.p>
      </div>
    </div>
  );
};

export default About;