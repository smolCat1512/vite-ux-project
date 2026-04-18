import { useReducedMotion } from "framer-motion";
import { Box } from "@mantine/core";
import HeroHeading from "../design-system/hero/HeroHeading";
import HeroHighlight from "../design-system/hero/HeroHighlight";
import HeroSubheading from "../design-system/hero/HeroSubheading";
import ScrollDownButton from "../design-system/hero/ScrollDownButton";
import RoleType from "../design-system/hero/RoleType";
import ContactButton from "../design-system/hero/ContactButton";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

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

        <ContactButton animate={!shouldReduceMotion}>Get In Touch</ContactButton>
      </Box>

      <ScrollDownButton animate={!shouldReduceMotion} />
    </Box>
  );
};

export default Hero;
