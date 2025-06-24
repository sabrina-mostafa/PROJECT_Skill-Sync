import React from 'react';
import SkillForm from '../features/skills/SkillForm';
import SkillList from '../features/skills/SkillList';
import { motion } from 'framer-motion';
import Hero from '../components/homePage/Hero';
import Footer from '../components/Footer';
import HomeBtn from '../components/HomeBtn';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 60 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="space-y-10 mb-[8rem]"
    >
      <div className="space-y-6 px-6 md:px-[6rem] mb-[8rem] min-h-[100vh]">
        <SkillForm />
        <SkillList />
      </div>
      <HomeBtn/>
      <Footer/>
    </motion.div>
  );
};

export default Dashboard;
