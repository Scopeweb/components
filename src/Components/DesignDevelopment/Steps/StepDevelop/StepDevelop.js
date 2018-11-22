import React, { Component } from 'react';

import Image from '../../../../Images/Develop.gif';

class StepDevelop extends Component {
    render() {
        return (
            <article className="uk-article page type-page">
                <div className="outer">
                    <div className="inner">
                        <div className="entry-body">
                            <h5 className="uk-h4">3. Develop</h5>
                            <hr className="line pr__hr__secondary" />
                            <img src={Image} alt="Develop animation" />
                            <p>
                                Now we are ready to dive into product design, building wireframes and prototypes in Sketch or Adobe XD, where we give each 
                                detail a final polish and tweak. Testing and reiterating continues, butin much smaller increments. We’re moving quickly to 
                                the final specification.
                            </p>
                            <h6 className="uk-heading-line"><span>Output Includes:</span></h6>
                            <div className="uk-column-1-2@m uk-margin-medium">
                                <dl className="uk-description-list">
                                    <dt><i className="icon pr-checkmark-circle" /> Web Development.</dt>
                                    <dd>Scope Web is a dedicated provider of Web design and development services. A decade of continuous work put into 
                                    this domain, has fetched us unmatched experience and expertise. We can safely declare ourselves to be the one best 
                                    web designers and developers worldwide.</dd>
                                    <dt><i className="icon pr-checkmark-circle" /> Mobile Apps.</dt>
                                    <dd>Our native app development services encompass the full process, from product strategy to App Store submission. 
                                    We are mobile experts who specialize in app design and development and have launched successful products for some 
                                    of the world's largest organizations.</dd>
                                </dl>
                            </div>
                            <h6 className="uk-heading-line"><span>Testimonial:</span></h6>
                            <blockquote className="uk-text-left">
                                <p>Scope Web took over our existing site and right from the word go they impressed us. They helped us in rebranding our 
                                logo and redesign our website. We get great compliments on our site and we are extremely pleased with the results we have 
                                received so far. I was impressed all around with their skills, customer service and attention to details.</p>
                                <footer><strong>Peter M.</strong> – Managing Director</footer>
                            </blockquote>
                            <p>Expect great communication. Our teams break the traditional corporate silo structure. We position our experts closer to 
                            you and your customers. Projects are flexible, we allocate resources from day one that allow us to explore new ideas, while 
                            maintaining a majority of the budget on proven strategy. This allows us develop ideas for the future while capturing your 
                            present audience.</p>
                            <h6 className="uk-heading-line"><span>Suggested steps:</span></h6>
                            <ul data-uk-accordion className="uk-accordion">
                                <li className>
                                    <a className="uk-accordion-title" href="#">Step 1: Develop</a>
                                    <div className="uk-accordion-content" aria-hidden="true" hidden>
                                        <ul>
                                            <li>Co-creation and full product lifecycle development: We seamlessly sync up and integrate our product team into your organization.</li>
                                            <li>Our sprint cycles typically last 2 weeks and include an extensive code review and QA process to ensure successful delivery.</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className>
                                    <a className="uk-accordion-title" href="#">Step 2: Iterate</a>
                                    <div className="uk-accordion-content" aria-hidden="true" hidden>
                                        <ul>
                                            <li>We don’t stop once a product is released; our team will help you measure and improve key performance metrics such as adoption, engagement, retention and overall performance.</li>
                                            <li>We design a system to support future growth and development</li>
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