import { motion, useReducedMotion } from "framer-motion";
import { ThemeIcon } from "@mantine/core";
import CV from "../assets/Shaun Halliday CV.pdf";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaFileLines,
  FaGithub,
} from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/shaun-halliday-5001a6b2/",
  },
  {
    icon: FaEnvelope,
    label: "Email me",
    href: "mailto:shaunuxuidev@gmail.com",
  },
  {
    icon: FaFileLines,
    label: "View CV",
    href: CV,
  },
  {
    icon: FaGithub,
    label: "GitHub profile",
    href: "https://github.com/yourprofile",
  },
];

const Socials = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.nav
      className="p-4 flex justify-center"
      initial={
        shouldReduceMotion
          ? { scale: 1, opacity: 1 }
          : { scale: 0.8, opacity: 0 }
      }
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 1.5,
        delay: shouldReduceMotion ? 0 : 1,
      }}
      aria-label="Social links"
    >
      <ul className="flex flex-row justify-center gap-4">
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <li key={link.label}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <ThemeIcon
                  size="xl"
                  color="gray"
                  radius="xl"
                  className="cursor-pointer backdrop-blur-lg bg-gradient-to-r from-blue-100[.50] to-blue-200 border border-gray-200"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex items-center justify-center w-full h-full text-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    <IconComponent size={24} aria-hidden="true" />
                  </a>
                </ThemeIcon>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Socials;
