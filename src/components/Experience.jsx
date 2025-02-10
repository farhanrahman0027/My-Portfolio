import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Web Developer Intern",
    company: "MeitY, Govt. of India",
    location: "Hyderabad, MANUU",
    duration: "Mar 2023 - Aug 2023",
    description: [
      "Utilized expertise in React.js, HTML5, CSS3, and JavaScript to craft dynamic, user-friendly interfaces for web applications.",
      "Designed responsive and visually appealing pages using Bootstrap, Material-UI, and SASS, ensuring cross-device and cross-browser compatibility.",
      "Refined frontend development skills and delivered innovative, impactful solutions that significantly enhanced user experience.",
    ],
  },
  {
    id: 2,
    role: "Software Development Intern",
    company: "XYZ Solutions",
    location: "Remote",
    duration: "Sep 2023 - Jan 2024",
    description: [
      "Developed interactive web applications using Next.js and Tailwind CSS to improve user engagement by 30%.",
      "Optimized performance of web pages, reducing load time by 40% through efficient coding and API integration.",
      "Collaborated with UI/UX designers to create a seamless and visually appealing user experience.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-12 text-[#2C3E50]"
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg flex flex-col md:flex-row items-start gap-6"
          >
            {/* Icon */}
            <div className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-full text-3xl">
              <FaBriefcase />
            </div>

            {/* Experience Details */}
            <div>
              <h3 className="text-2xl font-semibold text-[#2C3E50]">{exp.role}</h3>
              <p className="text-lg text-gray-600 dark:text-blue-400">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.location} | {exp.duration}</p>
              <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-400">
                {exp.description.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
