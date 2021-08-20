import React from 'react';
import './style.css'

const ContactMe = () => {
  return (
    <div className="contact__me">
      <h2>Contact Me</h2>
     <form name="contact-form" method="POST" data-netlify="true">
       <input type="hidden" name="form-name" value="contact-form"/>
     <div className="contact__personal">
    <div className="contact__name--first">
      <label htmlFor="first-name">First Name</label>
    <input id="first-name" type="text" placeholder="Enter your first name" name="firstName"/>
    </div>
     <div className="contact__name--last">
     <label htmlFor="last-name">Last Name</label>
     <input id="last-name" type="text" placeholder="Enter your last name" name="lastName"/>
     </div>
     </div>
   <div className="contact__public">
     <div className="contact__public--email">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Enter your email" name="email"/>
     </div>
     <div className="contact__public--phone">
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="text" placeholder="Enter your phone number" name="phone"/>
     </div>
   </div>
     <div className="contact__message">
     <label htmlFor="message">Message</label>
      <textarea id="message" type="text" placeholder="Enter your message" name="message"></textarea>
     </div>
      <div className="contact__submit">
      <button type="submit" >Submit <i className="fas fa-chevron-right"></i></button>
      </div>
    </form>
    </div>
  )
}

export default ContactMe
