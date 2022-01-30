import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import {MenuList} from '../../helpers/MenuList'; 
import { motion } from "framer-motion";
import './style.css'

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1
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
  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <motion.ul className="nav" variants={container} initial="hidden" animate="visible">
       <motion.li className="menu" variants={item}>
         <img className="logo" alt="logo" src="images/Larry__logo2.png"/>
      </motion.li>

      <motion.div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </motion.div>
     
      <motion.ul className={clicked ? "menu-list" : "menu-list close"} > { MenuList.map(({url,title}, index) =>{
    return (
      <motion.li key={index}  variants={item}>
        <NavLink exact to={url} activeClassName="active">{title === "Home" ? <i className="fas fa-home"></i> : title}</NavLink>
      </motion.li>
    )
  })} 
      <motion.li variants={item}>
        <div className="about__socialicons">
          <a href='https://www.facebook.com/prince.arvind/' target="_blank" rel="noreferrer"> <i className="fab fa-facebook-square"></i> </a>
          <a  href='https://www.instagram.com/theordinary__guy/' target="_blank" rel="noreferrer">  <i className="fab fa-instagram"></i> </a>
          <a  href='https://www.linkedin.com/in/aravindmaddala/' target="_blank" rel="noreferrer"> <i className="fab fa-linkedin"></i> </a>
          <a href="https://github.com/Arvind-Maddala" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
        </div>
      </motion.li>
      <motion.li variants={item} className="nav__downloadCV"><a href='https://drive.google.com/file/d/1TAeVCaF2Z88IMKNsQ-n3N13qrOc9hcb_/view' target='_blank' rel="noreferrer"><button className="nav__downloadCVBtn">DOWNLOAD CV <i className="fas fa-download"></i></button></a>
      </motion.li>
      </motion.ul>
    </motion.ul>
  )
}

export default NavBar
