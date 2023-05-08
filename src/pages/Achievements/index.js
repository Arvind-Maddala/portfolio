import React from "react";
import { Picture, Certifications, NavBar } from "../../components";
import { motion } from "framer-motion";
import { pageTransition } from "../../helpers/PageTransitions";
import "./style.css";

const Achievements = () => {
  return (
    <>
      <NavBar />
      <motion.div
        className="achievements"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
      >
        <Picture props="Achievements" text="Online test?!" />
        <Certifications />
      </motion.div>
    </>
  );
};

export default Achievements;
