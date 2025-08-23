import React from "react";
import { useDarkMode } from "../DarkModeContext"; // Import the dark mode context

const educationDetails = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Maulana Azad National Urdu University",
    location: "Hyderabad, Telangana",
    duration: "2021 - 2025",
    status: "Final Year",
    gpa: "8.29 CGPA",
    highlights: [
      "Specialized in Data Structures & Algorithms, Database Management Systems",
      "Advanced coursework in Operating Systems, Computer Networks, and AI/ML",
      "Active contributor to open-source projects and coding competitions",
      "Strong foundation in software engineering principles and practices"
    ],
    type: "undergraduate"
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (PCM)",
    institution: "Al Irfan Secondary School",
    location: "India",
    duration: "Completed 2020",
    status: "Graduated",
    gpa: "77.8%",
    semester: "",
    highlights: [
      "Physics, Chemistry, and Mathematics specialization",
      "Developed strong analytical and problem-solving capabilities",
      "Foundation in mathematical reasoning and scientific methodology"
    ],
    type: "secondary"
  },
];

const Education = () => {
  const { darkMode } = useDarkMode();

  // Custom icon components using SVG
  const GraduationCapIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
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

  const TrophyIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h4v5c0 1.1-.9 2-2 2h-1.54c-.55 2.3-2.43 4.1-4.81 4.38V18H15c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h2.35v-2.62C9.03 15.1 7.45 13.3 6.54 11H5c-1.1 0-2-.9-2-2V4h4zM5 6v3h1.54c.32 1.04.82 1.99 1.46 2.79V6H5zm12 5.79c.64-.8 1.14-1.75 1.46-2.79H20V6h-3v5.79z"/>
    </svg>
  );

  return (
    <section
      id="education"
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
            <div className="w-6 h-6">
              <GraduationCapIcon />
            </div>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 animate-slide-up transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-[#2C3E50]'
          }`}>
            Edu<span className="bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] bg-clip-text text-transparent">cation</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2c3e50] to-[#4ca1af] mx-auto rounded-full"></div>
        </div>

        {/* Education Cards - Grid Layout */}
        <div className="grid gap-6 md:gap-8">
          {educationDetails.map((edu, index) => (
            <div key={edu.id} className="relative group">
              {/* Education Card - Compact Design */}
              <div className={`transform transition-all duration-300 hover:scale-[1.02] ${
                darkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50 hover:border-blue-500/50 shadow-lg hover:shadow-xl"
                  : "bg-white border border-gray-200/50 hover:border-blue-400/50 shadow-md hover:shadow-lg"
              } rounded-xl p-6 relative overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                  <GraduationCapIcon />
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    {/* Left Section */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold leading-tight flex-1">
                          {edu.degree}
                        </h3>
                        {edu.type === "undergraduate" && (
                          <span className={`px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ${
                            darkMode 
                              ? "bg-green-900/30 text-green-400" 
                              : "bg-green-100 text-green-800"
                          }`}>
                            Current
                          </span>
                        )}
                      </div>
                      
                      <p className={`text-base font-semibold mb-3 ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}>
                        {edu.institution}
                      </p>

                      {/* Meta Information - Horizontal Layout */}
                      <div className="flex flex-wrap gap-4 text-sm mb-4">
                        {edu.location && (
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                              <LocationIcon />
                            </div>
                            <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                              {edu.location}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            <CalendarIcon />
                          </div>
                          <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                            {edu.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - GPA Card */}
                    <div className={`p-3 rounded-2xl border min-w-[100px] text-center transition-colors flex-shrink-0 ${
                      darkMode 
                        ? "border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20" 
                        : "border-blue-400/30 bg-blue-50 hover:bg-blue-100"
                    }`}>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <div className={`w-3 h-3 ${darkMode ? "text-yellow-400" : "text-yellow-500"}`}>
                          <TrophyIcon />
                        </div>
                        <span className="text-xs font-medium uppercase tracking-wider opacity-70">
                          Score
                        </span>
                      </div>
                      <div className="text-lg font-bold">
                        {edu.gpa}
                      </div>
                    </div>
                  </div>

                  {/* Highlights - Compact Grid */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        darkMode ? "bg-blue-400" : "bg-blue-500"
                      }`}></div>
                      Key Highlights
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {edu.highlights.map((point, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-2 p-2 rounded-md transition-all duration-200 text-sm ${
                            darkMode 
                              ? "bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/20" 
                              : "bg-gray-50 hover:bg-gray-100 border border-gray-200/30"
                          }`}
                        >
                          <div className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${
                            darkMode ? "bg-blue-400" : "bg-blue-500"
                          }`}></div>
                          <p className="leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Education;
