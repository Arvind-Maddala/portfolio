import React from 'react';
import {Picture, Certifications} from '../../components';
import {motion } from 'framer-motion';
import { pageTransition } from '../../helpers/PageTransitions';
import './style.css';


const Achievements = () => {
  return (
    <motion.div className="achievements" exit="out" animate="in" initial="out" variants={pageTransition}>
      <Picture props='Achievements' text="My Certifications"/>
      <Certifications />
    </motion.div>
  )
}

export default Achievements
