import React from 'react';
import './style.css'

const Certifications = () => {
  return (
    <div className="certifications">
      <div className="certifications__React">
        <img src="images/HackerRank.png" alt="HackerRank logo" />
        <div className="certification__titles">
        <h4><i className="fas fa-certificate"></i>React (Basic) Certificate</h4>
        <p> This Certification covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.</p>
        <button className="certification__verify"><a href="https://www.hackerrank.com/certificates/3a1d6a6ea887" target="_blank" rel="noreferrer">See Credential <i className="fas fa-chevron-right"></i></a></button>
        </div>
      </div>
      <div className="certifications__responsiveWebDesign">
        <img src="images/Freecodecamp.png" alt="HackerRank logo" />
        <div className="certification__titles">
        <h4><i className="fas fa-certificate"></i>Responsive Web Design</h4>
        <p>This certification is achieved by developing webpages that respond to different screen sizes by building a Twitter card with Flexbox, and a complex blog layout with CSS Grid.</p>
        <button className="certification__verify"><a href="https://www.freecodecamp.org/certification/arvind_maddala/responsive-web-design" target="_blank" rel="noreferrer">See Credential<i className="fas fa-chevron-right"></i></a></button>
        </div>
      </div>
      <div className="certifications__JavaScript">
        <img src="images/HackerRank.png" alt="HackerRank logo" />
        <div className="certification__titles">
        <h4><i className="fas fa-certificate"></i>JavaScript (Basic) Certificate</h4>
        <p>The certification exam covers the topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.</p>
        <button className="certification__verify"><a href="https://www.hackerrank.com/certificates/85202619874a" target="_blank" rel="noreferrer">See Credential <i className="fas fa-chevron-right"></i></a></button>
        </div>
      </div>
    </div>
  )
}

export default Certifications
