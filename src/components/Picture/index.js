import React from 'react';
import { motion } from "framer-motion";
import './style.css';

const Picture = ({props, text}) => {
  return (
    <motion.div className="picture" initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 25
    }}>
      <motion.div animate={{ scale: 1.4 }}
    transition={{ duration: 1.1 }}>
      <h3 className="picture__title">{text}</h3>
      </motion.div>
      <img className ="picture__img" src={`images/${props}.png`} alt="Hello" />
    </motion.div>
  )
}

export default Picture
