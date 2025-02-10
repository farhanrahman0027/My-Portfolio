import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import { SiJavascript, SiReact, SiTailwindcss, SiPython, SiNodedotjs } from "react-icons/si";
const About = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 90 },
    { name: "React", icon: <SiReact className="text-blue-400" />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 80 },
    { name: "Python", icon: <SiPython className="text-blue-500" />, level: 75 },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, level: 70 }
  ];
  return (
    <section id="about" className="container mx-auto px-4 py-20 ">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#2C3E50] "
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-lg  md:text-left max-w-4xl mx-auto text-gray-600 mb-12"
      >
        I'm a skilled software developer with a passion for creating innovative
        and user-friendly applications. With a strong background in computer
        science and a deep understanding of programming languages and
        frameworks, I'm able to develop high-quality software that meets the
        needs of users. I'm also experienced in working in a team environment
        and have a proven track record of delivering projects on time and within
        budget. I'm excited to bring my skills and experience to your team.
      </motion.p>
    </section>
  );
};

export default About;
