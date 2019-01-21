import React, { Component } from 'react';

class OurValues extends Component {
    render() {
        return (
            <section className="pr__services pr__section uk-section uk-section-large" id="pr__services">
                <div className="section-outer">
                    <div className="section-heading">
                        <div className="uk-container">
                            <div className="inner">
                                <div className="left">
                                    <hr className="line pr__hr__secondary" />
                                    <h2 className="title uk-h1">Some say agency, we prefer team.</h2>
                                    <span className="subtitle pr__heading__secondary"><span role="img" aria-label="Fist bump">👊</span> Fist bumps over handshakes.</span>
                                </div>
                            </div>
                        </div>
                        <div className="uk-container uk-margin-large-top">
                            <div className="inner uk-grid" data-uk-grid="true">
                                <div className="left uk-width-expand uk-first-column">
                                    <h2>Company culture.</h2>
                                </div>
                                <div className="right uk-width-3-5@s">
                                    <p>
                                        We can only inspire others if we are inspired by what we do. Our company culture is geared to creating a work 
                                        environment that allows our employees to develop their ideas and fulfill their passion for creating great products.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="uk-container uk-margin-large-top">
                            <div className="inner uk-grid" data-uk-grid="true">
                                <div className="left uk-width-expand uk-first-column">
                                    <h2>Our history.</h2>
                                </div>
                                <div className="right uk-width-3-5@s">
                                    <p>
                                        Since 2016, clients have trusted us to redefine their businesses through web development & design. Our integrated process 
                                        of strategy, design, and engineering has a proven record of delivering unique products precision unrivaled in our industry.
                                    </p>
                                    <p>
                                        Our collaborative approach to problem-solving leverages years of experience bringing digital products to market. Whether 
                                        you want to build the next ground-breaking mobile app, wearable, or hardware product, we provide a full range of strategy, 
                                        design, and development services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="uk-container uk-margin-large-top">
                            <div className="inner uk-grid" data-uk-grid="true">
                                <div className="left uk-width-expand uk-first-column">
                                    <h2>Experiences.</h2>
                                </div>
                                <div className="right uk-width-3-5@s">
                                    <p>
                                        The team is guided by industry stalwarts; Ray Antonio, Stephan Moerman, and Marc Edun are the driving force behind Scope. 
                                        Their experience and deep understanding of digital marketing and technology is shared 
                                        with passion and clarity you’ll find hard to find elsewhere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurValues;