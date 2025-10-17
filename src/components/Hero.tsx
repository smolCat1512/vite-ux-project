import { motion } from "framer-motion";
import { ThemeIcon } from "@mantine/core";
import { Mail, LucideFileText, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shaun-halliday-5001a6b2/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:shaunhalliday1512@gmail.com",
  },
  {
    icon: LucideFileText,
    label: "CV",
    href: "/path-to-your-cv.pdf",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourprofile",
  },
];

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col">
        {/* Text Section */}
        <div className="text-center justify-center w-10/12 mx-auto md:w-2/3">
          <motion.div
            className="flex flex-row items-center justify-center pb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold">
              Hi, I'm
              <span className="text-3xl font-bold text-cyan-400"> Shaun</span>,
              I design and build for users
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-2xl text-gray-500 text-center w-10/12 mx-auto md:w-2/3 pb-4">
              I love to research, design and build - for mobile apps, desktop
              software, websites - any kind of smooth interface really
            </p>
          </motion.div>
          <motion.div
            className="p-4 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
