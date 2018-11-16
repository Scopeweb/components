import React, { Component } from 'react';

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
                  <li><a href="/about">About</a></li>
                  <li><a href="/design-development">Services</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="https://clients.scopeweb.nyc" target="_blank">Client Area</a></li>
                  <li><a href="#pr__contact">Start a Project</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      );
    }
  }

export default PreNav;