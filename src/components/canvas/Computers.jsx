import React from "react";
import programming from "../../assets/programming.png";
import { motion } from "framer-motion";

const Computers = () => {
  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className="hidden xl:flex justify-center items-center"
    >
      <img src={programming} alt="programming" className="w-[1900px] h-[600px]" />
    </motion.div>
  );
};

export default Computers;
