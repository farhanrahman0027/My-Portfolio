import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaRocket,
  FaEnvelope,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile-pic.jpeg";
import resume from "/public/farhan_resume_2025.pdf"; 
import { useDarkMode } from "../DarkModeContext";

const UpperSection = () => {
  const { darkMode } = useDarkMode();
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const dynamicTexts = [
    "Full Stack Developer",
    "React Specialist",
    "UI/UX Designer",
    "Problem Solver",
  ];

  // Simple typewriter effect
  useEffect(() => {
    const currentText = dynamicTexts[currentTextIndex];
    let timeout;

    if (typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText("");
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex]);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Simple animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="home" className="relative">
      <div
      className={`min-h-screen flex items-center relative py-20 transition-colors duration-300 ${
        darkMode 
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white" 
          : "bg-gradient-to-br from-gray-50 to-white text-gray-900"
      }`}
    >
      {/* Simple background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 ${
            darkMode
              ? "bg-blue-500"
              : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 ${
            darkMode
              ? "bg-purple-500"
              : "bg-purple-400"
          }`}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 lg:px-12 relative"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Profile Section */}
          <motion.div
            variants={fadeInUp}
            className="w-full lg:w-2/5 order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src={profile}
                alt="Farhanur Rahman"
                className="rounded-full w-72 h-72 lg:w-80 lg:h-80 object-cover mx-auto shadow-xl"
              />
              
              {/* Simple floating icons */}
              <div className="absolute -top-4 -right-4 p-3 rounded-full bg-blue-600 text-white shadow-lg">
                <FaCode size={16} />
              </div>
              <div className="absolute -bottom-4 -left-4 p-3 rounded-full bg-purple-600 text-white shadow-lg">
                <FaRocket size={16} />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-3/5 text-center lg:text-left order-1 lg:order-2">
            
            {/* Greeting */}
            <motion.div variants={fadeInUp} className="mb-4">
              <span className={`text-xl font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Farhanur Rahman
              </span>
            </motion.h1>

            {/* Dynamic subtitle */}
            <motion.div
              variants={fadeInUp}
              className="text-xl lg:text-2xl font-medium mb-6 h-8 flex items-center justify-center lg:justify-start"
            >
              <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {typedText}
                <span className="inline-block w-0.5 h-6 bg-blue-600 ml-1 animate-pulse" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className={`text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate about creating exceptional digital experiences through
              clean code and innovative design. Let's build something amazing together.
            </motion.p>

            {/* Social Links & Resume */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              {/* Social Icons */}
              {[
                { icon: FaGithub, href: "https://github.com/farhanrahman0027", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/farhanur-rahman/", label: "LinkedIn" },
                { icon: FaEnvelope, href: "mailto:your.email@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className={`p-3 rounded-full transition-all duration-200 hover:scale-105 ${
                    darkMode
                      ? "bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white"
                      : "bg-white text-gray-600 hover:bg-blue-600 hover:text-white shadow-md"
                  }`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}

              {/* Resume Button */}
              <a
                href={resume}
                download="Farhan_Resume"
                className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-200 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white border border-gray-700"
                    : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white shadow-md"
                }`}
              >
                <FaFileAlt size={16} />
                <span className="font-medium text-sm">Resume</span>
                <FaDownload size={12} />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                onClick={() => handleScroll("projects")}
              >
                View My Work
              </button>

              <button
                className={`px-8 py-3 font-medium rounded-lg transition-all duration-200 hover:scale-105 ${
                  darkMode
                    ? "border-2 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400"
                    : "border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                }`}
                onClick={() => handleScroll("contact")}
              >
                Get In Touch
              </button>
            </motion.div>
            
          </div>
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default UpperSection;