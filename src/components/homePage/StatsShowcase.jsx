import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Skills Tracked", value: 120 },
  { label: "PDFs Exported", value: 85 },
  { label: "Happy Users", value: 230 },
];

export default function StatsShowcase() {
  const { ref, inView } = useInView({
    triggerOnce: false,  // you can change to true if you want CountUp only once
    threshold: 0.3,
  });

  return (
    <section ref={ref} id="growth" className="py-32 px-4 max-w-6xl mx-auto text-center">
      <motion.h2
        className="sm:text-[3rem] text-[2.5rem] font-bold mb-16 text-center dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ amount: 0.3, once: false }}
      >
        Platform <span className="text-teal-600">Achievements</span>
      </motion.h2>

      <motion.p
        className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        Here's a quick snapshot of what our users are achieving with SkillSync. Every number represents real progress, growth, and satisfaction.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white dark:bg-gray-900 backdrop-blur-md border border-gray-200 dark:border-gray-600 px-6 py-[2.8rem] rounded-2xl shadow-lg transition hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: index * 0.2 }}
            viewport={{ amount: 0.3, once: false }}
          >
            <div className="text-4xl font-extrabold text-teal-600 dark:text-teal-400 drop-shadow-md">
              {inView ? <CountUp end={stat.value} duration={2} /> : 0}+
            </div>
            <div className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
