import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
// Importing different icons
import { FaCode, FaRocket, FaRegLightbulb } from 'react-icons/fa';


const timelineData = [
  {
    date: 'Jan 2024',
    title: 'Started Full-Stack Journey',
    description:
      'Began learning backend technologies including Node.js, Express.js, and PostgreSQL.',
    iconColor: '#06b6d4',
    icon: <FaCode className="w-5 h-5" />,
  },
  {
    date: 'Apr 2024',
    title: 'Launched SkillSync MVP',
    description:
      'Built the first version of SkillSync to help users track and export their skills.',
    iconColor: '#8b5cf6',
    icon: <FaRocket className="w-5 h-5" />,
  },
  {
    date: 'Jun 2024',
    title: 'Added Timeline Feature',
    description:
      'Integrated an interactive timeline to show skill and project growth visually.',
    iconColor: '#f43f5e',
    icon: <FaRegLightbulb className="w-5 h-5" />,
  },
];

export default function TimelineSection() {
  const { theme } = useContext(ThemeContext);

  const modeTracker = theme === 'dark';

  return (
    <section
      id="timeline"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Floating Blobs */}
      <div className="absolute w-[300px] sm:w-[400px] h-[310px] bg-blue-400/30 rounded-full blur-3xl top-10 left-[-100px]"></div>
      <div className="absolute w-[250px] sm:w-[340px] h-[270px] bg-teal-400/30 rounded-full blur-2xl bottom-10 right-[-100px]"></div>

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="sm:text-[3rem] text-[2.5rem] dark:text-white font-bold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          Interactive <span className="text-teal-600">Timeline</span>
        </motion.h2>

        <VerticalTimeline>
          {timelineData.map((item, idx) => (
            <VerticalTimelineElement
              key={idx}
              date={item.date}
              dateClassName="text-sm font-semibold text-[black] dark:text-teal-500"
              contentStyle={{
                background: modeTracker ? '#11182799' : '#FFFFFFCC',
                color: modeTracker ? '#f9fafb' : '#1f2937',
                border: `1px solid ${modeTracker ? '#374151' : '#FFFFFF4D'}`,
                boxShadow: `0 4px 6px ${modeTracker ? '#374151' : '#0000001A'}`,
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${modeTracker ? '#374151' : 'white'}`,
              }}
              iconStyle={{ background: item.iconColor, color: '#fff' }}
              icon={item.icon}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
