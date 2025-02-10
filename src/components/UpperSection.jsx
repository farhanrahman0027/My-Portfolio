import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile pic.jpeg";

const UpperSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Function to scroll to the selected section
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId); // Get the section by ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling effect
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-[#1A2238] text-[#E0E0E0]" : "bg-[#F4F6F7] text-[#2C3E50]"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="md:w-1/2">
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src={profile}
              alt="Professional Headshot"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl"
            />
          </div>

          {/* Intro Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Hi, I'm Farhanur Rahman
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl mb-8"
            >
              A passionate Full Stack Developer specializing in building
              exceptional digital experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
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
          </div>
        </div>

        {/* Navigation Buttons for Scrolling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {["About", "Projects", "Experience","Skills", "Contact"].map((item, index) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full ${
                  darkMode
                    ? "bg-[#20B2AA] hover:bg-opacity-80"
                    : "bg-[#34495E] text-white hover:bg-opacity-90"
                } transition-all cursor-pointer`}
                onClick={() => handleScroll(item.toLowerCase())} // Calls handleScroll function
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#20B2AA] to-[#FFA07A]" />
    </div>
  );
};

export default UpperSection;
