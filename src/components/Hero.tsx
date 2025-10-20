import { motion } from "framer-motion";
import Socials from "./Socials";
import { Anchor, ThemeIcon } from "@mantine/core";
import { FaChevronDown } from "react-icons/fa6";

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
          <Socials />
        </div>
        <div className="mt-32 flex justify-center">
          <motion.div
            initial={{ y: 0, opacity: 0.3 }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="cursor-pointer border-3 border-black rounded-full p-2 hover:bg-gray-100 size-8 flex items-center justify-center"
            >
              <Anchor
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <FaChevronDown size={16} color="black" />
              </Anchor>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
