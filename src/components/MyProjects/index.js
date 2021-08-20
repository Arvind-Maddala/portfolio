import React from 'react';
import { motion } from "framer-motion";
import './style.css';

const MyProjects = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
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
    <div className="myproject">
     <motion.ul className="myproject__projects" variants={container} initial="hidden" animate="visible">
     <motion.li className="myproject__project" variants={item}>
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/Hooman.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Hooman</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://hooman-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i class="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </motion.li>
     <motion.li className="myproject__project" variants={item}>
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/Hooman.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Hooman</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://hooman-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i class="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </motion.li>
     <motion.li className="myproject__project" variants={item}>
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/Hooman.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Hooman</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://hooman-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i class="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </motion.li>
     <motion.li className="myproject__project" variants={item}>
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/Hooman.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Hooman</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://hooman-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i class="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </motion.li>
     <motion.li className="myproject__project" variants={item}>
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/Hooman.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Hooman</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://hooman-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i class="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </motion.li>
     <motion.li className="myproject__project" variants={item}>
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/Hooman.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Hooman</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://hooman-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i class="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </motion.li>
     <motion.li className="myproject__project" variants={item}>
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/Hooman.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Hooman</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://hooman-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i class="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </motion.li>
     <motion.li className="myproject__project" variants={item}>
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/Hooman.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Hooman</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://hooman-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i class="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </motion.li>
    
    </motion.ul>
    </div>
  )
}

export default MyProjects
