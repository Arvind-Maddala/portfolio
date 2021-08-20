import React from 'react';
import { motion } from "framer-motion";
import './style.css';

const WorkExperience = () => {
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
    <motion.ul className="work__experience" variants={container} initial="hidden" animate="visible">
     <motion.li className="work__experience--Mascorp" variants={item}>
       <div className="work__experience--logoDiv">
       <img className="work__experience--logo" src="images/Mascorp.png" alt="Mascorp logo" />
       </div>
      <div className="work__experience--details" >
      <h5 className="work__experience--duration">Jun 2020 - Present</h5>
      <h2 className="work__experience--Title">Customer Service Analyst</h2>
      <h3 className="work__experience--Company">Mascorp IT Solutions Pvt Ltd</h3>
      <ul>
        <li>Worked as SAP Basis Trainee providing technical support on SAPBasis systems, including establishing standards and requirements,evaluating and directing enhancements, and implementingsolutions for performance monitoring and system configuration,design, and implementation.</li>
      </ul>
      </div>
     </motion.li>
     <motion.li className="work__experience--Genpact" variants={item}>
     <div className="work__experience--logoDiv">
     <img  className="work__experience--logo" src="images/Genpact.png" alt="Mascorp logo" />
     </div>
     <div className="work__experience--details">
     <h5 className="work__experience--duration">Oct 2015 - Mar 2020</h5>
      <h2 className="work__experience--Title">Process Developer</h2>
      <h3 className="work__experience--Company">Genpact pvt ltd</h3>
      <ul>
        <li>Worked as a Quality analyst and providing the subject matterexpertise to acquisition consulting projects, ensuring excellence inthe technical process.</li>
        <li>Handled complex business projects like VIP, BBB, Deceased, Forum,Internal, High Profile, Deceased, Local Office & Twitter Escalations.</li>
      </ul>
     </div>
     </motion.li>
    </motion.ul>
  )
}

export default WorkExperience
