import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext"; // Import the hook
import homepage1 from "../assets/project1_homepage.png";
import homepage2 from "../assets/project2_homepage.png";
import homepage3 from "../assets/project3_homepage.png";

const Projects = () => {
  const { darkMode } = useDarkMode(); // Use the dark mode state

  const projects = [
    {
      title: "NextGen Edu",
      description: "An e-learning platform with interactive features.",
      details: [
        "Course Management for creation, enrollment, and progress tracking",
        "Live Classes & Quizzes for interactive learning and assessments",
        "Performance Analytics with dashboards and progress insights",
        "AI-Powered Learning with smart recommendations and summaries",
        "hird-Party Integrations like Google Drive, APIs, and payments",
        
      ],
      image: homepage1, // Screenshot path
      link: "https://nextgenedu.vercel.app/" // Website link
    },
    {
      title: "PodVista",
      description: "A full-stack web platform for discovering and managing podcasts.",
      details: [
        "Discover and manage podcasts with an intuitive interface",
        "Adjustable playback speed for a personalized listening experience",
        "Podcast creation tools including recording, uploading, and editing features",
        "AI-powered recommendations to suggest relevant content",
        "Auto-generated transcripts and summaries for easy content consumption"
      ],
      image: homepage2, // Screenshot path
      link: "https://podcast-neon.vercel.app/" // Website link
    },

    {
      title: "Car finder App",
      description: "A responsive and interactive frontend web app.",
      details: [
        "Search cars by name or apply advanced filters to find specific models.",
        "Save favorite cars to a wishlist for easy access and comparison.",
        "Smooth Animations: Enhanced user experience with Framer Motion transitions and interactions.",
        "Fetch car data dynamically from an external API or mock data source.",
        "Optimized for mobile, tablet, and desktop screens using Tailwind CSS."
      ],
      image: homepage3, // Screenshot path
      link: "https://car-finder-app-seven.vercel.app/" // Website link
    },
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen ${
        darkMode ? "bg-[#1A2238] text-[#E0E0E0]" : "bg-[#F4F6F7] text-[#2C3E50]"
      }`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 py-20"
      >
        Projects
      </motion.h2>
      <div className="grid px-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`p-6 rounded-lg shadow-lg transition-all ${
              darkMode
                ? "bg-[#27374D] text-[#E0E0E0]"  // Dark mode: Dark background, light text
                : "bg-[#FFFFFF] text-[#2C3E50]"  // Light mode: White background, dark text
            }`}
          >
            <h3 className="text-2xl font-semibold flex justify-center">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="mt-4 w-full rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
              />
            </a>
            <ul className="m-4 text-left list-disc ">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
