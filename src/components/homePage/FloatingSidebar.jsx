import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { GrOverview } from "react-icons/gr";
import {
  MdOutlineFeaturedPlayList,
  MdOutlineTimeline,
  MdOutlineReviews,
} from "react-icons/md";
import { GoVideo, GoEyeClosed } from "react-icons/go";
import { GiProgression } from "react-icons/gi";
import { AiOutlineBars } from "react-icons/ai";

// Navigation Items
const navItems = [
  { to: "about", label: "Overview", icon: <GrOverview /> },
  { to: "features", label: "Features", icon: <MdOutlineFeaturedPlayList /> },
  { to: "demo", label: "Spotlight", icon: <GoVideo /> },
  { to: "growth", label: "Growth", icon: <GiProgression /> },
  { to: "timeline", label: "Timeline", icon: <MdOutlineTimeline /> },
  { to: "testimonials", label: "Reviews", icon: <MdOutlineReviews /> },
];

// Variants
const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1, // Bottom to top
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: 1, // Top to bottom
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const FloatingSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-[1.2rem] z-50 flex flex-col items-end">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul
            key="menu"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="mb-4 flex flex-col gap-3"
          >
            {[...navItems].reverse().map(({ to, label, icon }) => (
              <motion.li
                key={to}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg shadow-md shadow-gray-600 dark:shadow-gray-500 flex items-center gap-2 cursor-pointer"
              >
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                //   onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-teal-500">{icon}</span>
                    <span>{label}</span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Toggle Button at the bottom */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-xl flex items-center justify-center"
        whileHover={{
          scale: 1.2,
          boxShadow: "0 0 15px rgba(13, 237, 173, 0.6)",
        }}
        animate={{
          rotate: isOpen ? 180 : 0,
          transition: { type: "spring", stiffness: 200 },
        }}
      >
        <motion.span
          key={isOpen ? "close" : "open"}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.1 }}
        >
          {isOpen ? (
            <GoEyeClosed className="text-[1.3rem]" />
          ) : (
            <AiOutlineBars className="text-[1.3rem]" />
          )}
        </motion.span>
      </motion.button>
    </div>
  );
};

export default FloatingSidebar;
