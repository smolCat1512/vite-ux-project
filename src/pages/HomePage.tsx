import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Portfolio from "../components/Portoflio";
import Connect from "../components/Connect";
import Technologies from "../components/Technologies";
import Main from "../utils/Main";

const HomePage = () => {
  return (
    <>
      <Main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <section
            id="hero"
            className="h-screen flex items-start justify-center pt-36"
          >
            <Hero />
          </section>
          <section
            id="technologies"
            className="flex items-start justify-center"
          >
            <Technologies />
          </section>
          <section id="portfolio" className="flex items-start justify-center">
            <Portfolio />
          </section>
        </motion.div>
      </Main>
      <footer id="connect" className="flex items-start justify-center">
        <Connect />
      </footer>
    </>
  );
};

export default HomePage;
