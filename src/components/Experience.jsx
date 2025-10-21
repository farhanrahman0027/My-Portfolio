import React from "react";
import { useDarkMode } from "../DarkModeContext";

const experiences = [
//   {
//   id: 1,
//   role: "Full Stack Web Developer with AI Intern",
//   company: "Corporate Web Solutions",
//   companyShort: "Next Gen Web Solutions",
//   location: "Remote",
//   duration: "February 2025 - August 2025",
//   type: "Internship",
//   technologies: [
//     "React.js",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "HTML5",
//     "CSS3",
//     "JavaScript",
//     "AI Integration"
//   ],
//   description: [
//     "Worked on developing full-stack web applications with AI-driven features using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
//     "Designed and implemented responsive, user-friendly interfaces with React.js and Tailwind CSS to enhance usability and performance.",
//     "Developed and consumed RESTful APIs for seamless frontend-backend communication and data management.",
//     "Integrated AI functionalities into web modules to automate processes and improve user experience.",
//     "Collaborated in an agile environment, participating in regular code reviews and version control with Git and GitHub."
//   ],
//   achievements: [
//     "Successfully completed all assigned projects and modules within deadlines with 'Outstanding' performance rating.",
//     "Earned 4 credits for exceptional contribution and completion of AI-integrated web development tasks.",
//     "Enhanced system efficiency and scalability by implementing optimized backend logic and clean frontend architecture."
//   ]
// }
,
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Ministry of Electronics & Information Technology",
    companyShort: "MeitY, Govt. of India",
    location: "Hyderabad, MANUU",
    duration: "March 2024 - June 2024",
    type: "Internship",
    technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Material-UI", "SASS"],
    description: [
      "Developed dynamic, user-friendly web interfaces using modern React.js architecture and best practices",
      "Implemented responsive design solutions with Bootstrap and Material-UI, ensuring seamless cross-device compatibility",
      "Enhanced application performance and user experience through optimized frontend development techniques",
      "Collaborated with government stakeholders to deliver innovative digital solutions for public services"
    ],
    achievements: [
      "Successfully delivered 3+ web applications within the internship period",
      "Improved user interface responsiveness by 40% through efficient CSS and JavaScript optimization",
      "Contributed to government digitization initiatives serving thousands of users"
    ]
  },
  
];

const Experience = () => {
  const { darkMode } = useDarkMode();

  // Custom icon components using SVG
  const BriefcaseIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 16V8a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1zM6 18h12V8H6v10zM4 6V4a2 2 0 012-2h12a2 2 0 012 2v2h2a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm2-2v2h12V4H6z"/>
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );

  const TechIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  const AchievementIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );

  return (
    <section
      id="experience"
      className={`px-4 sm:px-6 md:px-8 lg:px-12 py-16 w-full transition-all duration-500 ${
        darkMode 
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100" 
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Compact */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] text-white shadow-lg">
            <div className="w-6 h-6 ">
              <BriefcaseIcon />
            </div>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-[#2C3E50]'
          }`}>
            Professional <span className="bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] mx-auto rounded-full"></div>
        </div>

        {/* Experience Cards - Compact Grid */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Experience Card - Smaller */}
              <div className={`transform transition-all duration-300 hover:scale-[1.02] ${
                darkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50 hover:border-indigo-500/50 shadow-lg hover:shadow-xl"
                  : "bg-white border border-gray-200/50 hover:border-indigo-400/50 shadow-md hover:shadow-lg"
              } rounded-xl p-6 relative overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-24 h-24 opacity-5 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                  <BriefcaseIcon />
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Header Row - Compact */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                    {/* Left Section */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold leading-tight flex-1">
                          {exp.role}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          darkMode ? "bg-indigo-900/30 text-indigo-400" : "bg-indigo-100 text-indigo-800"
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <p className={`text-base font-semibold ${
                          darkMode ? "text-blue-400" : "text-indigo-600"
                        }`}>
                          {exp.company}
                        </p>
                        <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                          {exp.companyShort}
                        </p>
                      </div>

                      {/* Meta Information - Horizontal */}
                      <div className="flex flex-wrap gap-3 text-sm">
                        <div className="flex items-center gap-1">
                          <div className={`w-3 h-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            <LocationIcon />
                          </div>
                          <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                            {exp.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className={`w-3 h-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            <CalendarIcon />
                          </div>
                          <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Company Icon */}
                    <div className={`p-3 rounded-lg ${
                      darkMode 
                        ? "bg-indigo-500/10 border border-indigo-500/30" 
                        : "bg-indigo-50 border border-indigo-200"
                    } flex-shrink-0`}>
                      <div className={`w-8 h-8 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
                        <BriefcaseIcon />
                      </div>
                    </div>
                  </div>

                  {/* Technologies - Compact */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        darkMode ? "bg-indigo-400" : "bg-indigo-500"
                      }`}></div>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 text-xs font-medium rounded-md transition-all duration-200 hover:scale-105 ${
                            darkMode 
                              ? "bg-slate-700 text-slate-200 border border-slate-600/50" 
                              : "bg-gray-100 text-gray-700 border border-gray-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Two Column Layout for Responsibilities and Achievements */}
                  <div className="grid lg:grid-cols-2 gap-4">
                    {/* Key Responsibilities - Compact */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          darkMode ? "bg-indigo-400" : "bg-indigo-500"
                        }`}></div>
                        Responsibilities
                      </h4>
                      <div className="space-y-2">
                        {exp.description.slice(0, 2).map((point, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-2 p-2 rounded-md text-sm ${
                              darkMode 
                                ? "bg-slate-700/30 border border-slate-600/20" 
                                : "bg-gray-50 border border-gray-200/50"
                            }`}
                          >
                            <div className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${
                              darkMode ? "bg-indigo-400" : "bg-indigo-500"
                            }`}></div>
                            <p className="leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements - Compact */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                        <div className={`w-3 h-3 ${darkMode ? "text-yellow-400" : "text-yellow-500"}`}>
                          <AchievementIcon />
                        </div>
                        Achievements
                      </h4>
                      <div className="space-y-2">
                        {exp.achievements.slice(0, 2).map((achievement, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-2 p-2 rounded-md text-sm ${
                              darkMode 
                                ? "bg-yellow-900/20 border border-yellow-700/30" 
                                : "bg-yellow-50 border border-yellow-200/50"
                            }`}
                          >
                            <div className={`w-3 h-3 flex-shrink-0 mt-0.5 ${darkMode ? "text-yellow-400" : "text-yellow-500"}`}>
                              <TechIcon />
                            </div>
                            <p className="leading-relaxed font-medium">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer - Compact */}
        <div className={`text-center mt-8 p-6 rounded-lg ${
          darkMode 
            ? "bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50" 
            : "bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200/50"
        }`}>
          <h3 className="text-lg font-semibold mb-2">Ready for New Challenges</h3>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Passionate about creating innovative solutions and contributing to impactful projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
