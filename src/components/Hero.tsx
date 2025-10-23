import { motion } from "framer-motion";
import Socials from "./Socials";
import { Anchor, Typography } from "@mantine/core";
import { FaChevronDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col">
        <div className="text-center justify-center mx-auto w-10/12 md:w-auto lg:w-auto">
          <motion.div
            className="flex flex-row items-center justify-center pb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl font-bold">
              Hi, I'm
              <span className="text-3xl font-bold text-orange-700"> Shaun</span>
              , I design and build for
              <span className="text-3xl font-bold text-orange-700"> users</span>
            </h1>
          </motion.div>
          <motion.div 
          className="pb-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          >
          <Typography className="text-gray-500 text-center text-2xl">
            Software Engineer and UX/UI Engineer
          </Typography>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography className="text-2xl text-gray-500 text-center w-10/12 mx-auto md:w-2/3 pb-4">
              I create user-centered digital experiences
            </Typography>
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
            onClick={() => {
              const techSection = document.getElementById("technologies");
              if (techSection) {
                techSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <div className="cursor-pointer border-3 border-black rounded-full p-2 hover:bg-gray-100 size-8 flex items-center justify-center">
              <Anchor>
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
