import catImg from "../assets/cat1.png"; // Adjust the path as necessary
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex-1 p-4 flex justify-center"
      id="me"
    >
      <div className="flex flex-col sm:flex-col md:flex-row items-start md:justify-evenly w-full">
        {/* Image - Hidden on mobile, visible on tablets and larger */}
        <div className="hidden sm:flex justify-center sm:w-full md:w-1/2">
          <img src={catImg} alt="Cat" width={400} height={300} />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left sm:w-full md:w-1/2 p-4">
          <div className="flex flex-row">
            <h2 className="text-3xl font-bold">
              Hi, I'm
              <span className="text-3xl font-bold text-cyan-400"> Shaun</span>,
              I design and build for users
            </h2>
          </div>
          <p className="text-2xl pt-2 text-gray-500">
            Specialised in research, design and build - for mobile apps, desktop
            software, websites - any kind of smooth interface really
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
