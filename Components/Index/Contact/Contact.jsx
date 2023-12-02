import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div id='contact-container'>
        <div className="contact-head">
            CONTACT NOW
        </div>
      <textarea name="Contact Message" id="Contact" rows={10} cols={100} placeholder='Write Your Thoughts/Feedback............'>

      </textarea>

      <button type='submit' id='contact-button'> Send Now</button>

    </div>
  )
}

export default Contact
