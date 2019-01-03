import React, { Component } from 'react';
import WebDevelopment from './WebDevelopment/WebDevelopment';
import UxDesign from './UxDesign/UxDesign';
import DigitalMarketing from './DigitalMarketing/DigitalMarketing';
import ContentStrategy from './ContentStrategy/ContentStrategy';
import AppDevelopment from './AppDevelopment/AppDevelopment';
import SocialMedia from './SocialMedia/SocialMedia';

class Services extends Component {
  render() {
    return (
      <section className="pr__dark pr__services pr__section uk-section uk-section-large" id="pr__services">
        <div className="section-outer">
          <div className="section-heading">
            <div className="uk-container">
              <div className="inner">
                <div className="left">
                  <hr className="line pr__hr__secondary" />
                  <h2 className="title uk-h1">Services.</h2>
                  <span className="subtitle pr__heading__secondary">We work with you, Not for you</span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-inner">
          <div className="uk-container">
              <div className="items-listing services-boxes uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s" data-uk-grid>
                <AppDevelopment />
                <WebDevelopment />
                <UxDesign />
                <ContentStrategy />
                <DigitalMarketing />
                <SocialMedia />
              </div>
          </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
