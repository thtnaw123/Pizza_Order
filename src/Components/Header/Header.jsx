import React from "react";
import "./header.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="header">
      <motion.div
        className="logo"
        initial={{ y: -100 }}
        animate={{ y: -2 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        drag
        dragConstraints={{ top: 10, left: 10, bottom: 0, right: 0 }}
      >
        <img src="../../media/pizza.svg" alt="pizza" />
        <h2>LOg0</h2>
      </motion.div>
      <div className="line">
        <hr />
      </div>
    </div>
  );
};

export default Header;
