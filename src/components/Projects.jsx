import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext"; // Import the hook

const Projects = () => {
  const { darkMode } = useDarkMode(); // Use the dark mode state

  const projects = [
    { title: "NextGen Edu", description: "An e-learning platform with interactive features." },
    { title: "BeyondChats", description: "A chatbot system with Firebase authentication." },
    { title: "Optimized Podcast App", description: "A podcast management system with enhanced learning features." },
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen ${darkMode ? "bg-[#1A2238] text-[#E0E0E0]" : "bg-[#F4F6F7] text-[#2C3E50]"}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 py-20"
      >
        Projects
      </motion.h2>
      <div className="grid px-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 rounded-lg shadow-lg bg-white dark:bg-[#1A2238] text-center"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
