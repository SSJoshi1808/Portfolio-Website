import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "R-Programming"]
    },
    {
      title: "Web Frameworks & Libraries",
      skills: ["React-JS", "Angular-JS", "NodeJS", "Express-JS","Django"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "Tailwind CSS"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "SQL Server", "SQLite"]
    },
    {
      title: "Tools & Concepts",
      skills: ["Cybersecurity","Big Data", "Software Engineering", "OOSE"]
    },
    {
      title: "Java Technologies",
      skills: ["Servlet", "JSP", "JDBC", "Swing"]
    }
  ];

  return (
    <div name="skills" className="w-full bg-primary text-textPrimary py-12 px-4">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-6"
        >
          <h2 className="text-3xl font-bold text-[#61dafb] inline border-b-4 border-[#61dafb]">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-[#0a192f] p-4 rounded-lg shadow-lg border border-[#61dafb]"
            >
              <h3 className="text-lg font-bold text-[#61dafb] mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="bg-[#112240] text-[#61dafb] px-3 py-1 rounded-full text-sm font-medium
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