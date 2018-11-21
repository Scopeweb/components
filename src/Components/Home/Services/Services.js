import React, { Component } from 'react';
import DigitalStrategy from './DigitalStrategy/DigitalStrategy';
import UxDesign from './UxDesign/UxDesign';
import DigitalMarketing from './DigitalMarketing/DigitalMarketing';
import ContentStrategy from './ContentStrategy/ContentStrategy';
import DesignConcept from './DesignConcept/DesignConcept';
import SocialMedia from './SocialMedia/SocialMedia';

class Services extends Component {
    render() {
        return (
            <section className="pr__services pr__section uk-section uk-section-large" id="pr__services">
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
                            <DigitalStrategy />
                            <UxDesign />
                            <DigitalMarketing />
                            <ContentStrategy />
                            <DesignConcept />
                            <SocialMedia />
                            {/* <div className="item service-box uk-grid-margin uk-first-column">
                                <div className="inner">
                                <i className="overlay-icon icon pr-line-target" />
                                <h5 className="title uk-h5">Media Planing</h5>
                                <i className="icon pr-arrow-right" />
                                <a href="#" className="link uk-position-cover" />
                                </div>
                            </div>
                            <div className="item service-box uk-grid-margin">
                                <div className="inner">
                                <i className="overlay-icon icon pr-line-lightbulb" />
                                <h5 className="title uk-h5">Brand Identity</h5>
                                <i className="icon pr-arrow-right" />
                                <a href="#" className="link uk-position-cover" />
                                </div>
                            </div>
                            <div className="item service-box uk-grid-margin">
                                <div className="inner">
                                <i className="overlay-icon icon pr-line-search" />
                                <h5 className="title uk-h5">SEO Optimization</h5>
                                <i className="icon pr-arrow-right" />
                                <a href="#" className="link uk-position-cover" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        );
    }
}

export default Services;