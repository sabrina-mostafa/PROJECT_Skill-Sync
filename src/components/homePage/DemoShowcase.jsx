import { motion } from "framer-motion";

const highlights = [
  "Interactive skill rating with real-time feedback",
  "Seamless PDF export with resume-like formatting",
  "Timeline view to showcase project growth",
  "Fully responsive and visually polished UI",
];

export default function DemoShowcase() {
  return (
    <section
      id="demo"
      className="py-24 relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Floating Blobs */}
      <div className="absolute w-[300px] sm:w-[400px] h-[310px] bg-blue-400/30 rounded-full blur-3xl top-10 left-[-100px]"></div>
      <div className="absolute w-[250px] sm:w-[340px] h-[270px] bg-teal-400/30 rounded-full blur-2xl bottom-10 right-[-100px]"></div>
      
      <div className="container mx-auto px-4 max-w-7xl lg:w-[100%] w-[95%]">
        <motion.h2
          className="sm:text-[3rem] text-[2.5rem] pb-[1.5rem] dark:text-white font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          SkillSync <span className="text-teal-600">Spotlight</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video Section */}
          <motion.div
            className="w-full sm:w-[92%] lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="SkillSync Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          {/* Highlights Section */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              What You'll See
            </h3>
            <ul className="space-y-4">
              {highlights.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <span className="text-teal-500 text-xl">✔</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
