import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../DarkModeContext"; // Import the hook
import logo from "../assets/logo.png";
const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Use the dark mode state and toggle function

  return (
    <nav className={`p-4 sticky top-0 z-10 ${darkMode ? "bg-[#1A2238] text-[#E0E0E0]" : "bg-[#F4F6F7] text-[#2C3E50]"}`}>
      <div className="container mx-auto flex justify-between items-center">
      <img
          src={logo}
          alt="Logo"
          className="shadow-md rounded-full h-[10vh]"
        />
        <h1 className="text-2xl font-bold dark:text-white transition-colors">
          Welcome Here!
        </h1>

        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          className="text-2xl cursor-pointer"
        >
          {darkMode ? <FaMoon /> : <FaSun />} {/* Change icon based on mode */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
