import React, { Suspense, lazy } from "react";
import { useDarkMode } from "./DarkModeContext";

// 👇 Lazy load all major sections
const Navbar = lazy(() => import("./components/Navbar"));
const UpperSection = lazy(() => import("./components/UpperSection"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
// const VisitorCounter = lazy(() => import("./Home"));

const App = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Suspense wraps all lazy components */}
      <Suspense
        fallback={
          <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#4ca1af] mb-4"></div>
            <p className="text-gray-500 dark:text-gray-300">Loading portfolio...</p>
          </div>
        }
      >
        <Navbar />
        <UpperSection />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        {/* <VisitorCounter /> */}
      </Suspense>
    </div>
  );
};

export default App;
