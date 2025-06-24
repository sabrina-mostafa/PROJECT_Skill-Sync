import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// const stats = [
//   { label: "Skills Tracked", value: 256 },
//   { label: "Projects Created", value: 72 },
//   { label: "PDFs Exported", value: 43 },
// ];

const paragraphs = [
  {
    number: "01",
    title: "Why tracking skills matters",
    text: "In today’s fast-moving tech world, it’s easy to lose track of what you’ve learned and where you’re headed. Skill tracking helps you stay aware of your strengths, identify knowledge gaps, and make smarter decisions about what to learn next. It transforms your growth from random to intentional, keeping your learning focused and measurable.",
  },
  {
    number: "02",
    title: "How SkillSync helps you grow",
    text: "SkillSync gives you a clear, visual way to organize, rate, and reflect on your skills and projects. With features like confidence ratings, PDF export, and progress tracking, you can confidently showcase your growth, align with your goals, and stay motivated on your learning journey. It’s not just a tracker—it’s your personal career alignment assistant.",
  },
];

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative pt-[12rem] pb-[8rem] bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Floating Blobs */}
      <div className="absolute w-[300px] sm:w-[400px] h-[310px] bg-blue-400/30 rounded-full blur-3xl top-10 left-[-100px]"></div>
      <div className="absolute w-[250px] sm:w-[340px] h-[270px] bg-teal-400/30 rounded-full blur-2xl bottom-10 right-[-100px]"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="sm:text-[3rem] text-[2.5rem] font-bold mb-16 text-center dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ amount: 0.3 }}
        >
          Why <span className="text-teal-600">SkillSync</span>?
        </motion.h2>

        {/* Paragraph Cards */}
        <div className="space-y-20 relative z-10">
          {paragraphs.map((item, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg p-8 md:p-12 shadow-xl border border-white/30 dark:border-gray-700 transition-all duration-500 ${
                index % 2 === 0 ? "sm:ml-24" : "sm:mr-24"
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-extrabold text-teal-500">{item.number}</span>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-teal-400 to-transparent"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-700 dark:text-gray-300">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/90 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-6 rounded-2xl text-center shadow-lg transition hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: index * 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              <div className="text-4xl font-extrabold text-teal-600 dark:text-teal-400 drop-shadow-md">
                {inView ? <CountUp end={stat.value} duration={5} /> : 0}+
              </div>
              <div className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div> */}

      </div>
    </section>
  );
}
