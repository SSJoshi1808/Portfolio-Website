import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", level: 90 },
    { id: 2, name: "CSS", level: 85 },
    { id: 3, name: "JavaScript", level: 80 },
    { id: 4, name: "React", level: 75 },
    { id: 5, name: "Node.js", level: 70 },
    { id: 6, name: "Python", level: 85 },
    { id: 7, name: "Java", level: 80 },
    { id: 8, name: "SQL", level: 75 }
  ];

  return (
    <div name="skills" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-secondary"
          >
            Skills
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-12 sm:px-0">
          {skills.map(({ id, name, level }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="shadow-md shadow-gray-600 rounded-lg p-4"
            >
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-secondary h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;