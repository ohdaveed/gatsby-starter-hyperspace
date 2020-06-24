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
              src="https:&#x2F;&#x2F;sdk.canva.com&#x2F;v1&#x2F;embed.js"
            ></script>
            <a
              href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEACOzj-R0&#x2F;view?utm_content=DAEACOzj-R0&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
              target="_blank"
              rel="noopener"
            >
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
