import { motion, useReducedMotion } from "framer-motion";
import Hero from "../components/Hero";
import Portfolio from "../components/Portoflio";
import Connect from "../components/Connect";
import Technologies from "../components/Technologies";
import Main from "../utils/Main";

const HomePage = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Main>
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={shouldReduceMotion ? {} : { opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {/* Hero Section */}
          <section
            id="hero"
            className="h-screen flex items-start justify-center pt-36"
            aria-label="Introduction"
          >
            <Hero />
          </section>

          {/* Technologies Section */}
          <section
            id="technologies"
            className="flex items-start justify-center"
            aria-label="Technologies I use"
          >
            <Technologies />
          </section>

          {/* Portfolio Section */}
          <section
            id="portfolio"
            className="flex items-start justify-center"
            aria-label="Portfolio"
          >
            <Portfolio />
          </section>
        </motion.div>
      </Main>

      {/* Footer / Connect Section */}
      <footer
        id="connect"
        className="flex items-start justify-center"
        aria-label="Connect"
      >
        <Connect />
      </footer>
    </>
  );
};

export default HomePage;
