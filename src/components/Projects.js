import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "SuvarnaRup – Jewellery Ecommerce System",
      description: "An elegant, secure jewellery e-commerce platform with comprehensive features for both administrators and clients. The system facilitates product management, user authentication, and secure payment processing.",
      technologies: ["React-JS", "Node-JS", "Express-JS", "MongoDB", "JWT", "PayPal"],
      features: [
        "Role-based access for admins and users",
        "Integrated secure online transactions",
        "Robust inventory and product control",
        "Authentication and token-based authorization",
      ],
      // github: "https://github.com/SSJoshi1808/Ecommerce-System-SuvarnaRup-.git"
      Live:"https://suvarna-rup-deployed-5m9z.vercel.app"
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
      ],
      github: "https://github.com/SSJoshi1808/NestNaviPGRentalWebsite.git"
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
      ],
      github: "https://github.com/SSJoshi1808/BillingSystemElectronicDevice.git"
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
      ],
      github: "https://github.com/SSJoshi1808/Infinity-Finance-BankSystem.git"
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
      ],
      github: "https://github.com/yourusername/green-culture"
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#61dafb] hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    GitHub
                  </a>
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
