import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Jumbotron extends Component {
	render() {

		return (
            <section className="pr__hero uk-section" id="pr__hero">
                <div className="uk-container">
                    <div className="section-inner">
                        <div className="hero-content uk-grid uk-grid-stack" data-uk-grid>
                            <div className="uk-width-2-3@s uk-first-column">
                                <hr className="line pr__hr__primary" style={{width: 70}} />
                                <h2 className="title uk-heading-hero" style={{opacity: 1, transform: 'translateY(0px)'}}>People, Passion &amp; Technology.</h2>
                                <Link to="/how-we-work">
                                    <button className="uk-button uk-button-large uk-button-default uk-margin-top">Discover how we work</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      );
    }
  }

export default Jumbotron;