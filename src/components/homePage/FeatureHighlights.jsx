import { motion } from "framer-motion";
import {
  ChartBarIcon,
  DocumentDuplicateIcon,
  EyeIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Smart Skill Rating",
    description:
      "Rate your skills with confidence using our intuitive rating system that helps you visualize your strengths.",
    icon: <StarIcon className="w-10 h-10 text-teal-500 group-hover:scale-120 transition-transform duration-300" />,
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track your growth with real-time analytics and visual charts that reveal your learning trends.",
    icon: <ChartBarIcon className="w-10 h-10 text-blue-500 group-hover:scale-120 transition-transform duration-300" />,
  },
  {
    title: "PDF Export",
    description:
      "Generate beautifully designed resumes and skill reports with one-click PDF exports.",
    icon: <DocumentDuplicateIcon className="w-10 h-10 text-purple-500 group-hover:scale-120 transition-transform duration-300" />,
  },
  {
    title: "Timeline View",
    description:
      "Visualize your project history in an interactive timeline that highlights key milestones.",
    icon: <EyeIcon className="w-10 h-10 text-rose-500 group-hover:scale-120 transition-transform duration-300" />,
  },
];

export default function FeatureHighlights() {
  return (
    <section
      id="features"
      className="py-24 bg-transparent dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="sm:text-[3rem] text-[2.5rem] dark:text-white font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Feature <span className="text-teal-600">Highlights</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 overflow-x-hidden sm:p-[3rem] p-[1rem]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex relative items-center gap-4 mb-4">
                <div className="shrink-0">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-[1rem] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
