import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import PreNav from './PreNav/PreNav';
import Menu from './Menu/Menu';

class Navbar extends Component {
	render() {

		return (
      <div>
        <PreNav />
        <header className="pr__header" data-uk-sticky="top: 100vh; animation: uk-animation-slide-top;">
          <div className="uk-container">
            <div className="inner">
              <div className="logo">
                <a href="/">
                  <div className="brand" />
                </a>
              </div>
              <div className="navbar pr-font-second">
                <nav className="menu" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                  <Menu />
                  {/* <ul>
                    <li><a href="#pr__hero">Home</a></li>
                    <li><a href="#pr__services">Services</a></li>
                    <li><a href="#pr__works">Works</a></li>
                    <li><a href="#pr__about">About</a></li>
                    <li><a href="#pr__clients">Clients</a></li>
                    <li><a href="#pr__blog">Blog</a></li>
                    <li><a href="#pr__contact">Contact</a></li>
                  </ul> */}
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