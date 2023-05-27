import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "./scenes/Footer";
import useDebouncedScroll from "./hooks/useDebouncedScroll";

function App() {
  // states
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const scrollPosition = useDebouncedScroll(0);

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
      { threshold: 0.2 } // adjust this if needed
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
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div
        ref={homeRef}
        id="home"
        className="w-5/6 mx-auto md:h-full"
      >
        <motion.div
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <div
        ref={projectsRef}
        id="projects"
        className="w-5/6 mx-auto"
      >
        <motion.div
          margin="0 0 -200px 0"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <div
        ref={contactRef}
        id="contact"
        className="w-5/6 mx-auto md:h-full"
      >
        <motion.div
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
