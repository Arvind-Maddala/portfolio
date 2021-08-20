import React from 'react';
import {Picture, ContactMe} from '../../components';
import {motion } from 'framer-motion';
import { pageTransition } from '../../helpers/PageTransitions';
import './style.css'
const Contact = () => {
  return (
    <motion.div className="contact" exit="out" animate="in" initial="out" variants={pageTransition}>
      <Picture props='Contact' />
      <ContactMe />
    </motion.div>
  )
}

export default Contact
