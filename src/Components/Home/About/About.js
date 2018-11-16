import React, { Component } from 'react';

class About extends Component {
    render() {
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore corrupti
                                temporibus fuga earum asperiores, alias excepturi sit. Impedit, fugit
                                laudantium.</p>
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
                                <div className="image pr__image__cover" data-src="assets/images/about_01.jpg" data-uk-img style={{backgroundImage: 'url("http://gentium.pixerex.com/html/demo/assets/images/about_01.jpg")'}} />
                                <div className="inner">
                                <h3 className="title uk-h5">Teamwork</h3>
                                <p className="description">Committed and creative</p>
                                <a href="#" className="link uk-position-cover" />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="right uk-width-1-3@m uk-grid-margin uk-first-column">
                            <div className="item gallery-box small">
                            <div className="outer">
                                <div className="image pr__image__cover" data-src="assets/images/about_03.jpg" data-uk-img style={{backgroundImage: 'url("http://gentium.pixerex.com/html/demo/assets/images/about_03.jpg")'}} />
                                <div className="inner">
                                <h3 className="title uk-h5">Philosophy</h3>
                                <p className="description">Trust pays off</p>
                                <a href="#" className="link uk-position-cover" data-uk-toggle />
                                </div>
                            </div>
                            </div>
                            <div className="item gallery-box small">
                            <div className="outer">
                                <div className="image pr__image__cover" data-src="assets/images/about_02.jpg" data-uk-img style={{backgroundImage: 'url("http://gentium.pixerex.com/html/demo/assets/images/about_02.jpg")'}} />
                                <div className="inner">
                                <h3 className="title uk-h5">Office</h3>
                                <p className="description">New York City</p>
                                <a href="#" className="link uk-position-cover" data-uk-toggle />
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
                                <p className="description">Bring to the table win-win survival strategies to
                                ensure proactive domination. At the end of the day, going forward will
                                have multiple touchpoints for offshoring.</p>
                            </div>
                            </div>
                        </div>
                        <div className="item about-box uk-grid-margin uk-first-column">
                            <div className="outer">
                            <div className="inner">
                                <h3 className="title uk-h5">Our philosophy</h3>
                                <p className="description">A new normal that has evolved from generation X is
                                on the runway heading towards a streamlined cloud solution. User
                                generated content in real-time.</p>
                            </div>
                            </div>
                        </div>
                        <div className="item about-box uk-grid-margin uk-first-column">
                            <div className="outer">
                            <div className="inner">
                                <h3 className="title uk-h5">How we work</h3>
                                <p className="description">Capitalize on low hanging fruit to identify a
                                ballpark value added activity to beta test. Override the digital divide
                                with additional clickthroughs from DevOps.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>{/* Container End */}
                    </div>{/* Inner End */}
                </div>{/* Outer End */}
                </section>
        );
    }
}

export default About;