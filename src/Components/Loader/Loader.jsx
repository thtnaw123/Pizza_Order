import React from "react";
import { motion, useCycle } from "framer-motion";
import "./loader.css";

const loaderVariants = {
  animateOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { repeat: Infinity, repeatType: "reverse", duration: 1 },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
  animateTwo: {
    y: [0, -40],
    x: [0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
};
const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animateOne", "animateTwo");
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="loader"
      ></motion.div>
      <button onClick={() => cycleAnimation()}>Cycle Animation</button>
    </>
  );
};

export default Loader;
