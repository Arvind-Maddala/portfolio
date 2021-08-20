import React from 'react';
import {Picture, About} from '../../components';
import {motion } from 'framer-motion';
import { pageTransition } from '../../helpers/PageTransitions';
import './style.css'
const Home = () => {
  return (
    <motion.div className="home" exit="out" animate="in" initial="out" variants={pageTransition}>
      <Picture props='Home' text='Hello! Welcome to my world'/>
      <About />
    </motion.div>
  )
}

export default Home
