import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "SkillSync helped me structure my skills clearly and land freelance gigs more easily!",
  },
  {
    name: "Liam Patel",
    role: "CS Graduate",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    quote: "It’s not just a tracker—it’s my personal growth journal. Beautiful and super helpful!",
  },
  {
    name: "Amina Rahman",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    quote: "The PDF export and timeline features made my portfolio stand out during my interviews.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-transparent dark:bg-gray-800" id="testimonials">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="sm:text-[3rem] text-[2.5rem] pb-[1rem] font-bold dark:text-white text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          User <span className="text-teal-600">Insights</span>
        </motion.h2>


        <div className="flex flex-col items-center ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="relative group perspective flex justify-center" // Center each card horizontally in 1-col
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="relative w-[90%] sm:w-[80%] md:w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180 group">
                  {/* Front */}
                  <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 pt-[2.5rem] text-center transform backface-hidden border border-gray-200 dark:border-gray-700">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-teal-500"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.name}</h3>
                    <p className="text-sm text-teal-500 mb-2">{t.role}</p>
                    <p className="text-gray-700 dark:text-gray-300 italic">"Hover to read more"</p>
                  </div>

                  {/* Back */}
                  <div className="absolute flex justify-center items-center inset-0 bg-teal-500 text-white rounded-2xl shadow-xl p-6 transform rotate-y-180 backface-hidden">
                    <p className="text-lg font-[500] text-center leading-relaxed dark:text-black">{t.quote}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
