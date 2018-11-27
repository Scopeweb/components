import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavDarkContact from '../../NavDarkContact/NavDarkContact';

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="menu" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                    <ul>
                        <div class="uk-navbar-item">
                            <li><Link to='/' activeClassName="uk-active">Home</Link></li>
                        </div>
                        <div class="uk-navbar-item">
                            <li><Link to='/about' activeClassName="uk-active">About</Link></li>
                        </div>
                        <div class="uk-navbar-item">
                            <li><Link to='/how-we-work' activeClassName="uk-active">Design &amp; Development</Link></li>
                        </div>
                        <div class="uk-navbar-item">
                            <li><a href="https://medium.com/scopeweb" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        </div>
                        <NavDarkContact />
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;