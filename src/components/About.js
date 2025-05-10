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
          I'm currently pursuing my Master's in Computer Applications (MCA) with a CGPA of 9.35, building a strong foundation in computer science principles, software engineering, and full-stack web development. My academic excellence and project-based learning have equipped me with proficiency in various programming languages, frameworks, and real-world development tools.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mt-5"
        >
          I'm passionate about building scalable, user-centric software solutions. I specialize in developing responsive web applications using the MERN stack and have hands-on experience with Git, GitHub, MySQL, and Oracle.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl mt-5"
        >
          To stay updated with industry trends, I actively participate in workshops, complete certifications, and contribute to collaborative projects. With strong problem-solving skills and a focus on intuitive design, I aim to become a versatile developer who delivers impactful tech solutions.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xl mt-5"
        >
          My goal is to become a versatile software developer capable of contributing to innovative tech solutions that make a meaningful impact. I enjoy problem-solving, working in team environments, and turning complex requirements into intuitive digital experiences.
        </motion.p>
      </div>
    </div>
  );
};

export default About;