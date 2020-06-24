import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Hola! I'm David.</h1>
      <h2>
        I'm a Pathologically Curious Full-Stack Developer.
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
    	<div class="icons-social">
			<a target="_blank" href="https://github.com/ohdaveed"><i class="fab fa-github"></i></a>
			<a target="_blank" href="https://twitter.com/ohdaveed"><i class="fab fa-twitter"></i></a>
			<a target="_blank" href="https://www.linkedin.com/in/darrizon"><i class="fab fa-linkedin"></i></a>
		
    </div>
  </section>
);


export default Introduction;
