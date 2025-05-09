import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Suvarna Rup – Gold Investment Management System",
      period: "FYMCA Sem-2",
      description: "An elegant, secure jewellery e-commerce platform built as part of my academic mini-project. The system includes two user roles—Admin and Client—with a complete flow from product management to bookings and payment.",
      tags: ["E-commerce", "User Authentication", "Payment Integration", "Admin Dashboard"]
    },
    {
      title: "NestNavi - Location Based Search",
      period: "FYMCA Sem-1",
      description: "A web-based platform designed to simplify and streamline the rental process. This system provides an interactive interface for both property owners and tenants.",
      tags: ["Django", "Location Services", "Property Management", "User Interface"]
    },
    {
      title: "Electronic Device Billing System",
      period: "TYBBA_CA Sem 6",
      description: "A desktop-based billing application developed in Java Swing with MySQL database integration for managing customer and product data, generating invoices, and tracking reports.",
      tags: ["Java Swing", "MySQL", "Invoice Generation", "Reporting"]
    },
    {
      title: "Bank Loan Management System",
      period: "TYBBA_CA Sem 5",
      description: "A web-based application that manages various types of loans (Home, Gold, Education, Business) with separate roles for users and administrators.",
      tags: ["Web Development", "Loan Management", "Role-based Access", "Financial System"]
    },
    {
      title: "Green Culture",
      period: "TYBBA_CA Sem 4",
      description: "A static web application designed to promote awareness of the benefits of plants and gardening. This site educates users on different organic fruits, vegetables, and flowers, and also allows them to register for workshops and purchase plants online.",
      tags: ["Static Website", "E-commerce", "Educational Content", "Workshop Registration"]
    }
  ];

  return (
    <div name="projects" className="w-full min-h-screen bg-primary text-textPrimary py-20 px-4 md:px-8">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold text-[#61dafb] inline border-b-4 border-[#61dafb]">Projects</h2>
          <p className="py-6 text-lg">Check out some of my academic work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a192f] p-6 rounded-lg shadow-lg border border-[#61dafb] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#61dafb]">{project.title}</h3>
                <span className="text-sm text-gray-400">{project.period}</span>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-[#112240] text-[#61dafb] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;