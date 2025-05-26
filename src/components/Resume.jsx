import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/Farhan_Resume_2025.pdf";
import { useDarkMode } from "../DarkModeContext";

const Resume = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
    id="resume"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className={`container text-center mx-auto px-6 py-16 ${
      darkMode ? "bg-[#1A2238] text-[#E0E0E0]" : "bg-[#F4F6F7] text-[#2C3E50]"
    }`}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-6"
      >
        Resume
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl max-w-3xl mx-auto mb-6 font-semibold md: my-16"
      >
        Take a look at my resume to see my skills, experience, and projects in detail.
        Click below to download a copy.
      </motion.p>

      {/* Resume Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-md mx-auto mb-6"
      >
        <iframe
          src={resume}
          className="w-full h-64 rounded-lg"
          title="Resume Preview"
        ></iframe>
      </motion.div>

      {/* Download Button */}
      <motion.a
        href={resume}
        download="Farhan_Resume"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-md hover:bg-blue-700"
      >
        <FaDownload />
        Download Resume
      </motion.a>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-10 max-w-3xl mx-auto "
      >
        <h3 className="text-2xl font-semibold text-left mb-3 ">
          What’s Inside?
        </h3>
        <ul className="list-disc list-inside text-left mx-auto text-xl">
          <li>🚀 Full-Stack Web Development Skills</li>
          <li>📌 React, Tailwind CSS, Firebase, and Node.js Experience</li>
          <li>💼 Work & Project Experience</li>
          <li>🎓 Education & Certifications</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Resume;
