import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "PHP", "JavaScript", "R-Programming"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "Tailwind-CSS", "JavaScript", "Node.js", "Angular", "React"]
    },
    {
      title: "Frameworks",
      skills: ["PHP CodeIgniter", "Django"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "Oracle", "SQL Server", "SQLite", "Express"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Big Data", "Cyber Security", "Software Engineering", "OOSE"]
    }
  ];

  return (
    <div name="skills" className="w-full min-h-screen bg-primary text-textPrimary py-20 px-4 md:px-8">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold text-[#61dafb] inline border-b-4 border-[#61dafb]">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-[#0a192f] p-6 rounded-lg shadow-lg border border-[#61dafb]"
            >
              <h3 className="text-xl font-bold text-[#61dafb] mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="bg-[#112240] text-[#61dafb] px-4 py-2 rounded-full text-sm font-medium
                             hover:bg-[#61dafb] hover:text-[#0a192f] transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;