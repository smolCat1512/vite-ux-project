import { motion } from "framer-motion";
import Hero from "../components/Hero";
import CaseStudies from "../components/CaseStudies";
import About from "../components/About";

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
      <section
        id="case-studies"
        className="h-screen flex items-start justify-center"
      >
        <CaseStudies />
      </section>
      <section id="about" className="h-screen flex items-start justify-center">
        <About />
      </section>

      {/*     
      <section id="what-how" className="h-screen flex items-start justify-center">
        <WhatAndHow />
      </section>
      <footer id="connect" className="h-screen flex items-start justify-center">
        <Connect /> */}
    </motion.main>
  );
};

export default HomePage;
