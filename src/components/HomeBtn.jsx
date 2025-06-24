import React from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomeBtn = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <motion.button
      onClick={goToHome}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-9 right-5 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-xl z-50"
      whileHover={{
        scale: 1.2,
        boxShadow: "0 0 15px rgba(13, 237, 173, 0.6)",
      }}
    >
    <FaHome className="text-[19px]"/>
    </motion.button>
  );
};

export default HomeBtn;
