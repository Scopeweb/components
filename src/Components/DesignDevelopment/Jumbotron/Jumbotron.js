import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Jumbotron extends Component {
	render() {

		return (
      <section className="pr__hero uk-section" id="pr__hero">
        <div className="uk-container">
          <div className="section-inner">
            <div className="hero-content uk-grid uk-grid-stack" data-uk-grid>
              <div className="uk-width-3-3@s uk-first-column">
                {/* <hr className="line pr__hr__primary" style={{width: 70}} /> */}
                <div className="space-between" />
                <h1 className="title uk-heading-hero" style={{opacity: 1, transform: 'translateY(0px)'}}>Our Process</h1>
                <p>
                  This is where your ideas evolve into products. We work fast, but we do not do it alone. We expect you to do the heavy lifting with us. We are the in-house team outside the house. We transform businesses into brands and help them grow online.
                </p>
                <p className="uk-margin-large-bottom">We'd love to tell you more, but we are currently re-thinking our website. Stay tuned! Meanwhile feel free to get in touch!</p>

                <a href="mailto:info@scopeweb.nyc">
                    <button className="uk-button uk-button-large uk-button-default uk-margin-top">Work with us<svg style={{marginLeft: '20px'}} width={35} height={7} viewBox="0 0 35 7" version="1.1"><g id="Canvas" fill="none"><g id="arrow-left-icon"><path id="triangle" d="M 3.5 0L 6.53109 5.25L 0.468911 5.25L 3.5 0Z" transform="matrix(0 1 -1 0 35 0)" fill="white" /><line id="Line" y1="-0.5" x2={30} y2="-0.5" transform="translate(0 4)" stroke="white" /></g></g></svg></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Jumbotron;
