import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import axios from "axios";
import { useDarkMode } from "../DarkModeContext";
const Contact = () => {
  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      if (response.data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setIsSending(false);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`container text-center mx-auto px-6 py-16 ${darkMode ? "bg-[#1A2238] text-[#E0E0E0]" : "bg-[#F4F6F7] text-[#2C3E50]"}`}
    >
      <motion.h2 className="text-4xl md:text-5xl font-bold mb-8">
        Let's Connect
      </motion.h2>

      <motion.p className="text-lg max-w-3xl mx-auto mb-6">
        Have a project in mind? Looking for a developer? Or just want to say hi? Drop me a message below, and I'll get back to you!
      </motion.p>

      <motion.div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
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
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
        {success && <p className="text-green-500 mt-3">Message sent successfully!</p>}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
