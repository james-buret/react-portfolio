import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, link, description }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const overlayBaseStyles = "absolute h-full w-full bg-black z-30 flex flex-col justify-center items-center text-center p-16 text-[#efefef]";
  const overlayDesktopStyles = isDesktop ? "opacity-0 hover:opacity-90 transition duration-500" : "opacity-80";

  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="_blank" rel="noreferrer">
        <div className={`${overlayBaseStyles} ${overlayDesktopStyles}`}>
          <p className="text-2xl">{title}</p>
          <p className="mt-7">{description}</p>
        </div>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="projects pt-36 mt-12 md:mb-48 md:h-screen">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-semibold text-4xl">
            <span className="text-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            MODERN USER INTERFACES
          </div>
          <Project
            title="Forecast"
            description={
              "(React/TailwindCSS) Basic react app that uses the OpenWeatherMap API to return current weather information."
            }
          />
          <Project
            title="Reactor"
            link="https://reactor.artelabore.online/"
            description={
              "(HTML/CSS) 24/7 Web radio station that features independent artists and occasional virtual concerts."
            }
          />

          {/* ROW 2 */}
          <Project
            title="Hyperbot"
            description={
              "(HTML/ElectronJS) Sneaker purchasing bot developed over the course of a summer with a friend."
            }
          />
          <Project
            title="Wave.ac"
            link="https://wave.ac/"
            description={
              "(React/CSS) Helped a small team of React.JS developers revamp their front-end and user interface."
            }
          />
          <Project
            title="First Blog"
            description={
              "(HTML/CSS/JavaScript) Very early website I created as part of a free coding bootcamp."
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
