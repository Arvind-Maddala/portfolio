import React, {useEffect} from 'react';
import { motion } from "framer-motion";
import './style.css';
import Aos from "aos";
import "aos/dist/aos.css";

const MyProjects = () => {
  useEffect(() =>{
    Aos.init({duration:1000});
  }, [])
 
  return (
    <div className="myproject">
     <div className="myproject__projects" >
     <div className="myproject__project"  data-aos="fade-up">
        <div >
          <img className="myproject__logo" alt="Color blaster" src="images/Colorblaster.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Color Blaster</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://color-blaster-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i className="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </div>
     <div className="myproject__project"  data-aos="fade-up">
        <div >
          <img className="myproject__logo" alt="MArio World" src="images/SuperMario.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Super Mario World</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://mario-world-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i className="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </div>
     <div className="myproject__project"  data-aos="fade-up">
        <div >
          <img className="myproject__logo" alt="Task-Hub webpage" src="images/Task-Hub.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Task-Hub</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://task-hub.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i className="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </div>
     <div className="myproject__project"  data-aos="fade-up">
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/Hooman.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Hooman</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://hooman-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i className="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </div>
     <div className="myproject__project"  data-aos="fade-up">
        <div >
          <img className="myproject__logo" alt="Cinema webpage" src="images/Cinema.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Cinema</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://cinema-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i className="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </div>
     <div className="myproject__project"  data-aos="fade-up">
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/StylesConference.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Styles Conference</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://styles-conference-by-arvind.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i className="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </div>
     <div className="myproject__project"  data-aos="fade-up">
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/Nixclix.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>NIXCLIX</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://nixclix.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i className="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </div>
    
     
    
     <div className="myproject__project"  data-aos="fade-up">
        <div >
          <img className="myproject__logo" alt="Todo webpage" src="images/Todo.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Todo</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://arvind-maddala.github.io/todowithcontextapi/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i className="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </div>
    </div>
    </div>
  )
}

export default MyProjects
