import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'education' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'skills' },
    { id: 6, link: 'projects' },
    { id: 7, link: 'certifications' },
    { id: 8, link: 'contact' }
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-textSecondary fixed bg-[#0a192f] z-50">
      <div>
        <h1 className="text-5xl font-bold text-[#61dafb] flex items-center group">
          <span className="font-serif tracking-wider transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 ease-in-out">S</span>
          <span className="text-5xl font-bold tracking-tight -ml-2 italic transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ease-in-out">J</span>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="nav-link px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-[#61dafb] duration-200">
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-[#61dafb] md:hidden">
        <FaBars size={30} />
      </div>

      {nav && (
        <div className="fixed top-0 right-0 w-[50%] h-screen bg-[#0a192f] flex flex-col justify-start pt-20 shadow-lg shadow-[#61dafb]/10">
          <ul className="flex flex-col items-center space-y-8">
            {links.map(({ id, link }) => (
              <li key={id} className="text-2xl text-gray-300">
                <Link 
                  onClick={() => setNav(!nav)} 
                  to={link} 
                  smooth 
                  duration={500}
                  className="hover:text-[#61dafb] transition-colors duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;