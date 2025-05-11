import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div name="home" className="min-h-screen w-full bg-primary py-20 px-4 md:px-8">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full md:w-3/5"
        >
          <span className="text-[#61dafb] text-xl md:text-2xl font-medium tracking-wider mb-2">Hi, my name is</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 tracking-tight">
            Shreya Sanjay Joshi
          </h2>
          <h3 className="text-2xl md:text-3xl text-gray-400 mt-4 font-medium tracking-wide">
            Web Developer | MCA Student
          </h3>
          <p className="text-textPrimary py-8 text-base md:text-lg leading-relaxed">
            I'm a Web Developer specializing in building exceptional digital experiences. Currently pursuing MCA with a CGPA of 9.35 , focus on advanced software architecture and development, I'm passionate about creating scalable solutions that deliver real value.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group bg-[#61dafb] text-primary px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center font-semibold text-sm md:text-base cursor-pointer"
            >
              View Projects
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to="certifications"
              smooth={true}
              duration={500}
              className="group border border-[#61dafb] text-[#61dafb] px-6 py-3 rounded-md hover:bg-[#61dafb] hover:text-primary transition-all duration-300 flex items-center font-semibold text-sm md:text-base cursor-pointer"
            >
              View Certifications
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="flex gap-4 mt-8">
            <a 
              href="https://github.com/SSJoshi1808/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-textPrimary hover:text-[#61dafb] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/shreya-joshi-237240264/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-textPrimary hover:text-[#61dafb] transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/5 flex justify-center md:justify-end"
        >
          <div className="w-full max-w-sm">
            <img
              src={profilePic}
              alt="Shreya Joshi"
              className="rounded-lg w-full h-auto object-cover shadow-xl border-2 border-gray-700 aspect-[3/4]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;