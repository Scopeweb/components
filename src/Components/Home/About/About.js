import React, { Component } from 'react';
import YouTube from 'react-youtube';

import OfficeNYC from '../../../Images/office-nyc.png';
import OfficeNL from '../../../Images/office-nl.png';

class About extends Component {

    render() {
        const opts = {
            height: '600',
            width: '790',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                controls: 1,
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 3,
                modestbranding: 1,
                rel: 0
            }
        };

        return (
            <section className="pr__about pr__section uk-section uk-section-large" id="pr__about">
                <div className="section-outer">
                    <div className="section-heading">
                        <div className="outer">
                            <div className="uk-container">
                                <div className="inner uk-grid" data-uk-grid>
                                    <div className="left uk-width-expand uk-first-column">
                                    <hr className="line pr__hr__secondary" />
                                    <h2 className="title uk-h1">About.</h2>
                                        <span className="subtitle pr__heading__secondary">We're more than a digital agency</span>
                                    </div>
                                    <div className="right uk-width-3-5@s">
                                        <p>Great businesses rise to the top with the right amount of agitation. We shake things up. At Scope we imagine, plan and bring consumer internet experience to life. We provide a mixture of consulting, design and engineering.</p>
                                    </div>
                                </div>
                            </div>{/* Container End */}
                        </div>{/* Outer End */}
                    </div>{/* Heading End */}
                    <div className="section-inner">
                    <div className="uk-container">
                        <div className="gallery-boxes pr__grd__overlay uk-grid uk-grid-match uk-grid-medium" data-uk-grid>
                        <div className="left uk-width-expand uk-first-column">
                            <div className="item gallery-box big">
                            <div className="outer">
                            <YouTube
                                videoId="4TBd_A7lLH8"
                                opts={opts}
                                onReady={this._onReady}
                            />
                            </div>
                            </div>
                        </div>
                        <div className="right uk-width-1-3@m uk-grid-margin uk-first-column">
                            <div className="item gallery-box small">
                            <div className="outer">
                                <div className="image pr__image__cover" data-src="assets/images/about_03.jpg" data-uk-img style={{backgroundImage: `url(${OfficeNYC})`}} />
                                <div className="inner">
                                <h3 className="title uk-h5">Send us an Email</h3>
                                <p className="description">New York City</p>
                                <a href="mailto:info@scopeweb.nyc?Subject=Office NYC" className="link uk-position-cover" data-uk-toggle />
                                </div>
                            </div>
                            </div>
                            <div className="item gallery-box small">
                            <div className="outer">
                                <div className="image pr__image__cover" data-src="assets/images/about_02.jpg" data-uk-img style={{backgroundImage: `url(${OfficeNL})`}} />
                                <div className="inner">
                                <h3 className="title uk-h5">Send us an Email</h3>
                                <p className="description">The Netherlands</p>
                                <a href="mailto:info@scopeweb.nyc?Subject=Office NL" className="link uk-position-cover" data-uk-toggle />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="about-boxes uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-margin-large-top" data-uk-grid>
                            <div className="item about-box uk-first-column">
                                <div className="outer">
                                    <div className="inner">
                                        <h3 className="title uk-h5">Who we are</h3>
                                        <p className="description">We are a team of creative professionals, thriving 
                                        to build forward-thinking technology &amp; experiences. Working with people that
                                        challenge us creatively helps us thrive.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item about-box uk-grid-margin uk-first-column">
                                <div className="outer">
                                    <div className="inner">
                                        <h3 className="title uk-h5">Our philosophy</h3>
                                        <p className="description">Great product design &amp; software development
                                        rely on years of experience &amp; an in-depth understanding of industry
                                        standards, challenges and opportunities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item about-box uk-grid-margin uk-first-column">
                                <div className="outer">
                                    <div className="inner">
                                        <h3 className="title uk-h5">Our drive</h3>
                                        <p className="description">Every member of our team is genuinely passionate about 
                                        doing great work for brands we believe in — from global tech giants, to 
                                        ambitious startups.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        );
    }
}

export default About;