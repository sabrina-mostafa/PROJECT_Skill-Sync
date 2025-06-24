import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";



export default function CallToAction() {


  return (
    <section className="py-20 bg-transparent dark:bg-gradient-to-b dark:from-gray-800 dark:bg-gray-800">
      <div className="container mx-auto text-center w-[86%] mb-[8rem]">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Take Charge of Your Skills?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: false }}
        >
          Start tracking your progress and export your profile in seconds.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/dashboard">
            <button className="relative w-[11rem] inline-block cursor-pointer px-8 py-[1.2rem] text-white font-bold text-lg rounded-full bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-lg animate-pulse">
              Get Started
              <span className="absolute -inset-0.5 blur-xl opacity-75 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full z-[-1]"></span>
            </button>
          </Link>
        </motion.div>
      </div>

      
    </section>
  );
}
