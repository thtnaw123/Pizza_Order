import React from "react";
import { Link } from "react-router-dom";
import "./base.css";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["classic", "thin & crispy", "Thick Crust"];
  const containerVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 70 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        yoyo: Infinity,
      },
    },
  };
  const nextVariants = {
    hidden: { x: "-200vw" },
    visible: { x: 0, transition: { type: "spring", stiffness: 40 } },
  };
  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.2,
                originX: 0,
                color: "rgb(255, 122, 255)",
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/topping">
            <motion.button
              className="Next-Btn"
              variants={buttonVariants}
              whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
