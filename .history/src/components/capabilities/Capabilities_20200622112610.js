import React from 'react';
import { Link } from 'gatsby';

import CapabilityList from './CapabilityList';

const Capabilities = () =>
  <section id="two" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>Tech Stacks</h2>
      <p>
       These are a few of my favorite things...
      </p>
      <div className="features">
        <CapabilityList />
      </div>
      <ul className="actions">
        <li>
          <Link className="button" to="/generic">
            Learn more
          </Link>
        </li>
      </ul>
    </div>
  </section>

export default Capabilities;
