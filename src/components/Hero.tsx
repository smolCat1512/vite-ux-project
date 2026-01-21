import { motion, useReducedMotion } from "framer-motion";
import Socials from "./Socials";
import { Box } from "@mantine/core";
import HeroHeading from "../design-system/hero/HeroHeading";
import HeroHighlight from "../design-system/hero/HeroHighlight";
import HeroSubheading from "../design-system/hero/HeroSubheading";
import HeroDescription from "../design-system/hero/HeroDescription";
import ScrollDownButton from "../design-system/hero/ScrollDownButton";
import UserType from "../design-system/hero/userType";

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
        <div className="flex flex-row items-center justify-center pb-4">
          <HeroHeading animate={!shouldReduceMotion}>
            Hi, I'm <HeroHighlight>Shaun</HeroHighlight>, I design and build for{" "}
            <UserType />
          </HeroHeading>
        </div>

        {/* Subheading */}
        <div className="pb-4">
          <HeroSubheading animate={!shouldReduceMotion}>
            Software Engineer and UX/UI Engineer
          </HeroSubheading>
        </div>

        {/* Description */}
        <HeroDescription animate={!shouldReduceMotion}>
          I create user-centered digital experiences
        </HeroDescription>

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
          <ScrollDownButton onClick={handleScrollToTechnologies} />
        </motion.div>
      </div>
    </Box>
  );
};

export default Hero;