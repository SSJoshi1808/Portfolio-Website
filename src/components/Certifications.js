import React from 'react';
import { motion } from 'framer-motion';
import virtualVigilantesCert from '../assets/virtual_vigilantes_certificate.png';
import salesqueenCert from '../assets/salesqueen_certificate.png';
import udemyReactCert from '../assets/udemy_react_certificate.png';
import githubCert from '../assets/github_certificate.png';
import cdacCert from '../assets/cdac_certificate.png';
import ciscoCert from '../assets/cisco_certificate.png';

const Certifications = () => {
  const certificates = [
    {
      title: "Udemy React Certificate",
      issuer: "Udemy",
      certificate: udemyReactCert
    },
    {
      title: "GitHub Certificate",
      issuer: "GitHub",
      certificate: githubCert
    },
    {
      title: "Bootcamp on AR/VR",
      issuer: "CDAC",
      certificate: cdacCert
    },
    {
      title: "Cisco Python Certificate",
      issuer: "Cisco",
      certificate: ciscoCert
    },
    {
      title: "Frontend Internship Certificate",
      issuer: "Virtual Vigilantes",
      certificate: virtualVigilantesCert
    },
    {
      title: "SalesQueen Internship Certificate",
      issuer: "SalesQueen",
      certificate: salesqueenCert
    }
  ];

  return (
    <div name="certifications" className="w-full bg-primary text-textPrimary py-12 px-4">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-6"
        >
          <h2 className="text-3xl font-bold text-[#61dafb] inline border-b-4 border-[#61dafb]">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a192f] p-6 rounded-lg shadow-lg border border-[#61dafb] hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#61dafb] mb-2">{cert.title}</h3>
              <p className="text-gray-300">Issued by: {cert.issuer}</p>
              <a
                href={cert.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#112240] text-[#61dafb] px-4 py-2 rounded-full text-sm font-medium
                         hover:bg-[#61dafb] hover:text-[#0a192f] transition-all duration-300"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;