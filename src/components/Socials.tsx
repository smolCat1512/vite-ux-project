import { motion } from "framer-motion";
import { ThemeIcon } from "@mantine/core";
import CV from "../assets/Shaun Halliday CV.pdf";
import { FaLinkedinIn, FaEnvelope, FaFileLines, FaGithub } from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shaun-halliday-5001a6b2/",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:shaunhalliday1512@gmail.com",
  },
  {
    icon: FaFileLines,
    label: "CV",
    href: CV,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/yourprofile",
  },
];

const Socials = () => {
  return (
    <>
      <motion.div
        className="p-4 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <div className="flex flex-row justify-center gap-4">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <motion.div
                key={link.label}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <ThemeIcon
                  size="xl"
                  variant="light"
                  radius="xl"
                  className="cursor-pointer"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex items-center justify-center w-full h-full text-gray-600"
                  >
                    <IconComponent size={24} />
                  </a>
                </ThemeIcon>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Socials;
