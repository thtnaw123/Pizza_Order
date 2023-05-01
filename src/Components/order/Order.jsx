import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Order.css";

const containerVariants = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza, setshowModal }) => {
  const [showTitle, setshowTitle] = useState(true);
  setTimeout(() => setshowTitle(false), 4000);
  useEffect(() => {
    setTimeout(() => {
      setshowModal(true);
    }, 2000);
  }, [setshowModal]);
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial={"hidden"}
      animate={"visible"}
      exit="exit"
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -1000 }} transition={{ duration: 1 }}>
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with
      </motion.p>
      <motion.div style={{ marginLeft: 70 }} variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <p key={topping}>{topping}</p>
        ))}
      </motion.div>
      <Link to="/">
        <motion.button
          className="back-Home-Btn"
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Back To Home
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Order;
