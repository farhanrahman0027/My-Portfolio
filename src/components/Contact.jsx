import React, { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  Check,
  AlertCircle,
} from "lucide-react";
import { useDarkMode } from "../DarkModeContext";
import { section } from "framer-motion/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  
  // Fixed the destructuring - should be 'darkMode' not 'DarkMode'
  const { darkMode } = useDarkMode();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: "error", message: validationError });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate success (replace with actual API call)
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setStatus({
        type: "success",
        message:
          "Thank you for your message! I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again.",
      });
    }

    setIsSending(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "farhanrahman0027@gmail.com",
      href: "mailto:farhanrahman0027@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 (754) 697-4978",
      href: "tel:+917546974978",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/farhanur-rahman/",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/farhanrahman0027",
      color: "hover:text-gray-800",
    },
  ];

  return (
    <section id="contact" className="relative">
      <div className={`min-h-screen bg-gradient-to-br py-16 px-4
      ${darkMode 
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100" 
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      }`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slide-up transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-[#2C3E50]'
          }`}>
            Let's Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed
          ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Ready to bring your ideas to life? I'm here to help you build
            something amazing. Let's discuss your project and see how we can
            collaborate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`rounded-2xl p-8 shadow-lg border
            ${darkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-gray-100"
            }`}>
              <h2 className={`text-2xl font-semibold mb-6
              ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
                Get In Touch
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                      ${darkMode ? "bg-blue-900" : "bg-blue-100"}`}>
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className={`text-sm font-medium
                        ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className={`transition-colors
                            ${darkMode
                              ? "text-gray-100 hover:text-blue-400"
                              : "text-gray-900 hover:text-blue-600"
                            }`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className={darkMode ? "text-gray-100" : "text-gray-900"}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className={`mt-8 pt-8 border-t
              ${darkMode ? "border-slate-700" : "border-gray-200"}`}>
                <p className={`text-sm font-medium mb-4
                ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Follow Me
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110
                        ${darkMode
                          ? "bg-slate-800 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                        }
                        ${social.color}
                      `}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className={`rounded-2xl p-6 border
            ${darkMode
              ? "bg-blue-950 border-blue-900"
              : "bg-blue-50 border-blue-100"
            }`}>
              <div className="flex items-start space-x-3">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1
                ${darkMode ? "bg-blue-900" : "bg-blue-100"}`}>
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className={`font-semibold mb-1
                  ${darkMode ? "text-blue-200" : "text-blue-900"}`}>
                    Quick Response Guaranteed
                  </h3>
                  <p className={`text-sm
                  ${darkMode ? "text-blue-300" : "text-blue-700"}`}>
                    I typically respond to all inquiries within 24 hours. For
                    urgent projects, feel free to call me directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Now with Dark Mode Support */}
          <div className={`rounded-2xl p-8 shadow-lg border
          ${darkMode
            ? "bg-slate-900 border-slate-800"
            : "bg-white border-gray-100"
          }`}>
            <h2 className={`text-2xl font-semibold mb-6
            ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2
                    ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
                    ${darkMode
                      ? "bg-slate-800 border-slate-700 text-gray-100 placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="farhan..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2
                    ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
                    ${darkMode
                      ? "bg-slate-800 border-slate-700 text-gray-100 placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="farhan....@gmail.com"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2
                  ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
                  ${darkMode
                    ? "bg-slate-800 border-slate-700 text-gray-100 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Project Inquiry / Collaboration / General Question"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2
                  ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none
                  ${darkMode
                    ? "bg-slate-800 border-slate-700 text-gray-100 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                  required
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-4 rounded-lg flex items-center space-x-3 ${
                    status.type === "success"
                      ? darkMode
                        ? "bg-green-900 border border-green-700"
                        : "bg-green-50 border border-green-200"
                      : darkMode
                      ? "bg-red-900 border border-red-700"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  {status.type === "success" ? (
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      darkMode ? "text-green-400" : "text-green-600"
                    }`} />
                  ) : (
                    <AlertCircle className={`w-5 h-5 flex-shrink-0 ${
                      darkMode ? "text-red-400" : "text-red-600"
                    }`} />
                  )}
                  <p
                    className={`text-sm ${
                      status.type === "success"
                        ? darkMode ? "text-green-200" : "text-green-800"
                        : darkMode ? "text-red-200" : "text-red-800"
                    }`}
                  >
                    {status.message}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-[1.02] disabled:scale-100
                ${darkMode
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white "
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white "
                }`}
              >
                {isSending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;