import { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import UpperSection from "./components/UpperSection";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div >
      <Navbar/>
      <UpperSection />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
