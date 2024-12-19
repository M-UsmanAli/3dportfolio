import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 2)} key={index}>
        <Tilt
          className="w-[88px] h-[88px] flex justify-center items-center 
                    bg-gradient-to-r from-white to-gray-200 rounded-full shadow-md"
          key={technology.name}
          style={{
            // Apply polygon shape to the entire Tilt div
            clipPath: " polygon(50% 0%, 93% 11%, 100% 50%, 93% 89%, 50% 100%, 7% 89%, 0% 50%, 7% 11%)",
            position: "relative",
            overflow: "hidden", // Ensure the content stays inside the polygon shape
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, 0], // Rotate back and forth
            }}
            transition={{
              repeat: Infinity, // Infinite loop
              repeatType: "reverse", // Reverse the animation on each cycle
              duration: 4, // Time taken to complete one cycle
              ease: "linear", // Smooth, continuous movement
            }}
          >
            <div options={{ max: 225, scale: 1, speed: 350 }} >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
              />
            </div>
          </motion.div>
        </Tilt>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
