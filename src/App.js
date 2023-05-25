import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "./scenes/Footer";
import useDebouncedScroll from './hooks/useDebouncedScroll';

function App() {
  // states
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const scrollPosition = useDebouncedScroll(10000);

  // create refs
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // use effect for scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollPosition === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (scrollPosition !== 0) setIsTopOfPage(false);
    };

    handleScroll(); // debounced scroll w/ delay

    // intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedPage(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // adjust this if needed
    );

    // start observing
    observer.observe(homeRef.current);
    observer.observe(projectsRef.current);
    observer.observe(contactRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect(); // stop observing on unmount
    };
  }, [scrollPosition]);

  return (
    <div className="app bg-deep-blue scroll-snap-container">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <div ref={homeRef} id="home" className="scroll-snap-child">
          <Landing setSelectedPage={setSelectedPage} />
        </div>
      </div>
      <div className="w-5/6 mx-auto scroll-snap-child">
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
      </div>
      <div className="w-5/6 mx-auto md:h-full scroll-snap-child">
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;