import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile-pic.jpeg";
import { useDarkMode } from "../DarkModeContext"; // Import the useDarkMode hook

const UpperSection = () => {
  const { darkMode, setDarkMode } = useDarkMode(); // Access dark mode state and setter function

  // Function to scroll to the selected section
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId); // Get the section by ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling effect
    }
  };
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div
      className={`min-h-screen flex items-center ${
        darkMode ? "bg-[#1A2238] text-[#E0E0E0]" : "bg-[#F4F6F7] text-[#2C3E50]"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-16"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <motion.div variants={childVariants} className="md:w-1/3">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={profile}
              alt="Professional Headshot"
              className="rounded-full w-64 h-68 object-cover mx-auto shadow-xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={childVariants}
            className="md:w-2/3 px-4 text-center md:text-left"
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 italic">
              Hi, I'm Farhanur Rahman
            </motion.h2>
            <motion.p className="text-lg italic text-[#20B2AA] mb-4">
              Turning Vision into Interactive Reality with Modern Web Tech.
            </motion.p>
            <motion.p className="text-xl mb-8">
              Full Stack Developer blending performance with precision.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={childVariants}
              className="flex gap-4 justify-center md:justify-start"
            >
              <a
                href="https://github.com/farhanrahman0027"
                className="text-3xl hover:text-[#20B2AA] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/farhanur-rahman/"
                className="text-3xl hover:text-[#20B2AA] transition-colors"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <motion.div variants={childVariants} className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {["About", "Projects", "Experience", "Skills", "Contact"].map(
              (item, index) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full ${
                    darkMode
                      ? "bg-[#20B2AA] hover:bg-opacity-80"
                      : "bg-[#34495E] text-white hover:bg-opacity-90"
                  } transition-all cursor-pointer`}
                  onClick={() => handleScroll(item.toLowerCase())}
                >
                  {item}
                </motion.button>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Line */}
      <div className="fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#20B2AA] to-[#FFA07A]" />
    </div>
  );
};

export default UpperSection;
