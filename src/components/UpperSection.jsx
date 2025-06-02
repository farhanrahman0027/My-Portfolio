import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaCode,
  FaRocket,
  FaEnvelope,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import profile from "../assets/profile-pic.jpeg";
import resume from "/public/farhan_resume_2025.pdf"; // Adjust the path as necessary
import { useDarkMode } from "../DarkModeContext";

const UpperSection = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Subtle parallax effect
  const y = useTransform(scrollY, [0, 500], [0, -30]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  const dynamicTexts = [
    "Full Stack Developer",
    "React Specialist",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Innovator",
  ];

  // Professional typewriter effect
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
      }, 2500);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex]);

  // Cursor animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Subtle mouse tracking
  const handleMouseMove = useCallback((e) => {
    if (window.innerWidth < 1024) return; // Disable on mobile/tablet

    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    }
  }, []);

  useEffect(() => {
    controls.start("visible");
    const container = containerRef.current;
    if (container && window.innerWidth >= 1024) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [controls, handleMouseMove]);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Professional animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const profileVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const name = "Farhanur Rahman";

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className={`min-h-screen flex items-center relative overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-white via-gray-50 to-blue-50"
      }`}
    >
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orbs */}
        <motion.div
          className={`absolute top-1/4 left-1/4 w-72 h-72 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-20 ${
            darkMode
              ? "bg-gradient-to-r from-blue-600 to-purple-600"
              : "bg-gradient-to-r from-blue-400 to-purple-400"
          }`}
          animate={{
            scale: [1, 1.1, 1],
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-80 lg:h-80 rounded-full blur-3xl opacity-15 ${
            darkMode
              ? "bg-gradient-to-r from-purple-600 to-pink-600"
              : "bg-gradient-to-r from-purple-400 to-pink-400"
          }`}
          animate={{
            scale: [1, 0.9, 1],
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Minimal floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              darkMode ? "bg-blue-400" : "bg-blue-600"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-6 lg:px-12 relative"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Profile Section */}
          <motion.div
            variants={profileVariants}
            className="w-full lg:w-2/5 relative order-2 lg:order-1"
          >
            <motion.div animate={floatingAnimation} className="relative">
              <motion.img
                src={profile}
                alt="Farhanur Rahman - Professional Headshot"
                className="rounded-2xl w-72 h-72 lg:w-80 lg:h-80 object-cover mx-auto shadow-2xl"
                style={{
                  boxShadow: darkMode
                    ? "0 25px 50px rgba(59, 130, 246, 0.3)"
                    : "0 25px 50px rgba(0, 0, 0, 0.15)",
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              />

              {/* Professional accent ring */}
              <motion.div
                className={`absolute inset-0 rounded-2xl border-2 opacity-50 ${
                  darkMode ? "border-blue-400" : "border-blue-600"
                }`}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Floating icons */}
              <motion.div
                className="absolute -top-4 -right-4 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaCode size={16} />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                animate={{
                  y: [5, -5, 5],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <FaRocket size={16} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-3/5 text-center lg:text-left order-1 lg:order-2">
            {/* Greeting */}
            <motion.div variants={fadeInUp} className="mb-4">
              <span
                className={`text-lg font-medium ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className={`text-4xl lg:text-6xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>

            {/* Dynamic subtitle */}
            <motion.div
              variants={fadeInUp}
              className="text-2xl lg:text-3xl font-semibold mb-6 h-12 flex items-center justify-center lg:justify-start"
            >
              <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
                {typedText}
                <motion.span
                  animate={{ opacity: showCursor ? 1 : 0 }}
                  className="inline-block w-0.5 h-8 bg-blue-600 ml-1"
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className={`text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate about creating exceptional digital experiences through
              clean code, innovative design, and user-centered solutions. Let's
              build something amazing together.
            </motion.p>

            {/* Social Links & Resume */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              {/* Social Media Icons */}
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/farhanrahman0027",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/farhanur-rahman/",
                  label: "LinkedIn",
                },
                {
                  icon: FaEnvelope,
                  href: "mailto:your.email@example.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white"
                      : "bg-white text-gray-600 hover:bg-blue-600 hover:text-white shadow-md"
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}

              {/* Resume Button */}
              <motion.a
                href={resume}
                download="Farhan_Resume"
                className={`group flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white border border-gray-700"
                    : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white shadow-xl"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaFileAlt size={18} />
                </motion.div>
                <span className="font-medium text-sm whitespace-nowrap">
                  Resume
                </span>
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaDownload size={14} />
                </motion.div>
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleScroll("projects")}
              >
                View My Work
              </motion.button>

              <motion.button
                className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "border-2 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400"
                    : "border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                }`}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleScroll("contact")}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`text-2xl cursor-pointer ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
            onClick={() => handleScroll('about')}
          >
            <FaArrowDown />
          </motion.div>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default UpperSection;
