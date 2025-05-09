import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiEjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiGit } from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { useDarkMode } from "../DarkModeContext";
const Skills = ({}) => {
  const { darkMode } = useDarkMode();
  const skills = [
    { name: "Java", icon: <FaJava className="text-blue-500" />, level: 75 },
    { name: "HTML", icon: <SiHtml5 className="text-orange-400" />, level: 90 },
    { name: "CSS", icon: <SiCss3 className="text-blue-400" />, level: 90 },
    {
      name: "JavaScript",
      icon: <TbBrandJavascript className="text-yellow-400" />,
      level: 90,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      level: 80,
    },
    { name: "React", icon: <SiReact className="text-blue-400" />, level: 85 },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" />, level: 80 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
      level: 80,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-500" />,
      level: 75,
    },
    {
      name: "Node.js",
      icon: <FaNode className="text-green-500" />,
      level: 70,
    },
    {
      name: "Express.js",
      icon: <SiEjs className="text-yellow-300" />,
      level: 75,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-orange-400" />,
      level: 70,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
      level: 75,
    },
    { name: "MySQL", icon: <SiMysql className="text-gray-600" />, level: 75 },
    { name: "Git", icon: <SiGit className="text-red-500" />, level: 80 },
    { name: "GitHub", icon: <FaGithub className="text-black" />, level: 80 },
    

    // { name: "Python", icon: <SiPython className="text-blue-500" />, level: 75 },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`container mx-auto px-6 py-16 ${
        darkMode ? "bg-[#1A2238] text-[#E0E0E0]" : "bg-[#F4F6F7] text-[#2C3E50]"
      }`}
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4 text-center mt-12"
      >
        Technical Expertise
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-4 rounded-lg shadow-md text-center ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex flex-col items-center mb-2">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                {skill.icon}
              </motion.div>
              <span
                className={`font-medium mt-2 ${
                  darkMode ? "text-white" : "text-[#2C3E50]"
                }`}
              >
                {skill.name}
              </span>
            </div>
            <div
              className={`w-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } rounded-full h-2 overflow-hidden`}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="bg-blue-600 rounded-full h-2"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
