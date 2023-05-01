import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.9,
      repeat: Infinity,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 0.7,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

function Home() {
  const [distance, setDistance] = useState(4);
  const [box, setBox] = useState(false);

  const collision = () => {
    if (distance > 20) {
      console.log("collide ", distance);
      setBox(true);
    }
  };
  // useEffect(() => {
  //   setBox(true);
  // }, []);

  return (
    <>
      <motion.div
        className="homeContainer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit={"exit"}
      >
        <div className="msg">
          <motion.h1 animate={{ color: "black" }}>
            Welcome to the Joint!
          </motion.h1>
        </div>
        <Link to={"/base"}>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="btn"
          >
            Create Your Pizza
          </motion.button>
        </Link>
        <Loader />
      </motion.div>

      <motion.div
        className="object"
        animate={{
          x: `${distance}vw`,
          transition: {
            delay: 0.3,
            duration: 0.7,
          },
        }}
      ></motion.div>
      {box && <div className="object2"></div>}
      <button
        onClick={() => {
          setDistance(distance + 5);
          collision();
        }}
      >
        move
      </button>
    </>
  );
}

export default Home;
