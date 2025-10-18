import { motion } from "framer-motion";
import Socials from "./Socials";

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
      </div>
    </section>
  );
};

export default Hero;
