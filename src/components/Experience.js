import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Web Development Intern",
      company: "Tech Company Name",
      duration: "June 2023 - Present",
      responsibilities: [
        "Developed responsive web applications using React.js",
        "Collaborated with senior developers on project implementations",
        "Implemented UI/UX designs using modern CSS frameworks"
      ]
    }
  ];

  return (
    <div name="experience" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-secondary"
          >
            Experience
          </motion.h2>
        </div>

        <div className="grid gap-8 px-12">
          {experiences.map(({ id, role, company, duration, responsibilities }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="shadow-md shadow-gray-600 rounded-lg p-6 hover:scale-105 duration-500"
            >
              <h3 className="text-2xl font-bold text-secondary mb-2">{role}</h3>
              <h4 className="text-xl mb-1">{company}</h4>
              <p className="text-gray-400 mb-4">{duration}</p>
              <ul className="list-disc list-inside space-y-2">
                {responsibilities.map((item, index) => (
                  <li key={index} className="text-lg">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;