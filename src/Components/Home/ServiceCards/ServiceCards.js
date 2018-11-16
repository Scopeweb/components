import React, { Component } from 'react';

class ServiceCards extends Component {
	render() {

		return (
      <section className="pr__features uk-section uk-padding-remove-bottom" id="pr_features">
        <div className="uk-container">
          <div className="section-inner">
            <div className="items-listing features-boxes uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m" data-uk-grid>
              <div className="item feature-box uk-active uk-first-column" style={{opacity: 1, transform: 'translateY(0px)'}}>
                <div className="inner">
                  <i className="icon pr-chart-bars pr__icon__large" style={{opacity: 1, transform: 'translateY(0px)'}} />
                  <h3 className="title uk-h4" style={{opacity: 1, transform: 'translateY(0px)'}}>Production Creation.</h3>
                  <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                  <p className="description" style={{opacity: 1, transform: 'translateY(0px)'}}>It is a long established fact that a reader will be
                    distracted by the readable content of a page.</p>
                  <a href="#" className="link uk-position-cover" style={{opacity: 1, transform: 'translateY(0px)'}} />
                </div>
              </div>
              <div className="item feature-box" style={{opacity: 1, transform: 'translateY(0px)'}}>
                <div className="inner">
                  <i className="icon pr-rocket pr__icon__large" style={{opacity: 1, transform: 'translateY(0px)'}} />
                  <h3 className="title uk-h4" style={{opacity: 1, transform: 'translateY(0px)'}}>Integrated Marketing.</h3>
                  <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                  <p className="description" style={{opacity: 1, transform: 'translateY(0px)'}}>There are many variations of passages of available, but the
                    majority alteration in some form.</p>
                  <a href="#" className="link uk-position-cover" style={{opacity: 1, transform: 'translateY(0px)'}} />
                </div>
              </div>
              <div className="item feature-box" style={{opacity: 1, transform: 'translateY(0px)'}}>
                <div className="inner">
                  <i className="icon pr-pie-chart pr__icon__large" style={{opacity: 1, transform: 'translateY(0px)'}} />
                  <h3 className="title uk-h4" style={{opacity: 1, transform: 'translateY(0px)'}}>Business Solutions.</h3>
                  <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                  <p className="description" style={{opacity: 1, transform: 'translateY(0px)'}}>The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour.</p>
                  <a href="#" className="link uk-position-cover" style={{opacity: 1, transform: 'translateY(0px)'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>    
      );
    }
  };

  export default ServiceCards;