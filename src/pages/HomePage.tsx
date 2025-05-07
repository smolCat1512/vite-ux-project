// import CaseStudies from "../components/casestudies";
// import About from "../components/about";
// import WhatAndHow from "../components/what";
// import Connect from "../components/connect";
// import Me from "../components/Me";
// import Header from "../components/header";
import { motion } from "framer-motion";


export default function HomePage() {
  return (
    <motion.main
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
        <p>Shaun Test</p>
    {/* <Header />
    <section id="me" className="h-screen flex items-start justify-center pt-36">
        <Me />
      </section>
      <section id="about" className="h-screen flex items-start justify-center">
        <About />
      </section>
      <section id="case-studies" className="h-screen flex items-start justify-center">
        <CaseStudies />
      </section>
      <section id="what-how" className="h-screen flex items-start justify-center">
        <WhatAndHow />
      </section>
      <footer id="connect" className="h-screen flex items-start justify-center">
        <Connect />
      </footer> */}
    </motion.main>
  );
}
