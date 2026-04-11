import { motion, useReducedMotion } from "framer-motion";
import { Box, Button, useMantineTheme } from "@mantine/core";
import HeroHeading from "../design-system/hero/HeroHeading";
import HeroHighlight from "../design-system/hero/HeroHighlight";
import HeroSubheading from "../design-system/hero/HeroSubheading";
import ScrollDownButton from "../design-system/hero/ScrollDownButton";
import RoleType from "../design-system/hero/RoleType";
import { FaRegHandshake } from "react-icons/fa";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const theme = useMantineTheme();
  const connectTheme = theme.other.connect;

  const handleScrollToTechnologies = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const techSection = document.getElementById("technologies");
    if (techSection) {
      techSection.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  const handleScrollToConnect = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      connectSection.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        // Adding a slight offset to account for fixed headers or spacing
        block: "center",
      });
    }
  };

  return (
    <Box className="flex flex-col">
      <Box className="text-center justify-center mx-auto w-10/12 md:w-auto lg:w-auto">
        {/* Main heading */}
        <div className="flex flex-row items-center justify-center md:pb-12">
          <HeroHeading animate={!shouldReduceMotion}>
            Hi, I'm <HeroHighlight>Shaun</HeroHighlight> I <RoleType />
          </HeroHeading>
        </div>

        {/* Subheading */}
        <div className="pb-4">
          <HeroSubheading animate={!shouldReduceMotion}>
            Front-end Software Engineer and UX/UI Engineer
          </HeroSubheading>
        </div>

        {/* Description
        <HeroDescription animate={!shouldReduceMotion}>
          I create user-centered digital experiences
        </HeroDescription> */}

        <Button
          type="submit"
          size="lg"
          radius="xl"
          mt="md"
          style={{
            backgroundColor: connectTheme.button.background,
            color: connectTheme.button.text,
          }}
          styles={{
            root: {
              "&:hover": {
                backgroundColor: connectTheme.button.hoverBackground,
              },
            },
          }}
          onClick={handleScrollToConnect}
          rightSection={<FaRegHandshake size="2rem" className="inline-block mr-2" />}
        >
          Get in touch
        </Button>
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
