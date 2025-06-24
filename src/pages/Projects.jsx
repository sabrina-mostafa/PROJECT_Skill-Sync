import React from 'react';
import ProjectForm from '../features/projects/ProjectForm';
import ProjectList from '../features/projects/ProjectList';
import ExportPDF from '../components/ExportPDF';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import HomeBtn from '../components/HomeBtn';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="space-y-10 mb-[8rem]"
    >
      <div className="space-y-6 px-6 md:px-[6rem] mb-[8rem] min-h-[100vh]">
        <ProjectForm />
        <ProjectList />
      </div>
      <HomeBtn/>
      <Footer/>
    </motion.div>
  );
};

export default Projects;
