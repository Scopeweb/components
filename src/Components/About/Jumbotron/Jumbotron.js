import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Jumbotron extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="pr__hero__wrap pr__dark" id="site-hero">
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
                    <header className="pr__header uk-sticky pr__dark" data-uk-sticky="top: 443; animation: uk-animation-slide-top;">
                        <div className="uk-container">
                            <div className="inner">
                                <div className="logo" style={{opacity: 1, transform: 'translateX(0px)'}}>
                                    <a href="/">
                                        <div className="brand-light" />
                                    </a>
                                </div>
                                <div className="navbar pr-font-second">
                                    <nav className="menu menu-light" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                                        <ul>
                                            <li><Link to='/' activeclassname="uk-active">Home</Link></li>
                                            <li className="uk-active"><Link to='/about' activeclassname="uk-active">About</Link></li>
                                            <li><Link to='/design-development' activeclassname="uk-active">Design &amp; Development</Link></li>
                                            <li><Link to='/blog' activeclassname="uk-active">Blog</Link></li>
                                            <li><Link to='#pr__contact'>Start a Project</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="navbar-tigger" data-uk-toggle="target: #navbar-mobile">
                                <span />
                                <span />
                                <span />
                                </div>
                            </div>
                        </div>
                    </header><div className="uk-sticky-placeholder" style={{height: 170, margin: 0}} hidden />{/* Site Header End */}
                    <section className="pr__hero uk-section" id="pr__hero">
                        <div className="section-inner">
                            <div className="uk-container">
                                <div className="inner uk-grid" data-uk-grid="true">
                                    <div className="left uk-width-expand uk-first-column">
                                        <h2 className="page-title uk-h1" style={{opacity: 1, transform: 'translateY(0px)'}}>About Scope Web</h2>
                                    </div>
                                    <div className="right uk-width-3-5@s">
                                        <p className="header-title">Scope Web is a people-first company. We strive to create a unique, engaging work environment that fosters creativity, loyalty and long-term commitment of our employees to the company thus makes our customers happy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* Site Hero End */}
                </div>
            </React.Fragment>
        );
    }
}

export default Jumbotron;