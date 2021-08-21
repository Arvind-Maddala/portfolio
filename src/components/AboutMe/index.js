import React, {useEffect} from 'react';
import { motion } from "framer-motion";
import './style.css';

const About = () => {
 
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
    <motion.ul className="about" variants={container} initial="hidden" animate="visible">
      <motion.li variants={item}>
      <h3 >About </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </motion.li>
     <motion.li variants={item}>
       <h3>Skills</h3>
        <p>These are my skills and this contains all the technologies and programming languages that I have learnt until now. I am constantly learning, therefore I may update this section more often.</p>
        <motion.ul className="about__skillicons" variants={container} initial="hidden" animate="visible" >
          <motion.li className="about__skill item" variants={item}>
          <img className="about__icon"  src="images/HTML5.png" alt="HTML"/>
          <p>HTML</p>
          </motion.li>
          <motion.li className="about__skill item" variants={item}>
          <img className="about__icon" src="images/css-logo.png" alt="CSS"/>
          <p>CSS</p>
          </motion.li>
          <motion.li className="about__skill item" variants={item}>
          <img className="about__icon" src="images/javascript.png" alt="Javascript"/>
          <p>JavaScript</p>
          </motion.li>
          <motion.li className="about__skill item" variants={item}>
          <img className="about__icon" src="images/Bootstrap.png" alt="Bootstrap"/>
          <p>Bootstrap</p>
          </motion.li>
          <motion.li className="about__skill item" variants={item}>
          <img className="about__icon" src="images/react.png" alt="React"/>
          <p>React</p>
          </motion.li>
          <motion.li className="about__skill item" variants={item}>
          <img className="about__icon" src="images/redux.png" alt="Redux"/>
          <p>Redux</p>
          </motion.li>
          <motion.li className="about__skill item" variants={item}>
          <img className="about__icon" src="images/firebase.png" alt="Firebase"/>
          <p>Firebase</p>
          </motion.li>
          <motion.li className="about__skill item" variants={item}>
          <img className="about__icon" src="images/nodejs.png" alt="Nodejs"/>
          <p>Nodejs</p>
          </motion.li>
          <motion.li className="about__skill item" variants={item}>
          <img className="about__icon" src="images/mongodb.png" alt="MongoDB"/>
          <p>MongoDB</p>
          </motion.li>
          <motion.li className="about__skill item" variants={item}>
          <img className="about__icon" src="images/figma.png" alt="Figma"/>
          <p>Figma</p>
          </motion.li>
          <motion.li className="about__skill item" variants={item}>
          <img className="about__icon" src="images/GitHub.png" alt="Git"/>
          <p>Git</p>
          </motion.li>
          <motion.li className="about__skill item" variants={item}>
          <img className="about__icon" src="images/Git.png" alt="Github"/>
          <p>Github</p>
          </motion.li>

        </motion.ul>
     </motion.li>
    </motion.ul>
 
  )
}

export default About
