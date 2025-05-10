import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Masters of Computer Applications (MCA)",
      institution: "MES Institute of Management and Career Courses",
      year: "2024 - 2026",
      status: "Pursuing",
      achievements: "SGPA-9.42 | CGPA-9.35 | Percentage- 89.69%"
    },
    {
      id: 2,
      degree: "Bachelor of Business Administration in Computer Applications (BBA-CA)",
      institution: "MES GARWARE COLLEGE OF COMMERCE (GCC), KARVE ROAD, PUNE",
      year: "2021 - 2024",
      achievements: "SGPA-9.77 | CGPA-9.10 | Percentage- 86%"
    }
  ];

  return (
    <div name="education" className="w-full bg-primary text-textPrimary py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-6"
        >
          <h2 className="text-4xl font-bold text-[#61dafb] inline border-b-4 border-[#61dafb]">
            Education
          </h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: edu.id * 0.1 }}
              className="bg-[#0a192f] p-4 rounded-lg shadow-lg border border-[#61dafb] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-[#61dafb]">{edu.degree}</h3>
                <span className="text-gray-400 text-base md:text-lg mt-1 md:mt-0">{edu.year}</span>
              </div>
              <p className="text-gray-300 text-lg md:text-xl mb-2">{edu.institution}</p>
              {edu.status && (
                <span className="inline-block bg-[#112240] text-[#61dafb] px-3 py-1 rounded-full text-sm">
                  {edu.status}
                </span>
              )}
              {edu.achievements && (
                <p className="text-[#61dafb] mt-2 text-base md:text-lg font-medium">{edu.achievements}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;