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
          <p> Color Blaster is a simple game that was developed using HTML5 Canava and vanilla JavaScript. </p>
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
          <p> This is a custom styled Google map with multiple custom markers with a Super Mario theme, using the Google Maps JavaScript API.</p>
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
          <p> Task Hub is an list-making application inspired from Trello and was developed using React Hooks, Redux, FireBase for authentication, Material UI for styling, and React Dnd for Drag and Drop feature. All your Tasks can be organized by drag and dropping them across multiple cards.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://task-hub.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i className="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </div>
     <div className="myproject__project"  data-aos="fade-up">
        <div >
          <img className="myproject__logo" alt="Cinema webpage" src="images/Cinema.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Cinema</h2>
          <p>Cinema is an online movie booking app, made using Vanilla JavaScript, Bootstrap, HTML, and CSS. Movie Tickets can be booked in multiple cities, by choosing the desired lanuage and genre. Seat Numbers will be displayed upon select and ticket will be printed along with seat numbers and fare</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://cinema-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i className="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </div>
     <div className="myproject__project"  data-aos="fade-up">
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/Hooman.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Hooman</h2>
          <p> Hooman is a basic react app made using React Hooks. This app consists of multi page routing and fetches data from an external API.</p>
        </div>
        <div className="myproject__project--preview">
          <a href="https://hooman-by-aravind-maddala.netlify.app/" target="_blank" rel="noreferrer"><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Live Preview <i className="fas fa-external-link-square-alt"></i></motion.button></a>
        </div>
     </div>
     <div className="myproject__project"  data-aos="fade-up">
        <div >
          <img className="myproject__logo" alt="Hooman webpage" src="images/StylesConference.png"/>
        </div>
        <div className="myproject__project--info">
          <h2>Styles Conference</h2>
          <p> Styles Conference is an basic HTML and CSS website. This is an responsive website, and can be visited from any device. </p>
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
          <p>NIXCLIX is an multi page website that was developed using HTML, CSS, and Vanilla Javascript. This is an responsive website and can be visited from any device.</p>
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
          <p> Todo is a basic React App, build using React Hooks and context API for state management. CRUD operations can be performed on this app and the data is stored to local storage.</p>
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
