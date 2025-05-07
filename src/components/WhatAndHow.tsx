import { motion } from "framer-motion";

const WhatAndHow = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.1 }}
      className="hi-screen p-4 justify-center w-11/12"
      id="what"
    >
      <h2 className="text-3xl font-bold pb-6">What and How</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex justify-center">1</div>
        <div className="flex justify-center">2</div>
        <div className="flex justify-center">3</div>
        <div className="flex justify-center">4</div>
      </div>
    </motion.section>
  );
};

export default WhatAndHow;
