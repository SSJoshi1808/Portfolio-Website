import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Web Development Intern",
      company: "Virtual Vigilantes",
      duration: "2023",
      description: "Designed and developed two major web projects focusing on modern web technologies and responsive design.",
      projects: [
        "Image Gallery Website - Interactive gallery with modern design principles",
        "Personal Blog Post - Fully responsive blog platform"
      ],
      certificateLink: "#" // Replace with actual certificate link
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "Salesqueen Software Solutions",
      duration: "2023",
      description: "Gained hands-on experience working on various live real-world projects using modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      certificateLink: "#" // Replace with actual certificate link
    }
  ];

  return (
    <div name="experience" className="w-full min-h-screen bg-primary text-textPrimary py-20 px-4 md:px-8">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold text-[#61dafb] inline border-b-4 border-[#61dafb]">
            Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: exp.id * 0.1 }}
              className="bg-[#0a192f] p-6 rounded-lg shadow-lg border border-[#61dafb] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#61dafb] mb-2">{exp.role}</h3>
                  <h4 className="text-lg md:text-xl text-gray-300 mb-1">{exp.company}</h4>
                  <p className="text-gray-400 text-sm md:text-base">{exp.duration}</p>
                </div>
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-0 inline-block bg-[#112240] text-[#61dafb] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#61dafb] hover:text-[#0a192f] transition-all duration-300"
                >
                  View Certificate
                </a>
              </div>
              
              <p className="text-gray-300 mb-4">{exp.description}</p>
              
              {exp.projects && (
                <div className="mb-4">
                  <h5 className="text-[#61dafb] font-medium mb-2">Projects:</h5>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {exp.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {exp.technologies && (
                <div>
                  <h5 className="text-[#61dafb] font-medium mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#112240] text-[#61dafb] px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;