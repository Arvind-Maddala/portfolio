import React from 'react';
import './style.css'

const ContactMe = () => {
  return (
    <div className="contact__me">
     <form name="contact-form" method="POST" data-netlify="true">
       <input type="hidden" name="form-name" value="contact-form"/>
     <div>
     <input type="text" placeholder="Enter your first name" name="firstName"/>
      <input type="text" placeholder="Enter your last name" name="lastName"/>
     </div>
   <div>
   <input type="text" placeholder="Enter your email" name="email"/>
      <input type="text" placeholder="Enter your phone number" name="phone"/>
   </div>
      <textarea type="text" placeholder="Enter your message" name="message"></textarea>
      <button type="submit" >Submit</button>
    </form>
    </div>
  )
}

export default ContactMe
