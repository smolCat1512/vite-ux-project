import { motion, useReducedMotion } from "framer-motion";
import Hero from "../components/Hero";
import Portfolio from "../components/Portoflio";
import Connect from "../components/Connect";
import Technologies from "../components/Technologies";
import { Box } from "@mantine/core";

const HomePage = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={shouldReduceMotion ? {} : { opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Hero Section */}
        <Box
          id="hero"
          className="h-screen flex items-start justify-center pt-36"
          aria-labelledby="hero-heading"
        >
          <h2 id="hero-heading" className="sr-only">
            Introduction
          </h2>
          <Hero />
        </Box>

        {/* Technologies Section */}
        <section
          id="technologies"
          className="flex items-start justify-center"
          aria-labelledby="technologies-heading"
        >
          <h2 id="technologies-heading" className="sr-only">
            Technologies I use
          </h2>
          <Technologies />
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="flex items-start justify-center"
          aria-labelledby="portfolio-heading"
        >
          <h2 id="portfolio-heading" className="sr-only">
            Portfolio
          </h2>
          <Portfolio />
        </section>
      </motion.div>

      {/* Footer / Connect Section */}
      <footer id="connect" className="flex items-start justify-center">
        <Connect />
      </footer>
    </>
  );
};

export default HomePage;
