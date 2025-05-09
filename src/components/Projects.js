import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with real-time updates",
      tech: ["React", "Firebase", "Material-UI"]
    }
  ];

  return (
    <div name="projects" className="w-full min-h-screen bg-primary text-textPrimary">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-secondary"
          >
            Projects
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, description, tech }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-2">{title}</h3>
                <p className="text-lg mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-white rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;