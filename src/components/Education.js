import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Your University Name",
      year: "2022 - Present",
      details: "Currently pursuing MCA with focus on advanced programming and software development."
    },
    {
      id: 2,
      degree: "Bachelor's Degree",
      institution: "Your Previous University",
      year: "2019 - 2022",
      details: "Completed bachelor's with strong academic performance and fundamental computer science knowledge."
    }
  ];

  return (
    <div name="education" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-secondary"
          >
            Education
          </motion.h2>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-1">
          {education.map(({ id, degree, institution, year, details }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="shadow-md shadow-gray-600 rounded-lg p-6 hover:scale-105 duration-500"
            >
              <h3 className="text-2xl font-bold text-secondary mb-2">{degree}</h3>
              <h4 className="text-xl mb-1">{institution}</h4>
              <p className="text-gray-400 mb-3">{year}</p>
              <p className="text-lg">{details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;