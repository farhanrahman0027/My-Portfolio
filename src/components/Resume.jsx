
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-10  dark:bg-gray-900 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-[#2C3E50] dark:text-white mb-6"
      >
        Resume
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6"
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
        download="Farhanur_Rahman_Resume.pdf"
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
        className="mt-10 max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
      >
        <h3 className="text-2xl font-semibold text-[#2C3E50] dark:text-white mb-3">
          What’s Inside?
        </h3>
        <ul className="list-disc list-inside text-left mx-auto text-lg">
          <li>🚀 Full-Stack Web Development Skills</li>
          <li>📌 React, Tailwind CSS, Firebase, and Node.js Experience</li>
          <li>💼 Work & Project Experience</li>
          <li>🎓 Education & Certifications</li>
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default Resume;
