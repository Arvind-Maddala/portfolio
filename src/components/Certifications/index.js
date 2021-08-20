import React from 'react';
import { motion } from "framer-motion";

import './style.css'

const Certifications = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  
  return (

    <motion.ul className="certifications" variants={container} initial="hidden" animate="visible">
      <motion.li  className="certifications__React" variants={item}>
        <img src="images/HackerRank.png" alt="HackerRank logo" />
        <div className="certification__titles">
        <h4><i className="fas fa-certificate"></i>React (Basic) Certificate</h4>
        <p> This Certification covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.</p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="certification__verify"><a href="https://www.hackerrank.com/certificates/3a1d6a6ea887" target="_blank" rel="noreferrer">See Credential <i className="fas fa-chevron-right"></i></a></motion.button>
      </div>
      </motion.li>
      <motion.li  className="certifications__responsiveWebDesign"variants={item}>
        <img src="images/Freecodecamp.png" alt="HackerRank logo" />
        <div className="certification__titles">
        <h4><i className="fas fa-certificate"></i>Responsive Web Design</h4>
        <p>This certification is achieved by developing webpages that respond to different screen sizes by building a Twitter card with Flexbox, and a complex blog layout with CSS Grid.</p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="certification__verify"><a href="https://www.freecodecamp.org/certification/arvind_maddala/responsive-web-design" target="_blank" rel="noreferrer">See Credential<i className="fas fa-chevron-right"></i></a></motion.button>
        </div>
      </motion.li>
      <motion.li  className="certifications__JavaScript"variants={item}>
        <img src="images/HackerRank.png" alt="HackerRank logo" />
        <div className="certification__titles">
        <h4><i className="fas fa-certificate"></i>JavaScript (Basic) Certificate</h4>
        <p>The certification exam covers the topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.</p>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="certification__verify"><a href="https://www.hackerrank.com/certificates/85202619874a" target="_blank" rel="noreferrer">See Credential <i className="fas fa-chevron-right"></i></a></motion.button>
        </div>
      </motion.li>
    </motion.ul>
    
  )
}



export default Certifications
