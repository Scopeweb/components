import React, { Component } from 'react';

import NavLightContact from '../../NavLightContact/NavLightContact';

class PreNav extends Component {
	render() {

		return (
        <div>
          <div className="pr__mobile__nav" id="navbar-mobile" data-uk-offcanvas="overlay: true; flip: true; mode: none">
            <div className="uk-offcanvas-bar">
              <button className="uk-offcanvas-close" type="button" data-uk-close="ratio: 2;" />
              <nav className="menu" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                <ul data-uk-scrollspy="target: > li; cls:uk-animation-slide-right; delay: 100; repeat: true;">
                  <li><a href="/">Home</a></li>
                  {/* <li><a href="/about">About</a></li>
                  <li><a href="/how-we-work">Services</a></li>
                  <li><a href="/blog">Blog</a></li> */}
                  <li><a href="https://clients.scopeweb.nyc" target="_blank" rel="noopener noreferrer">Client Area</a></li>
                  <li><a href="mailto:info@scopeweb.nyc">Start a Project</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      );
    }
  }

export default PreNav;
