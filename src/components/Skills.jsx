import React, { useState, useEffect,useRef } from "react";
import { Code2, Database, Monitor, Server, GitBranch } from "lucide-react";
import { useDarkMode } from "../DarkModeContext";
import { motion, useInView } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const { darkMode } = useDarkMode();


  const skillCategories = {
    "Programming Languages": {
      icon: <Code2 className="w-3 h-3" />,
      color: "from-[#2c3e50] to-[#4ca1af]",
      skills: [
        { name: "Java", level: 75, icon: <FaJava className="text-orange-500" /> },
        { name: "Python", level: 45, icon: <FaPython className="text-yellow-400" /> },
        { name: "JavaScript", level: 90, icon: <FaJs className="text-yellow-300" /> },
        { name: "TypeScript", level: 80, icon: <SiTypescript className="text-blue-400" /> },
      ],
    },
    Frontend: {
      icon: <Monitor className="w-3 h-3" />,
      color: "from-[#1f4037] to-[#99f2c8]",
      skills: [
        { name: "React", level: 85, icon: <FaReact className="text-cyan-300" /> },
        { name: "Next.js", level: 80, icon: <SiNextdotjs className="text-white" /> },
        { name: "HTML/CSS", level: 90, icon: <FaHtml5 className="text-orange-400" /> },
      ],
    },
    Backend: {
      icon: <Server className="w-3 h-3" />,
      color: "from-[#0f2027] to-[#203a43]",
      skills: [
        { name: "Node.js", level: 70, icon: <FaNodeJs className="text-green-400" /> },
        { name: "Express.js", level: 75, icon: <SiExpress className="text-gray-400" /> },
      ],
    },
    Database: {
      icon: <Database className="w-3 h-3" />,
      color: "from-[#42275a] to-[#734b6d]",
      skills: [
        { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", level: 75, icon: <SiMysql className="text-blue-600" /> },
        { name: "Firebase", level: 70, icon: <SiFirebase className="text-yellow-400" /> },
      ],
    },
    Tools: {
      icon: <GitBranch className="w-3 h-3" />,
      color: "from-[#232526] to-[#414345]",
      skills: [
        { name: "Git/GitHub", level: 80, icon: <FaGithub className="text-gray-300" /> },
        { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Bootstrap", level: 75, icon: <FaBootstrap className="text-purple-500" /> },
        { name: "Figma", level: 70, icon: <SiFigma className="text-pink-500" /> },
      ],
    },
  };

  const categories = ["all", ...Object.keys(skillCategories)];
 
  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return Object.entries(skillCategories);
    }
    return Object.entries(skillCategories).filter(
      ([category]) => category === activeCategory
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const allSkills = Object.entries(skillCategories).flatMap(
        ([catName, catData]) =>
          catData.skills.map((skill, index) => `${catName}-${index}`)
      );
      setAnimatedSkills(new Set(allSkills));
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className={`py-12 px-4 sm:px-6 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse-grow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 8s linear infinite;
        }
        .animate-pulse-grow {
          animation: pulse-grow 3s ease-in-out infinite;
        }
        .animate-wiggle {
          animation: wiggle 4s ease-in-out infinite;
        }
        .hover-float:hover {
          animation: bounce-gentle 1s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header - Compact */}
        <div className="text-center mb-8">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 ${
              darkMode ? "text-white" : "text-[#2C3E50]"
            }`}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
           
          <p className={`max-w-2xl mx-auto text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Technologies and tools I use to build modern applications
          </p>
          
        </div>

        {/* Category Filter - Compact */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-[#2c3e50] text-white shadow-md"
                  : darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {category === "all" ? "All" : category}
            </button>
          ))}
        </div>

        {/* Skills Grid - Round Cards */}
        <div className="space-y-6">
          {getFilteredSkills().map(([categoryName, categoryData], categoryIndex) => (
            <div
              key={categoryName}
              className={`rounded-2xl p-4 transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 "
                  : "bg-white shadow-sm hover:shadow-md"
              }`}
            >
              {/* Category Header - Compact */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`p-1.5 rounded-full bg-gradient-to-r ${categoryData.color} text-white`}>
                  {categoryData.icon}
                </div>
                <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {categoryName}
                </h3>
              </div>

              {/* Skills Grid - Round Cards with Animations */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-2">
                {categoryData.skills.map((skill, skillIndex) => {
                  // Different animation for each skill
                  const animations = ['animate-bounce-gentle', 'animate-rotate-slow', 'animate-pulse-grow', 'animate-wiggle'];
                  const currentAnimation = animations[skillIndex % animations.length];
                  
                  return (
                    <div
                      key={skill.name}
                      className={`group relative rounded-full w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl cursor-pointer ${
                        darkMode
                          ? "bg-gradient-to-br from-gray-700 to-gray-600 border-2 border-gray-600/50 hover:border-gray-400"
                          : "bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-gray-400 shadow-sm hover:shadow-lg"
                      }`}
                    >
                      {/* Gradient background overlay */}
                      <div 
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${categoryData.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} 
                      />
                      
                      {/* Skill Icon with Animation */}
                      <div className={`text-2xl sm:text-3xl mb-1 transition-all duration-300 group-hover:${currentAnimation} hover-float relative z-10`}>
                        {skill.icon}
                      </div>
                      
                      {/* Skill Name */}
                      <div className="text-center relative z-10">
                        <h4 className={`font-medium text-xs sm:text-sm leading-tight ${darkMode ? "text-gray-200 group-hover:text-white" : "text-gray-700 group-hover:text-gray-900"}`}>
                          {skill.name}
                        </h4>
                      </div>

                      {/* Floating particles effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${categoryData.color} rounded-full animate-ping`}
                            style={{
                              top: `${20 + i * 20}%`,
                              left: `${20 + i * 30}%`,
                              animationDelay: `${i * 0.2}s`,
                              animationDuration: '2s'
                            }}
                          />
                        ))}
                      </div>

                      {/* Bottom glow effect */}
                      <div 
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gradient-to-r ${categoryData.color} rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
