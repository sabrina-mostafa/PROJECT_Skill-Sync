import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import heroVideo from '../../assets/Videos/heroVideo.mp4'; // Add a background looping video if desired
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";


const Hero = () => {
  return (
    <div className='' id='hero'>
      <section className="relative w-full h-[65vh] sm:h-[75vh] mt-[4.53rem] flex  flex-col items-center justify-center overflow-hidden">
      {/* Optional Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="relative z-10 text-center px-4 max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-shadow-[black] text-shadow-[white] text-shadow-xs dark:text-white mb-8">
            <TypeAnimation
              sequence={[
                'Track your skills.',
                2000,
                'Showcase your projects.',
                2000,
                'Build your career.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </motion.div>

        <motion.p
          className="mt-4 sm:text-[18px] text-[16px] font-[500] text-gray-900 dark:text-shadow-[black] text-shadow-[white] text-shadow-xs dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span className='sm:text-[20px] text-[18px] font-[700] text-teal-600'>“SkillSync – Your Smart Skill Tracker”</span>
          <br />
          SkillSync helps you stay aligned with your goals by tracking your tech journey with style.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className='w-[100%] flex justify-center items-center'>
            <Link
              to="/dashboard"
              className=""
            >
              <div className='flex justify-center items-center gap-[10px] bg-teal-600 hover:bg-teal-700 text-gray-900 dark:text-white font-[700] text-[18px] py-4 rounded shadow transition w-[12rem]'>
                  Get Started
                  <HiMiniArrowTopRightOnSquare className='w-[1.5rem] h-[1.5rem]' />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
        </section>

    </div>
  );
};

export default Hero;
