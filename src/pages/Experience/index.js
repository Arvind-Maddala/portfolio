import React from 'react';
import {Picture, About} from '../../components';
import {motion } from 'framer-motion';
import { pageTransition } from '../../helpers/PageTransitions';
import './style.css'
const Experience = () => {
  return (
    <motion.div className="experience" exit="out" animate="in" initial="out" variants={pageTransition}>
      <Picture props='Experience' />
      <About />
    </motion.div>
  )
}

export default Experience
