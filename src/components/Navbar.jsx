import React, { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaChartPie, FaBars, FaTimes } from 'react-icons/fa';
import { MdDashboardCustomize } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import skill from "../assets/images/logo.png";
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: <MdDashboardCustomize /> },
  { to: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { to: '/insights', label: 'Insights', icon: <FaChartPie /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent background scroll on mobile
  document.body.classList.toggle('overflow-hidden', isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full h-[4.5rem] top-0 z-50">
      <div className="flex items-center justify-between px-6 lg:px-[5rem] py-4">

        {/* Logo */}
        <div className="flex justify-center items-center gap-2">
          <img src={skill} alt="logo" className="w-12 h-12" />
          <h1 className="text-xl font-bold tracking-wide">SkillSync</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium relative">
          {links.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative flex items-center gap-2 px-2 pb-1 transition-colors duration-300
                 ${isActive ? 'text-teal-400 font-semibold' : 'text-white hover:text-teal-300'}`
              }
            >
              {({ isActive }) => (
                <>
                  {icon}
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="active-underline"
                      className="absolute left-0 -bottom-[2px] h-[2px] w-full bg-teal-400 rounded"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <ThemeToggle/>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden absolute right-6 top-5 z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaTimes size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaBars size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden fixed right-0 top-[4.5rem] w-full h-[22rem] sm:px-[4rem] px-[3rem] pb-4 flex flex-col justify-center gap-[2.5rem] text-[16px] font-medium bg-gray-600 transition-all duration-500 ease-in-out
        ${isOpen ? 'opacity-95 translate-x-0' : 'opacity-0 translate-x-full overflow-hidden'}`}>
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            // onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `relative flex items-center gap-2 px-2 pb-1 transition-all
               ${isActive ? 'text-teal-400 font-semibold after:absolute after:w-[96%] after:h-[2px] after:bg-teal-400 after:-bottom-[2px]' : 'hover:text-teal-300'}`
            }
          >
            {icon}
            {label}
          </NavLink>
        ))}
        <ThemeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
