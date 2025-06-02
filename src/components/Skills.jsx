import React, { useState, useEffect } from "react";
import { Code2, Database, Monitor, Server, GitBranch } from "lucide-react";
import { useDarkMode } from "../DarkModeContext"; // Assuming you have a context for dark mode

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const { darkMode } = useDarkMode();

  const skillCategories = {
    "Programming Languages": {
      icon: <Code2 className="w-4 h-4" />,
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Java", level: 75 },
        { name: "C", level: 60 },
        { name: "Python", level: 45 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
      ]
    },
    "Frontend": {
      icon: <Monitor className="w-4 h-4" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
      ]
    },
    "Backend": {
      icon: <Server className="w-4 h-4" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 75 },
      ]
    },
    "Database": {
      icon: <Database className="w-4 h-4" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 75 },
        { name: "Firebase", level: 70 },
      ]
    },
    "Tools": {
      icon: <GitBranch className="w-4 h-4" />,
      color: "from-gray-500 to-gray-700",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap", level: 75 },
      ]
    }
  };

  const categories = ["all", ...Object.keys(skillCategories)];

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return Object.entries(skillCategories);
    }
    return Object.entries(skillCategories).filter(([category]) => category === activeCategory);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const allSkills = Object.entries(skillCategories).flatMap(([catName, catData]) => 
        catData.skills.map((skill, index) => `${catName}-${index}`)
      );
      setAnimatedSkills(new Set(allSkills));
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section className={`py-16 px-6 transition-colors duration-300 ${
      darkMode 
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100" 
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slide-up transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Technical <span className="text-blue-600 ">Skills</span>
          </h2>
          <p className={`max-w-2xl mx-auto animate-slide-up-delay transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technologies and tools I use to build modern applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {category === "all" ? "All" : category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {getFilteredSkills().map(([categoryName, categoryData], categoryIndex) => (
            <div 
              key={categoryName} 
              className={`rounded-xl p-6 transition-all duration-300 animate-fade-in-up ${
                darkMode 
                  ? 'bg-gray-800 shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-gray-900/30 border border-gray-700' 
                  : 'bg-white shadow-sm hover:shadow-md'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryData.color} text-white transform hover:scale-110 transition-transform duration-300`}>
                  {categoryData.icon}
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {categoryName}
                </h3>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryData.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up ${
                      darkMode 
                        ? 'hover:bg-gray-700 border border-gray-600 hover:border-gray-500' 
                        : 'hover:bg-gray-50'
                    }`}
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-medium transition-colors duration-300 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm transition-colors duration-300 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full rounded-full h-2 overflow-hidden transition-colors duration-300 ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div
                          className={`h-2 bg-gradient-to-r ${categoryData.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: animatedSkills.has(`${categoryName}-${skillIndex}`) ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;