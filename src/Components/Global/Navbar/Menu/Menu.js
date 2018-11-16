import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="menu" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                    <ul>
                        <li><NavLink exact activeclassname="uk-active" to='/'>Home</NavLink></li>
                        <li><NavLink exact activeClassname="uk-active" to='/about'>About</NavLink></li>
                        <li><NavLink exact activeclassname="uk-active" to='/design-development'>Design &amp; Development</NavLink></li>
                        <li><NavLink exact activeclassname="uk-active" to='/blog'>Blog</NavLink></li>
                        <li><NavLink exact activeclassname="uk-active" to='#pr__contact'>Start a Project</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;