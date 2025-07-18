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
      ],
    },
    Frontend: {
      icon: <Monitor className="w-4 h-4" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    Backend: {
      icon: <Server className="w-4 h-4" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 75 },
      ],
    },
    Database: {
      icon: <Database className="w-4 h-4" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 75 },
        { name: "Firebase", level: 70 },
      ],
    },
    Tools: {
      icon: <GitBranch className="w-4 h-4" />,
      color: "from-gray-500 to-gray-700",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap", level: 75 },
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
      className={`py-16 px-6 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slide-up transition-colors duration-300 ${
              darkMode ? "text-white" : "text-[#2C3E50]"
            }`}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p
            className={`max-w-2xl mx-auto animate-slide-up-delay transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
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
          {getFilteredSkills().map(
            ([categoryName, categoryData], categoryIndex) => (
              <div
                key={categoryName}
                className={`rounded-xl p-6 transition-all duration-300 animate-fade-in-up ${
                  darkMode
                    ? "bg-gray-800 shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-gray-900/30 border border-gray-700"
                    : "bg-white shadow-sm hover:shadow-md"
                }`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${categoryData.color} text-white transform hover:scale-110 transition-transform duration-300`}
                  >
                    {categoryData.icon}
                  </div>
                  <h3
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {categoryName}
                  </h3>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryData.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-bounce-in ${
                        darkMode
                          ? "bg-gray-800 border border-gray-700 hover:border-gray-600 hover:bg-gray-750 shadow-lg hover:shadow-2xl"
                          : "bg-white border border-gray-200 hover:border-gray-300 hover:shadow-2xl shadow-md"
                      }`}
                      style={{
                        animationDelay: `${
                          categoryIndex * 0.1 + skillIndex * 0.05
                        }s`,
                      }}
                    >
                      {/* Gradient Background Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${categoryData.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />

                      {/* Skill Icon */}
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${categoryData.color} flex items-center justify-center`}
                        >
                          {skill.icon && (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-6 h-6"
                            />
                          )}
                        </div>
                      </div>

                      <div className="relative p-6">
                        {/* Skill Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-r ${categoryData.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                          >
                            {skill.icon && (
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-6 h-6"
                              />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4
                              className={`font-bold text-lg transition-colors duration-300 ${
                                darkMode
                                  ? "text-white group-hover:text-gray-100"
                                  : "text-gray-900 group-hover:text-gray-800"
                              }`}
                            >
                              {skill.name}
                            </h4>
                          </div>
                        </div>

                        {/* Skill Level Display */}
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-3">
                            <span
                              className={`text-sm font-medium transition-colors duration-300 ${
                                darkMode ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              Proficiency
                            </span>
                            <span
                              className={`text-xl font-bold bg-gradient-to-r ${categoryData.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                            >
                              {skill.level}%
                            </span>
                          </div>

                          {/* Enhanced Progress Bar */}
                          <div
                            className={`w-full h-3 rounded-full overflow-hidden transition-colors duration-300 ${
                              darkMode ? "bg-gray-700" : "bg-gray-200"
                            }`}
                          >
                            <div
                              className={`h-full bg-gradient-to-r ${categoryData.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden shadow-sm`}
                              style={{
                                width: animatedSkills.has(
                                  `${categoryName}-${skillIndex}`
                                )
                                  ? `${skill.level}%`
                                  : "0%",
                              }}
                            >
                              {/* Animated Shimmer Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        </div>

                        {/* Skill Level Indicator */}
                        <div className="flex items-center justify-between">
                          <div
                            className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${
                              skill.level >= 90
                                ? darkMode
                                  ? "bg-green-900 text-green-300"
                                  : "bg-green-100 text-green-800"
                                : skill.level >= 80
                                ? darkMode
                                  ? "bg-blue-900 text-blue-300"
                                  : "bg-blue-100 text-blue-800"
                                : skill.level >= 70
                                ? darkMode
                                  ? "bg-yellow-900 text-yellow-300"
                                  : "bg-yellow-100 text-yellow-800"
                                : darkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {skill.level >= 90
                              ? "Expert"
                              : skill.level >= 80
                              ? "Advanced"
                              : skill.level >= 70
                              ? "Intermediate"
                              : "Beginner"}
                          </div>

                          {/* Progress Dots */}
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  i < Math.floor(skill.level / 20)
                                    ? `bg-gradient-to-r ${categoryData.color}`
                                    : darkMode
                                    ? "bg-gray-600"
                                    : "bg-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Hover Effect Bottom Border */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${categoryData.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
