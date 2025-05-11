import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      name="about"
      className="scroll-mt-20 w-full bg-primary text-textPrimary"
    >
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
          I'm currently pursuing my Master's in Computer Applications (MCA) with a CGPA of 9.35, where I'm building a strong foundation in computer science, software engineering, and full-stack web development. I have a deep interest in crafting scalable, efficient, and user-centric software solutions.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mt-5"
        >
          My technical skill set includes Java, JavaScript, the MERN stack (MongoDB, Express.js, React.js, Node.js), as well as database technologies like MySQL and Oracle. I also have hands-on experience with version control systems like Git and GitHub, along with tools and practices used in real-world development environments.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl mt-5"
        >
          I actively participate in workshops, earn industry certifications, and collaborate on practical projects to stay aligned with evolving tech trends. My strengths lie in problem-solving, clean code practices, and intuitive UI/UX design. I'm comfortable working both independently and in team-based agile environments.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xl mt-5"
        >
          My goal is to become a well-rounded software developer capable of delivering innovative digital experiences that solve real-world problems and create meaningful impact.
        </motion.p>
      </div>
    </div>
  );
};

export default About;