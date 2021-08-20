import React from 'react';
import './style.css'

const About = () => {
  return (
    <div className="about">
      <div>
      <h3>About </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
     <div>
       <h3>Skills</h3>
        <p>These are my skills and this contains all the technologies and programming languages that I have learnt until now. I am constantly learning, therefore I may update this section more often.</p>
        <div className="about__skillicons">
          <div className="about__skill">
          <img className="about__icon"  src="images/HTML5.png" alt="HTML"/>
          <p>HTML</p>
          </div>
          <div className="about__skill">
          <img className="about__icon" src="images/css-logo.png" alt="CSS"/>
          <p>CSS</p>
          </div>
          <div className="about__skill">
          <img className="about__icon" src="images/javascript.png" alt="Javascript"/>
          <p>JavaScript</p>
          </div>
          <div className="about__skill">
          <img className="about__icon" src="images/Bootstrap.png" alt="Bootstrap"/>
          <p>Bootstrap</p>
          </div>
          <div className="about__skill">
          <img className="about__icon" src="images/react.png" alt="React"/>
          <p>React</p>
          </div>
          <div className="about__skill">
          <img className="about__icon" src="images/redux.png" alt="Redux"/>
          <p>Redux</p>
          </div>
          <div className="about__skill">
          <img className="about__icon" src="images/firebase.png" alt="Firebase"/>
          <p>Firebase</p>
          </div>
          <div className="about__skill">
          <img className="about__icon" src="images/nodejs.png" alt="Nodejs"/>
          <p>Nodejs</p>
          </div>
          <div className="about__skill">
          <img className="about__icon" src="images/mongodb.png" alt="MongoDB"/>
          <p>MongoDB</p>
          </div>
          <div className="about__skill">
          <img className="about__icon" src="images/figma.png" alt="Figma"/>
          <p>Figma</p>
          </div>
          <div className="about__skill">
          <img className="about__icon" src="images/GitHub.png" alt="Git"/>
          <p>Git</p>
          </div>
          <div className="about__skill">
          <img className="about__icon" src="images/Git.png" alt="Github"/>
          <p>Github</p>
          </div>

        </div>
     </div>
    </div>
  )
}

export default About
