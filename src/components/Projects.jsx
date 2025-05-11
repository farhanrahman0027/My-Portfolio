import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../DarkModeContext"; // Import the hook
import homepage1 from "../assets/project1_homepage.png";
import homepage2 from "../assets/project2_homepage.png";
import homepage3 from "../assets/project3_homepage.png";
import homepage4 from "../assets/project4_homepage.png";
import homepage5 from "../assets/project5_homepage.png";


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
      ],
      image: homepage1, // Screenshot path
      link: "https://nextgenedu.vercel.app/" // Website link
    },

    {
      title: "SkyWay",
      description: "A responsive full-stack flight booking web application ",
      details: [
        "Smart Flight Search: Auto-suggest for cities and airports.",
        "Dynamic Pricing: Prices adjust based on user activity.",
        "Wallet System: ₹50,000 virtual wallet for bookings.",
        "PDF Tickets: Generates downloadable flight vouchers.",
      ],
      image: homepage2, // Screenshot path
      link: "https://sky-way-phi.vercel.app/" // Website link
    }, 

    {
      title: "ShopHub",
      description: "A dynamic and responsive e-commerce website",
      details: [
        "Built a dynamic and responsive e-commerce website using Next.js and Tailwind CSS.",
        "Product listing and dynamic product detail pages",
        "Enabled product filtering and search functionality.",
        "Add to cart and remove from cart functionality",
      ],
      image: homepage3, // Screenshot path
      link: "https://e-commerce-rust-six-77.vercel.app/" // Website link
    },

    {
      title: "Student-Registration Dashboard",
      description: "A simple and responsive Student Registration System ",
      details: [
        "Manage course types like Group, Individual, Special",
        "Create and organize courses such as Hindi, English, Urdu",
        "Combine and control course offerings like Group Hindi",
        "Register students and filter by course type",
      ],
      image: homepage4, // Screenshot path
      link: "https://student-registration-amber.vercel.app/" // Website link
    },

    {
      title: "Car finder App",
      description: "A responsive and interactive frontend web app.",
      details: [
        "Search cars by name or apply advanced filters to find specific models.",
        "Save favorite cars to a wishlist for easy access and comparison.",
        "Smooth Animations: Enhanced user experience with Framer Motion transitions and interactions.",
        "Fetch car data dynamically from an external API or mock data source.",
      ],
      image: homepage5, // Screenshot path
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
            <h3 className="text-2xl font-semibold flex justify-between h-18 items-center">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="mt-4 w-full rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
              />
            </a>
            <h2 className=" mt-4 text-xl font-semibold">Key Features</h2>
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
