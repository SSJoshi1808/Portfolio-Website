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
      achievements: "SGPA-9.77 | CGPA-9.10 | Percentage- 86%"
    },
    {
      id: 2,
      degree: "Bachelor of Business Administration in Computer Applications (BBA-CA)",
      institution: "MES GARWARE COLLEGE OF COMMERCE (GCC), KARVE ROAD, PUNE",
      year: "2021 - 2024",
      achievements: "SGPA-9.77 | CGPA-9.10 | Percentage- 86%"
    },
    {
      id: 3,
      degree: "HSC (12th)",
      institution: "MES BALSHIKSHAN MANDIR HIGHER SECONDARY SCHOOL, MAYUR COLONY, KOTHRUD, PUNE",
      year: "2021"
    },
    {
      id: 4,
      degree: "SSC (10th)",
      institution: "New India School, Bhusari Colony, Kothrud, PUNE",
      year: "2019"
    }
  ];

  return (
    <div name="education" className="w-full min-h-screen bg-primary text-textPrimary py-20 px-4 md:px-8">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold text-[#61dafb] inline border-b-4 border-[#61dafb]">
            Education
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: edu.id * 0.1 }}
              className="bg-[#0a192f] p-6 rounded-lg shadow-lg border border-[#61dafb] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-[#61dafb]">{edu.degree}</h3>
                <span className="text-gray-400 text-sm md:text-base">{edu.year}</span>
              </div>
              <p className="text-gray-300 text-base md:text-lg mb-2">{edu.institution}</p>
              {edu.status && (
                <span className="inline-block bg-[#112240] text-[#61dafb] px-3 py-1 rounded-full text-sm">
                  {edu.status}
                </span>
              )}
              {edu.achievements && (
                <p className="text-[#61dafb] mt-2 text-sm md:text-base font-medium">{edu.achievements}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;