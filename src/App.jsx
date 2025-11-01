import React from "react";
import { useDarkMode } from "./DarkModeContext";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import UpperSection from "./components/UpperSection";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";
// import VisitorCounter from "./Home"
const App = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      {" "}
      <Navbar />
      <UpperSection />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />

       {/* <VisitorCounter /> */}
    </div>
  );
};

export default App;
