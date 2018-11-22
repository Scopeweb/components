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
                  <h3 className="title uk-h4" style={{opacity: 1, transform: 'translateY(0px)'}}>Product Creation.</h3>
                  <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                  <p className="description" style={{opacity: 1, transform: 'translateY(0px)'}}>
                    Your website is bigger than just a placeholder. It encompasses everything you do. From your products to customer experience, every touch point should be a true reflection of your company.
                  </p>
                  <a href="/how-we-work" className="link uk-position-cover" style={{opacity: 1, transform: 'translateY(0px)'}} />
                </div>
              </div>
              <div className="item feature-box" style={{opacity: 1, transform: 'translateY(0px)'}}>
                <div className="inner">
                  <i className="icon pr-rocket pr__icon__large" style={{opacity: 1, transform: 'translateY(0px)'}} />
                  <h3 className="title uk-h4" style={{opacity: 1, transform: 'translateY(0px)'}}>Part of your team.</h3>
                  <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                  <p className="description" style={{opacity: 1, transform: 'translateY(0px)'}}>
                    We're invested in your success. Every solution is created with your needs in mind to reach new audiences or the same audience in a different way. We're an extension of your business.
                  </p>
                  <a href="/how-we-work" className="link uk-position-cover" style={{opacity: 1, transform: 'translateY(0px)'}} />
                </div>
              </div>
              <div className="item feature-box" style={{opacity: 1, transform: 'translateY(0px)'}}>
                <div className="inner">
                  <i className="icon pr-pie-chart pr__icon__large" style={{opacity: 1, transform: 'translateY(0px)'}} />
                  <h3 className="title uk-h4" style={{opacity: 1, transform: 'translateY(0px)'}}>Clear Communication.</h3>
                  <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                  <p className="description" style={{opacity: 1, transform: 'translateY(0px)'}}>
                    The key to a successful partnership is collaboration. Open, transparent discussions will ensure that we exceed expectations, meet your deadline, and stay within budget.
                  </p>
                  <a href="/how-we-work" className="link uk-position-cover" style={{opacity: 1, transform: 'translateY(0px)'}} />
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