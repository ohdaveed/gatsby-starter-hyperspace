import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Hola! I'm David.</h1>
      <h2>
        I'm a Pathologically Curious Full-Stack Developer, Plant Dad, & Adventurer.
      </h2><br/>
      <ul className="actions">
        <li>
          <Scroll type="id" element="three">
            <a href="#three" className="button">
              Get In Touch
            </a>
          </Scroll>
        </li>
        <li>
          <button className="button">
            <a
              className="btnlink"
              href="https://drive.google.com/file/d/13b7c_6liByjAObxtE08Xdjx-S4oVNsDN/view?usp=sharing"
            >
              Resume
            </a>
          </button>
        </li>
      </ul>
    </div>
  </section>
);


export default Introduction;
