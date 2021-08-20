import React from 'react';
import {Picture, WorkExperience} from '../../components';
import {motion } from 'framer-motion';
import { pageTransition } from '../../helpers/PageTransitions';
import './style.css'
const Experience = () => {
  return (
    <motion.div className="experience" exit="out" animate="in" initial="out" variants={pageTransition}>
      <Picture props='Experience'  text="Old companies I've worked for!"/>
      <WorkExperience />
    </motion.div>
  )
}

export default Experience
