import React from 'react';
import {Picture, About, NavBar} from '../../components';
import {motion } from 'framer-motion';
import { pageTransition } from '../../helpers/PageTransitions';
import './style.css'
const Home = () => {
  return (
    <>
        <NavBar/>
    <motion.div className="home" exit="out" animate="in" initial="out" variants={pageTransition}>
      <Picture props='Home' text='Hello!'/>
      <About />
    </motion.div>
    </>
  )
}

export default Home
