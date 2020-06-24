import React from 'react';
import Scrollspy from 'react-scrollspy';

import Tab from './Tab';

const Sidebar = () => {
  const [tabs] = React.useState([
    { content: 'Daveed', href: 'intro' },
    { content: 'Projects', href: 'one' },
    { content: 'Skills', href: 'two' },
    { content: 'Get in touch', href: 'three' },
  ]);

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
          >
            <div
              class="canva-embed"
              data-design-id="DAEACOzj-R0"
              data-height-ratio="1.0000"
              style="padding:100.0000% 5px 5px 5px;background:rgba(0,0,0,0.03);border-radius:8px;"
            ></div>
            <script
              async
              src="https://www.canva.com/design/DAEACOzj-R0/nOOoSSpZleRb6B7aTuHEHw/view?utm_content=DAEACOzj-R0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
            ></script>
            <a href="#" target="_blank" rel="noopener">
              Black Lightning Icon Fitness Logo
            </a>{' '}
            by David Arrizon
            {tabs.map(tab => (
              <Tab key={tab.href} {...tab} />
            ))}
          </Scrollspy>
        </nav>
      </div>
    </section>
  );
}

export default Sidebar;
