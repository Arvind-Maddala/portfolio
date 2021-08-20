import React from 'react';
import {motion } from 'framer-motion';
import { pageTransition } from '../../helpers/PageTransitions';
import {Picture, About} from '../../components';
import './style.css'

const Projects = () => {
  return (
    <motion.div className="projects" exit="out" animate="in" initial="out" variants={pageTransition}>
      <Picture props='Projects'/>
      <About />
    </motion.div>
  )
}

export default Projects
