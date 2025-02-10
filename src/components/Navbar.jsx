import React from 'react'
import  { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png"
const Navbar = () => {
   const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [darkMode]);
  return (
    <div>
      <nav className="p-4">
              <div className="container mx-auto flex justify-between items-center">
                <img src={logo} alt="" className="shadow-md rounded-full  h-[10vh]"/>
                <h1 className="text-2xl font-bold"> Welcome Here!</h1>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-600"
                >
                  {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                </button>
              </div>
            </nav>
    </div>
  )
}

export default Navbar
