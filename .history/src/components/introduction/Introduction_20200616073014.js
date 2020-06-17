import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Hola! I'm David.</h1>
      <p>
      Pathologically Curious Full-Stack Developer, Plant Dad, & Adventurer.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#three" className="button">
              Contact Me.
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
