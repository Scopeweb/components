import React, { Component } from 'react';

import Image from '../../../../Images/Analyze.gif';

class StepAnalyze extends Component {
    render() {
        return (
            <article className="uk-article page type-page">
                <div className="outer">
                    <div className="inner">
                        <div className="entry-body">
                            <h5 className="uk-h4">1. Analyze</h5>
                            <hr className="line pr__hr__secondary" />
                            <img src={Image} alt="Analyze animation" />
                            <p>
                                During this phase it’s cheap to fail, so we experiment a lot. We design, prototype and test until we find what works for your business. 
                                We define the metrics based on existing data and choose what we’ll use to guide our decisions throughout your project to make sure it 
                                generates positive ROI.
                            </p>
                            <h6 className="uk-heading-line"><span>Output Includes:</span></h6>
                            <div className="uk-column-1-2@m uk-margin-medium">
                                <dl className="uk-description-list">
                                    <dt><i className="icon pr-checkmark-circle" /> Search Engine Positioning.</dt>
                                    <dd>Using the available data and our custom reports, we analyze your SEO (Search Engine Optimisation) presence,
                                    results and implementation. After gathering data for two to three weeks - depending on the size of your website -
                                    we create a strategy.</dd>
                                    <dt><i className="icon pr-checkmark-circle" /> Technical Audit.</dt>
                                    <dd>Digging deeper than just skip deep, we look into the technicalities of your website to see where we can help your
                                    grow, improve, and impress. Often times websites get outdated and the security vulnerabilities increase. We help
                                    prevent.</dd>
                                </dl>
                            </div>
                            <h6 className="uk-heading-line"><span>Testimonial:</span></h6>
                            <blockquote className="uk-text-left">
                                <p>Scope Web has been absolutely fantastic in assisting us with managing all of our various websites and tech issues. We 
                                couldn't ask for a better team to work with. They respond to our queries at all hours and even on weekends. It's helpful to know 
                                that we have someone available to help us with even the most urgent of issues.</p>
                                <footer><strong>Aaron L.</strong> – CEO, Strategy Director</footer>
                            </blockquote>
                            <p>We continually implement exactly what your audience wants. Our decisions are backed by user data. We capture every 
                                interaction and constantly pivot to increase conversion. We focus on your customer, they focus on you.
                            </p>
                            <h6 className="uk-heading-line"><span>Suggested steps:</span></h6>
                            <ul data-uk-accordion className="uk-accordion">
                                <li className>
                                    <a className="uk-accordion-title" href="#">Step 1: Project Introduction</a>
                                    <div className="uk-accordion-content" aria-hidden="true" hidden>
                                        <h6 className="uk-h6">Analytics research workshop:</h6>
                                        <ul>
                                            <li>Our team studies your product positioning, target market and user base, competitive landscape, existing analytics, and product state.</li>
                                            <li>Evaluate current product state and the path to future product state</li>
                                            <li>Analytics evaluation of current products</li>
                                            <li>Identifying target market and user base</li>
                                            <li>Research Competitive Landscape</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className>
                                    <a className="uk-accordion-title" href="#">Step 2: Metrics Sprint</a>
                                    <div className="uk-accordion-content" aria-hidden="true" hidden>
                                        <h6 className="uk-h6">Research:</h6>
                                        <p>Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables
                                        whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical
                                        architectures.</p>
                                        <h6 className="uk-h6">Concept:</h6>
                                        <p>Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal
                                        processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default StepAnalyze;