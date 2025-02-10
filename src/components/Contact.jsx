import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-16 text-center bg-gray-100 dark:bg-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-[#2C3E50] dark:text-white mb-8"
      >
        Let's Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6"
      >
        Have a project in mind? Looking for a developer? Or just want to say hi?  
        Drop me a message below, and I'll get back to you!
      </motion.p>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col md:flex-row justify-center gap-6 mb-8"
      >
        <div className="flex items-center gap-3 text-lg">
          <FaEnvelope className="text-blue-500" />
          <span>farhanrahman0027@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <FaPhone className="text-green-500" />
          <span>+91 7546974978</span>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
            required
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-10 flex justify-center gap-6 text-3xl"
      >
        <a href="https://linkedin.com/in/farhanur-rahman" className="text-blue-500 hover:scale-110 transition-all">
          <FaLinkedin />
        </a>
        <a href="https://github.com/farhanrahman0027" className="text-gray-800 dark:text-gray-300 hover:scale-110 transition-all">
          <FaGithub />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
