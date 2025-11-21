import { motion } from "framer-motion";
import Socials from "./Socials";
import { Typography } from "@mantine/core";
import { FaChevronDown } from "react-icons/fa6";

const Hero = () => {
  // Respect users' OS motion preference
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <section aria-label="Hero section">
      <div className="flex flex-col">
        <div className="text-center justify-center mx-auto w-10/12 md:w-auto lg:w-auto">
          {/* Main heading */}
          <motion.div
            className="flex flex-row items-center justify-center pb-4"
            initial={{
              y: prefersReducedMotion ? 0 : 100,
              opacity: prefersReducedMotion ? 1 : 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1 }}
          >
            <h1 className="text-3xl font-bold">
              Hi, I'm <strong className="text-orange-700">Shaun</strong>, I
              design and build for{" "}
              <strong className="text-orange-700">users</strong>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div
            className="pb-4"
            initial={{
              y: prefersReducedMotion ? 0 : 100,
              opacity: prefersReducedMotion ? 1 : 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: 0.2 }}
          >
            <Typography className="text-gray-600 text-center text-2xl">
              Software Engineer and UX/UI Engineer
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{
              y: prefersReducedMotion ? 0 : 100,
              opacity: prefersReducedMotion ? 1 : 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: 0.5 }}
          >
            <Typography className="text-2xl text-gray-600 text-center w-10/12 mx-auto md:w-2/3 pb-4">
              I create user-centered digital experiences
            </Typography>
          </motion.div>

          <Socials />
        </div>

        {/* Scroll down arrow */}
        <div className="mt-32 flex justify-center">
          <motion.div
            initial={{ y: 0, opacity: prefersReducedMotion ? 1 : 0.3 }}
            animate={
              prefersReducedMotion
                ? {} // no animation
                : { y: [0, -10, 0], opacity: [0.3, 1, 0.3] }
            }
            transition={
              prefersReducedMotion
                ? {}
                : { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <button
              onClick={() => {
                const techSection = document.getElementById("technologies");
                if (techSection) {
                  techSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="cursor-pointer border-3 border-black rounded-full p-2 hover:bg-gray-100 flex items-center justify-center"
              aria-label="Scroll to Technologies section"
            >
              <FaChevronDown size={16} color="black" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
