import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { useDarkMode } from "../DarkModeContext";

const educationDetails = [
  {
    id: 1,
    degree: "B.Tech in Computer Science",
    institution: "Maulana Azad National Urdu University",
    location: "Hyderabad, Telangana",
    duration: "2021 - 2025",
    highlights: [
      "CGPA: 8.4 (Till 6th Semester)",
      "Studied core subjects like Data Structures, DBMS, Operating Systems, CN, AI & ML.",
      "Actively participated in coding competitions and open source contributions.",
    ],
  },
  {
    id: 2,
    degree: "Intermediate (PCM)",
    institution: "Al Irfan Secondary School",
    location: "",
    duration: "Completed in 2020",
    highlights: [
      "Secured 77.8% in Physics, Chemistry, and Mathematics stream.",
      "Built a strong foundation in problem-solving and logical thinking.",
    ],
  },
];

const Education = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      id="education"
      className={`px-4 sm:px-6 md:px-8 lg:px-12 py-16 w-full ${
        darkMode ? "bg-[#1A2238] text-[#E0E0E0]" : "bg-[#F4F6F7] text-[#2C3E50]"
      }`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Education
      </motion.h2>

      <div className="space-y-10 max-w-6xl mx-auto">
        {educationDetails.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`shadow-md sm:shadow-lg p-6 sm:p-8 rounded-xl flex flex-col md:flex-row items-start gap-6 transition-all ${
              darkMode
                ? "bg-[#27374D] text-[#E0E0E0]"
                : "bg-white text-[#2C3E50]"
            }`}
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-green-600 text-white rounded-full text-2xl sm:text-3xl">
              <FaGraduationCap />
            </div>

            {/* Education Details */}
            <div className="flex-grow">
              <h3 className="text-xl sm:text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-blue-400 mt-1">
                {edu.institution}
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-400 mt-1">
                {edu.location} | {edu.duration}
              </p>

              <ul
                className={`mt-3 space-y-2 list-disc list-inside transition-all ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {edu.highlights.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="text-sm sm:text-base"
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

export default Education;
