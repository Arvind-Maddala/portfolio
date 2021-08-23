import React from 'react';
import {NavBar, Picture, WorkExperience} from '../../components';
import {motion } from 'framer-motion';
import { pageTransition } from '../../helpers/PageTransitions';
import './style.css'
const Experience = () => {
  return (
    <>
    <NavBar/>
    <motion.div className="experience" exit="out" animate="in" initial="out" variants={pageTransition}>
      <Picture props='Experience'  text="My old jobs"/>
      <WorkExperience />
    </motion.div>
    </>
  )
}

export default Experience
