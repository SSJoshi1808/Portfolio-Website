import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Suvarna Rup – Jewellery Ecommerce System",
      description: "An elegant, secure jewellery e-commerce platform with comprehensive features for both administrators and clients. The system facilitates product management, user authentication, and secure payment processing.",
      technologies: ["React-JS", "Node-JS", "Express-JS", "MongoDB", "JWT", "PayPal"],
      features: [
        "Role-based access for admins and users",
        "Integrated secure online transactions",
        "Robust inventory and product control",
        "Authentication and token-based authorization",
   
      ]
    },
    {
      title: "PG Rental System",
      description: "A web platform for property owners to list PG rooms and for tenants to express interest. The system streamlines the rental process with user-friendly interfaces for both parties.",
      technologies: ["HTML", "CSS", "Python", "Django", "SQLite"],
      features: [
        "Owner-managed room listings",
        "Tracking of tenant applications",
        "Secure user login and registration",
        "Optimized layout for all devices"
      ]
    },
    {
      title: "Electronic Device Billing System",
      description: "A comprehensive billing system with functionalities to add, update, and delete product and customer details.",
      technologies: ["Java", "Swing", "MySQL", "NetBeans IDE"],
      features: [
        "Add, edit, and remove device entries",
        "Customer profile and data management",
        "Seamless integration with backend database",
        "Automated bill creation and calculation"
      ]
    },
    {
      title: "Infinity Finance - Bank Loan Management System",
      description: "An interactive system providing details on various loan types, including an EMI calculator for better financial planning.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Chart.js"],
      features: [
        "Comprehensive loan information display",
         "Dynamic charts and data visualization",
        "Simplified user navigation experience",
        "Built-in EMI estimation tool"
       
      ]
    },
    {
      title: "Green Culture Plant Nursery Website",
      description: "A front-end website showcasing various plant types and workshop details, designed to promote plant awareness and education.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Visual plant listings with descriptions",
        "Interactive and animated content sections",
        "Event and workshop announcements",
        "Mobile-first responsive design"
      ]
    }
  ];

  return (
    <div name="projects" className="w-full bg-primary text-textPrimary py-20">
      <div className="max-w-screen-xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#61dafb] inline-block border-b-4 border-[#61dafb] pb-2">Projects</h2>
          <p className="text-xl mt-6 text-gray-300">Showcasing my technical expertise through innovative solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a192f] rounded-xl shadow-2xl border border-[#61dafb] hover:shadow-[#61dafb]/10 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-bold text-[#61dafb] leading-tight">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">{project.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#61dafb] font-semibold mb-3 flex items-center">
                      <span className="text-lg">Technologies</span>
                      <div className="flex-grow h-px bg-[#61dafb]/20 ml-4"></div>
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-sm bg-[#112240] text-[#61dafb] px-4 py-2 rounded-lg font-medium hover:bg-[#61dafb]/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#61dafb] font-semibold mb-3 flex items-center">
                      <span className="text-lg">Key Features</span>
                      <div className="flex-grow h-px bg-[#61dafb]/20 ml-4"></div>
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-[#61dafb] mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
