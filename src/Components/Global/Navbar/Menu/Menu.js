import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="menu" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                    <ul>
                        <li><Link to='/' activeClassName="uk-active">Home</Link></li>
                        <li><Link to='/about' activeClassName="uk-active">About</Link></li>
                        <li><Link to='/design-development' activeClassName="uk-active">Design &amp; Development</Link></li>
                        <li><Link to='/blog' activeClassName="uk-active">Blog</Link></li>
                        <li><Link to='#pr__contact'>Start a Project</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;