import React from 'react';
import {motion } from 'framer-motion';
import { pageTransition } from '../../helpers/PageTransitions';
import { MyProjects} from '../../components';
import './style.css'

const Projects = () => {
  return (
    <motion.div className="projects" exit="out" animate="in" initial="out" variants={pageTransition}>
      <MyProjects />
    </motion.div>
  )
}

export default Projects
