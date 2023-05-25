import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-center gap-16 md:items-center md:h-screen"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 flex justify-center md:order-2">
        {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-5 before:-left-5
              before:w-full before:max-w-[800px] md:before:max-w-[800px] before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <video
                autoPlay
                loop
                className="hover:filter hover:saturate-200 transition duration-500 z-10
                w-full max-w-[800px] before:max-w-[600px] h-full border-2 border-blue"
              >
                <source src="assets/test.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="jamesburet text-6xl z-10 text-center md:text-start">
            James {""}
            <span className="xs:relative xs:text-blue xs:font-semibold z-40">
              Buret
            </span>
          </p>

          <p className="jamesdesc text-md text-center md:text-start">
            As an expert Front-End Developer proficient in HTML, CSS, and
            JavaScript, I deliver visually captivating and user-centric web
            solutions. Let's connect to elevate your digital presence with a
            unique web experience.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="contact-btn bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact
          </AnchorLink>
          <AnchorLink
            className="letstalk-button rounded-r-sm bg-blue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-sans">
              Resume
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
