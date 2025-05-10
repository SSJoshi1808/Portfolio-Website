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
          I am currently pursuing my Master's in Computer Applications (MCA), where I've developed a solid foundation in computer science principles, software engineering, and full-stack web development. My academic and project-based learning experiences have equipped me with proficiency in various programming languages, modern frameworks, and development tools used in real-world applications.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl mt-5"
        >
          Throughout my journey, I have demonstrated a consistent passion for building scalable, user-centric software solutions. I specialize in developing responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and have hands-on experience with version control (Git & GitHub), and database management systems including MySQL and Oracle.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl mt-5"
        >
          I continuously strive to stay updated with industry trends by participating in workshops, completing certifications, and contributing to collaborative coding projects.
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