import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Insights from './pages/Insights';
import 'react-vertical-timeline-component/style.min.css';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from "./components/homePage/Hero";
import AboutSection from "./components/homePage/AboutSection";
import FeatureHighlights from "./components/homePage/FeatureHighlights";
import DemoShowcase from "./components/homePage/DemoShowcase";
import TimelineSection from "./components/homePage/TimelineSection.jsx";
import CallToAction from "./components/homePage/CallToAction";
import TestimonialsSection from "./components/homePage/TestimonialsSection";
import StatsShowcase from "./components/homePage/StatsShowcase";
import Footer from "./components/Footer.jsx";
import { useEffect } from "react";
import FloatingSidebar from "./components/homePage/FloatingSidebar.jsx";



function App() {
  if (typeof global === 'undefined') {
    window.global = window;
  }
  
  const location = useLocation();
  const { pathname } = useLocation();


   useEffect(() => {
    if(pathname !== "/") {
       window.scrollTo({ top: 0, behavior: "auto" }); 
    }
  }, [pathname]);


  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="bg-gray-900 text-black shadow relative z-50">
        <Navbar/>
      </div>

      <div className="home-page">
        <Routes>
          <Route path="/" element={
              <div>
                <Hero/>
                <AboutSection/>
                <FeatureHighlights/>
                <DemoShowcase/>
                <StatsShowcase/>
                <TimelineSection/>
                <TestimonialsSection/>
                <CallToAction/>
                <Footer/>
                <FloatingSidebar/>
              </div>
            } />
        </Routes>
      </div>

      <main className="pt-[3rem] mt-[4.6rem] overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/dashboard" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.7 }}
              >
                <Dashboard />
              </motion.div>
            } />
            <Route path="/projects" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            } />
            <Route path="/insights" element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Insights />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>

    </div>
  );
}

export default App;
