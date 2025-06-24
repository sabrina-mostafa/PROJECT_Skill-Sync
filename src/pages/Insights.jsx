import React from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
  ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { FaChartPie } from 'react-icons/fa';
import ExportPDF from '../components/ExportPDF';
import ProfileForm from '../features/profile/ProfileForm';
import ProfileModal from '../components/ProfileModal';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import HomeBtn from '../components/HomeBtn';



const COLORS = ['#14b8a6', '#0f766e', '#5eead4', '#0ea5e9', '#38bdf8'];

const Insights = () => {
  const skills = useSelector((state) => state.skills.skills);
  const projects = useSelector((state) => state.projects.projects);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Skill count by category
  const categoryCount = {};
  skills.forEach((skill) => {
    categoryCount[skill.category] = (categoryCount[skill.category] || 0) + 1;
  });
  const categoryData = Object.entries(categoryCount).map(([cat, count]) => ({
    category: cat,
    count,
  }));

  // Skill usage in projects
  const skillUseCount = {};
  projects.forEach((project) => {
    project.skills.forEach((skillId) => {
      skillUseCount[skillId] = (skillUseCount[skillId] || 0) + 1;
    });
  });

  const pieData = skills
    .filter((s) => skillUseCount[s.id])
    .map((s) => ({
      name: s.title,
      value: skillUseCount[s.id],
    }));

  // Projects vs Skills count data
  const comparisonData = [
    { name: 'Projects', value: projects.length },
    { name: 'Skills', value: skills.length },
  ];

  const projectsLessThanSkills = projects.length < skills.length;



  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="space-y-10 mb-[8rem]"
    >
      <div className="space-y-10 px-6 md:px-[6rem] mb-[8rem] min-h-[100vh]">
        <h2 className="text-2xl pb-[2rem] font-bold text-gray-800 dark:text-[white] mb-4 flex items-center gap-2">
          <FaChartPie className="text-teal-600" />
          Insights & Analytics
        </h2>

        <div className="grid md:grid-cols-2 gap-12 xl:gap-[6rem] xl:px-[3rem] justify-items-center mb-[4rem]">
          {/* Skills by Category (Bar) */}
          <div className="bg-white dark:bg-gray-300 p-4 rounded shadow w-[100%]">
            <h3 className="text-lg font-semibold mb-2">Skills by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#14b8a6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Skill Usage in Projects (Pie) */}
          <div className="bg-white dark:bg-gray-300 p-4 rounded shadow w-[100%]">
            <h3 className="text-lg font-semibold mb-2">Skill Usage in Projects</h3>
            {pieData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {pieData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-sm text-gray-500">No skill usage data yet.</p>
            )}
          </div>

          {/* Projects vs Skills (Radar or Line Chart) */}
          <div className="bg-white dark:bg-gray-300 p-4 rounded shadow md:col-span-2 md:w-[80%] w-[100%]">
            <h3 className="text-lg font-semibold mb-2">Projects vs Skills</h3>

            {/* Optional warning */}
            {projectsLessThanSkills && (
              <p className="text-red-600 text-sm mb-2 font-medium">
                ⚠️ You have more skills than projects. Try applying more skills in real projects!
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Line Chart */}
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={comparisonData}>
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>

              {/* Radar Chart */}
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart outerRadius={90} data={comparisonData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={30} domain={[0, Math.max(projects.length, skills.length)]} />
                  <Radar name="Metrics" dataKey="value" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>


        <div>
          <button
            onClick={() => setIsProfileOpen(true)}
            className="bg-teal-600 text-white cursor-pointer px-4 py-2 rounded hover:bg-teal-700"
          >
            Download Report
          </button>

          <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
        </div>

      </div>
      <HomeBtn/>
      <Footer/>
    </motion.div>
  );
};

export default Insights;
