import React, { Component } from 'react';

import bayron from '../../../Images/bayron-home-improvements_case_image.png';
import goremote from '../../../Images/go-remote_case_image.png';
import gemini from '../../../Images/gemini-gas-springs_case_image.png'

class CaseStudies extends Component {
    render() {
        return (
            <section className="pr__works pr__section section-slider uk-section uk-section-large" id="pr__works">
                <div className="section-outer">
                    <div className="section-heading">
                        <div className="uk-container">
                            <div className="inner">
                                <div className="left">
                                    <hr className="line pr__hr__secondary" />
                                    <h2 className="title uk-h1">Works.</h2>
                                    <span className="subtitle pr__heading__secondary">Things we've made</span>
                                </div>
                                <div className="right">
                                    <a className="button uk-button uk-button-default" href="/work">View all</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-container case-study-items mb-5">
                    <a className="link__case-study" href="/work/bayron-home-improvements">
                    <div class="inner uk-grid case-study__item_bayron" data-uk-grid="true">
                        <div class="left uk-width-expand uk-first-column case-study__content_bayron">
                            <div className="project-label__bayron mb-4">
                                Web Development
                            </div>
                            <h2 className="mb-3">Bayron website.</h2>
                            <p className="case-study__desc mb-5">
                                An easy-to-use website to showcase projects, services and previous successes. Over 30% of traffic increase in just 3 months time, and a Home Depot partnership.
                            </p>
                            <div className="project-cta">View case study</div>
                        </div>
                        <div class="right">
                            <img className="case-img__bayron" src={bayron} alt="Bayron Home Improvements case study" />
                        </div>
                    </div>
                    </a>
                </div>

                <div className="uk-container case-study-items mb-5">
                    <a className="link__case-study" href="/work/goremote">
                    <div class="inner uk-grid case-study__item_go-remote" data-uk-grid="true">
                        <div class="left uk-width-expand uk-first-column case-study__content_bayron">
                            <div className="project-label__go-remote">
                                Product Concept
                            </div>
                            <h2 className="mb-3">GoRemote Job Board.</h2>
                            <p className="case-study__desc mb-5">
                                Digital nomads can now connect to employers. Concepted, designed and developed the platform as a side product for Scope Web Labs. Launch expected in early 2019 with early access to our subscribers.
                            </p>
                            <div className="project-cta">View case study</div>
                        </div>
                        <div class="right uk-grid-margin uk-first-column">
                            <img className="case-img__goremote" src={goremote} alt="GoRemote job board" />
                        </div>
                    </div>
                    </a>
                </div>

                <div className="uk-container case-study-items mb-5">
                    <a className="link__case-study" href="/work/gemini-gas-springs">
                    <div class="inner uk-grid case-study__item_gemini" data-uk-grid="true">
                        <div class="left uk-width-expand uk-first-column case-study__content">
                            <div className="project-label__gemini mb-4">
                                Web Development &amp; SEO
                            </div>
                            <h2 className="mb-3">Gemini Gas Springs Inc.</h2>
                            <p className="case-study__desc mb-5">
                            Designed and built the user experience for North America's only true manufacturer of high quality industrial gas springs. Continued efforts to scale, monitor performance and build a gas spring product configurator.
                            </p>
                            <div className="project-cta">View case study</div>
                        </div>
                        <div class="right uk-grid-margin uk-first-column">
                            <img className="case-img_gemini" src={gemini} alt="Gemini Gas Springs case study" />
                        </div>
                    </div>
                    </a>
                </div>

            </section>

        );
    }
}

export default CaseStudies;