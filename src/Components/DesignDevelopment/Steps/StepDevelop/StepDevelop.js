import React, { Component } from 'react';

class StepDevelop extends Component {
    render() {
        return (
            <article className="uk-article page type-page">
                <div className="outer">
                    <div className="inner">
                        <div className="entry-body">
                            <h5 className="uk-h4">3. Develop</h5>
                            <hr className="line pr__hr__secondary" />
                            <p>
                                Now we are ready to dive into product design, building wireframes and prototypes in Sketch or Adobe XD, where we give each 
                                detail a final polish and tweak. Testing and reiterating continues, butin much smaller increments. We’re moving quickly to 
                                the final specification.
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
                            <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one
                                customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art
                                customer service.
                            </p>
                            <h6 className="uk-heading-line"><span>Testimonial:</span></h6>
                            <blockquote className="uk-text-left">
                                <p>With our core role in transforming a business’s digital presence - we are in the
                                unique position to reinvent their brand for a more digitally focused world through design, content and interaction.
                                The new signifiers of a modern digital brand - are user interface, integrated branded content and interaction.</p>
                                <footer><strong>Aron Larsson</strong> – CEO, Strategy Director</footer>
                            </blockquote>
                            <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one
                                customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art
                                customer service.
                            </p>
                            <h6 className="uk-heading-line"><span>Suggested steps:</span></h6>
                            <ul data-uk-accordion className="uk-accordion">
                                <li className>
                                    <a className="uk-accordion-title" href="#">Step 1: User experience design</a>
                                    <div className="uk-accordion-content" aria-hidden="true" hidden>
                                        <h6 className="uk-h6">Defining the product, functionalities & all layouts. This includes the creation of the following:</h6>
                                        <ul>
                                            <li>User Personas</li>
                                            <li>Information Architecture of the product</li>
                                            <li>Wireframing for each screen state</li>
                                            <li>User Flows</li>
                                            <li>Prototyping / User Testing</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className>
                                    <a className="uk-accordion-title" href="#">Step 2: Visual design</a>
                                    <div className="uk-accordion-content" aria-hidden="true" hidden>
                                        <p>Defining the look and feel. Visual layout design, creating animations & designing icon and image sets in accordance with brand and style guidelines.</p>
                                        <ul>
                                            <li>Visual design for all screen states</li>
                                            <li>Animations and Transitions</li>
                                            <li>Prototyping / User Testing</li>
                                            <li>Preparation and handoff of assets to engineering team</li>
                                        </ul>
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

export default StepDevelop;