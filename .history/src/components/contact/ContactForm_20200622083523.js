import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';


const ContactForm = () => {

   const [serverState, setServerState] = useState({
     submitting: false,
     status: null,
   });
   const handleServerResponse = (ok, msg, form) => {
     setServerState({
       submitting: false,
       status: { ok, msg },
     });
     if (ok) {
       form.reset();
     }
   };
   const handleOnSubmit = e => {
     e.preventDefault();
     const form = e.target;
     setServerState({ submitting: true });
     axios({
       method: 'post',
       url: 'https://getform.io/f/92c091ba-bfc3-492c-a871-37d1a03fb00e',
       data: new FormData(form),
     })
       .then(r => {
         handleServerResponse(true, 'Thanks!', form);
       })
       .catch(r => {
         handleServerResponse(false, r.response.data.error, form);
       });
   };


  <section>
    <form
      method="post"
      action="https://getform.io/f/92c091ba-bfc3-492c-a871-37d1a03fb00e"
    >
      <div className="fields">
        <div className="field half">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" />
        </div>
      </div>
      <ul className="actions">
        <li>
          <a
            
            className="button submit"
          >
            Send Message
          </a>
        </li>
      </ul>
    </form>
  </section>
}

export default ContactForm;
