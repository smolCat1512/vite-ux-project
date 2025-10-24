import { motion } from "framer-motion";
import Hero from "../components/Hero";
import CaseStudies from "../components/Portoflio";
import WhatAndHow from "../components/WhatAndHow";
import Connect from "../components/Connect";
import Technologies from "../components/Technologies";

const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <section
        id="me"
        className="h-screen flex items-start justify-center pt-36"
      >
        <Hero />
      </section>
      <section id="technologies" className="flex items-start justify-center">
        <Technologies />
      </section>
      <section
        id="case-studies"
        className="flex items-start justify-center"
      >
        <CaseStudies />
      </section>
      <section id="what-how" className="flex items-start justify-center">
        <WhatAndHow />
      </section>
      <footer id="connect" className="flex items-start justify-center">
        <Connect />
      </footer>
    </motion.main>
  );
};

export default HomePage;
