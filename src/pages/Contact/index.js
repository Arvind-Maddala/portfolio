import React from 'react';
import {Picture, ContactMe, NavBar} from '../../components';
import {motion } from 'framer-motion';
import { pageTransition } from '../../helpers/PageTransitions';
import './style.css'
const Contact = () => {
  return (
    <>
          <NavBar/>
    <motion.div className="contact" exit="out" animate="in" initial="out" variants={pageTransition}>
      <Picture props='Contact'  text="Mail Me!"/>
      <ContactMe />
    </motion.div>
    </>
  )
}

export default Contact
