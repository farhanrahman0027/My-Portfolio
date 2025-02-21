import React from "react";
import { useDarkMode } from "./DarkModeContext"; // Import the hook
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import UpperSection from "./components/UpperSection";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience"; // Example component

const App = () => {
  const { darkMode } = useDarkMode(); // Use the dark mode state

  return (
    <div className={darkMode ? "dark" : ""}> {/* Apply dark mode to the root element */}
      <Navbar />
      <UpperSection />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Resume />
      <Contact />
      {/* Other sections of the app */}
    </div>
  );
};

export default App;
