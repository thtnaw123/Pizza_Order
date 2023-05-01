import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./topping.css";
import { motion } from "framer-motion";

const Topping = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  const containerVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring" },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const [move, setMove] = useState(false);
  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    >
      <h2>Step 2: Choose Toppings</h2>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.2,
                originX: 0,
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          className="orderBtn"
          whileHover={{
            scale: 1.2,
            background: "black",
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Order
        </motion.button>
      </Link>

      <motion.div
        animate={{ x: move ? -200 : 200, rotate: 310 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="box"
        onClick={() => {
          setMove(!move);
        }}
      ></motion.div>
    </motion.div>
  );
};

export default Topping;
