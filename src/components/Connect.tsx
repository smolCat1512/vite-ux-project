import { motion } from "framer-motion";

const Connect = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.1 }}
      className="hi-screen p-4 justify-center w-11/12"
      id="connect"
    >
      <h2 className="text-3xl font-bold pb-6">Connect</h2>
    </motion.section>
  );
};

export default Connect;
