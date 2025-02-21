import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";

const About = () => {
  const { darkMode } = useDarkMode(); // Use the dark mode state

  return (
    <section
      id="about"
      className={`min-h-screen ${darkMode ? "bg-[#1A2238] text-[#E0E0E0]" : "bg-[#F4F6F7] text-[#2C3E50]"}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 py-20"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-lg  md:text-left max-w-4xl mx-auto text-gray-600 mb-12"
      >
        I'm a skilled software developer with a passion for creating innovative
        and user-friendly applications. With a strong background in computer
        science and a deep understanding of programming languages and
        frameworks, I'm able to develop high-quality software that meets the
        needs of users. I'm also experienced in working in a team environment
        and have a proven track record of delivering projects on time and within
        budget. I'm excited to bring my skills and experience to your team.
      </motion.p>
    </section>
  );
};

export default About;
