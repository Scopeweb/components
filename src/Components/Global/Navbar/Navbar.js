import React, { Component } from 'react';

import PreNav from './PreNav/PreNav';
import Menu from './Menu/Menu';

class Navbar extends Component {
	render() {

		return (
      <div>
        <PreNav />
        <header className="pr__dark pr__header" data-uk-sticky="top: 100vh; animation: uk-animation-slide-top;">
        <div className="uk-container">
          <div className="inner">
            <div className="logo">
              <a href="/">
                <div className="brand-light" />
              </a>
            </div>
            <div className="navbar pr-font-second">
              <nav className="menu" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                <Menu />
              </nav>
            </div>
            <div className="navbar-tigger" data-uk-toggle="target: #navbar-mobile">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        </header>
      </div>
      );
    }
  }

export default Navbar;
