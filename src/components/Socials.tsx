import { Link } from 'react-router-dom'; // Add this import
import { motion, useReducedMotion } from "framer-motion";
import { Anchor, List, ThemeIcon, useMantineTheme } from "@mantine/core";
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
    external: true,
  },
  {
    icon: FaEnvelope,
    label: "Email me",
    href: "mailto:shaunuxuidev@gmail.com",
    external: true,
  },
  {
    icon: FaFileLines,
    label: "View CV",
    href: "/cv",
    external: false,
  },
  {
    icon: FaGithub,
    label: "GitHub profile",
    href: "https://github.com/yourprofile",
    external: true,
  },
];

const Socials = () => {
  const shouldReduceMotion = useReducedMotion();

  const theme = useMantineTheme();
  const iconColor =
    theme.other?.hero?.socials?.iconColor ?? theme.colors.gray[6];
  const glow = theme.other?.hero?.socials?.glow ?? false;
  const circleColor =
    theme.other?.hero?.socials?.circleColor ?? theme.colors.gray[2];

  return (
    <motion.nav
      className="p-8 flex justify-center"
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
      <List className="flex flex-row justify-center gap-8">
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <List.Item key={link.label}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <ThemeIcon
                  size="xl"
                  radius="xl"
                  className="cursor-pointer"
                  color={circleColor}
                  // style={{
                  //   boxShadow: glow
                  //     ? `0 0 8px 2px ${theme.other?.hero?.socials?.glowColor ||
                  //         iconColor}`
                  //     : "none",
                  // }}
                >
                  {link.external ? (
                    <Anchor
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <IconComponent
                        size={24}
                        aria-hidden="true"
                        color={iconColor}
                        filter={
                          glow
                            ? `drop-shadow(0 0 10px ${iconColor}) drop-shadow(0 0 20px ${iconColor}) drop-shadow(0 0 30px ${iconColor})`
                            : undefined
                        }
                      />
                    </Anchor>
                  ) : (
                    <Link
                      to={link.href}
                      target="_blank"
                      aria-label={link.label}
                    >
                      <IconComponent
                        size={24}
                        aria-hidden="true"
                        color={iconColor}
                        filter={
                          glow
                            ? `drop-shadow(0 0 10px ${iconColor}) drop-shadow(0 0 20px ${iconColor}) drop-shadow(0 0 30px ${iconColor})`
                            : undefined
                        }
                      />
                    </Link>
                  )}
                </ThemeIcon>
              </motion.div>
            </List.Item>
          );
        })}
      </List>
    </motion.nav>
  );
};

export default Socials;
