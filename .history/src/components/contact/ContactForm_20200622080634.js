import React from 'react';


const ContactForm = () => (
  <section>
    <form
      method="post"
      action="https://www.flexyform.com/f/12a5c2b1813ebfb7e6966d80045d82f068ffdfa9"
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
            href="https://ohdaveed.github.io/hyperspace-portfolio/#intro"
            className="button submit"
          >
            Send Message
          </a>
        </li>
      </ul>
    </form>
  </section>
);

export default ContactForm;
