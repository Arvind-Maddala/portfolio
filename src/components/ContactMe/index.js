import React from 'react';
import './style.css';
import { motion } from "framer-motion";

const ContactMe = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  return (
    <motion.ul className="contact__me"  variants={container} initial="hidden"  animate="visible">
      <h2>Contact Me</h2>
     <form name="contact-form" method="POST" data-netlify="true">
       <input type="hidden" name="form-name" value="contact-form" />
     <motion.li className="contact__personal" variants={item}>
    <div className="contact__name--first">
      <label htmlFor="first-name">First Name</label>
    <input id="first-name" type="text" placeholder="Enter your first name" name="firstName" required/>
    </div>
     <div className="contact__name--last">
     <label htmlFor="last-name">Last Name</label>
     <input id="last-name" type="text" placeholder="Enter your last name" name="lastName" />
     </div>
     </motion.li>
   <motion.li className="contact__public" variants={item}>
     <div className="contact__public--email">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Enter your email" name="email" required/>
     </div>
     <div className="contact__public--phone">
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="text" placeholder="Enter your phone number" name="phone"/>
     </div>
   </motion.li>
     <motion.li className="contact__message" variants={item}>
     <label htmlFor="message">Message</label>
      <textarea id="message" type="text" placeholder="Enter your message" name="message"></textarea>
     </motion.li>
      <motion.li className="contact__submit" variants={item}>
      <motion.button className="contact__for--submit" type="submit" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} >Submit <i className="fas fa-chevron-right"></i></motion.button>
      </motion.li>
    </form>
    </motion.ul>
  )
}

export default ContactMe
