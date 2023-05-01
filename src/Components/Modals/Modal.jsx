import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./modal.css";

const backDropVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariant = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: 200, opacity: 1 },
  transition: {
    type: "spring",
    delay: 0.2,
  },
};
const Modal = ({ showModal, setshowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backDrop"
          variants={backDropVariant}
          initial={"hidden"}
          animate="visible"
          exit={"hidden"}
        >
          <motion.div
            className="modal"
            variants={modalVariant}
            initial="hidden"
            animate="visible"
          >
            <p>Do you want another pizza order?</p>
            <Link to="/" className="theLink">
              <button>start again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
