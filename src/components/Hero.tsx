import { motion, useReducedMotion } from "framer-motion";
import Socials from "./Socials";
import { Box, Typography } from "@mantine/core";
import { FaChevronDown } from "react-icons/fa6";
import HeroHeading from "../design-system/hero/HeroHeading";
import HeroHighlight from "../design-system/hero/HeroHighlight";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToTechnologies = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const techSection = document.getElementById("technologies");
    if (techSection) {
      techSection.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <Box className="flex flex-col">
      <Box className="text-center justify-center mx-auto w-10/12 md:w-auto lg:w-auto">
        {/* Main heading */}
        <motion.div
          className="flex flex-row items-center justify-center pb-4"
          initial={{
            y: shouldReduceMotion ? 0 : 100,
            opacity: shouldReduceMotion ? 1 : 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1 }}
        >
          <HeroHeading>
            Hi, I'm <HeroHighlight>Shaun</HeroHighlight>, I design and build for{" "}
            <HeroHighlight>users</HeroHighlight>
          </HeroHeading>
        </motion.div>

        {/* Subheading */}
        <motion.div
          className="pb-4"
          initial={{
            y: shouldReduceMotion ? 0 : 100,
            opacity: shouldReduceMotion ? 1 : 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
        >
          <Typography className="text-center text-2xl">
            Software Engineer and UX/UI Engineer
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{
            y: shouldReduceMotion ? 0 : 100,
            opacity: shouldReduceMotion ? 1 : 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1,
            delay: shouldReduceMotion ? 0 : 0.5,
          }}
        >
          <Typography className="text-2xl text-center w-10/12 mx-auto md:w-2/3 pb-4">
            I create user-centered digital experiences
          </Typography>
        </motion.div>

        <Socials />
      </Box>

      {/* Scroll down arrow */}
      <div className="mt-32 flex justify-center">
        <motion.div
          initial={{ y: 0, opacity: shouldReduceMotion ? 1 : 0.3 }}
          animate={
            shouldReduceMotion ? {} : { y: [0, -10, 0], opacity: [0.3, 1, 0.3] }
          }
          transition={
            shouldReduceMotion
              ? {}
              : { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <button
            onClick={handleScrollToTechnologies}
            className="cursor-pointer border-3 border-black rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-700 flex items-center justify-center"
            aria-label="Scroll to Technologies section"
          >
            <FaChevronDown size={16} color="black" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </Box>
  );
};

export default Hero;
