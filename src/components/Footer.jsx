import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import skill from "../assets/images/logo.png";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Footer Section */}
      <motion.footer
        className="relative mb-[-5rem] bg-transparent dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-700 text-center text-sm py-10 border-y border-gray-400 dark:border-gray-500"
        initial={{ opacity: 0, y:20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-gray-600 dark:text-gray-400 flex flex-col items-center">
          {/* Logo */}
          <motion.div
            className="flex justify-center items-center gap-2 mb-2"
          >
            <motion.img
              src={skill}
              alt="logo"
              className="w-12 h-12 rounded-[1.25rem]"
              whileHover={{
                boxShadow: "0 0 15px rgba(13, 237, 173, 0.6)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-teal-500">Skill</span>Sync
            </h1>
          </motion.div>

          <p className="mb-3">
            &copy; {new Date().getFullYear()} SkillSync by Sabrina. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-lg">
            {[{
              icon: <FaGithub />,
              href: "https://github.com/sabrina-mostafa"
            }, {
              icon: <FaLinkedin />,
              href: "https://www.linkedin.com/in/sabrina-mostafa-389114207/"
            }, {
              icon: <FaEnvelope />,
              href: "mailto:sabrinamostafa9900@gmail.com"
            }].map(({ icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition"
                whileHover={{
                  scale: 1.4,
                  textShadow: "0px 0px 8px #14b8a6",
                }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-5 right-5 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-xl z-50"
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 15px rgba(13, 237, 173, 0.6)",
            }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Footer;
