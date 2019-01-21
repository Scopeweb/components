import React, { Component } from 'react';
import Image from 'react-image-webp';

import bayron from '../../../Images/bayron-home-improvements_case_image.png';
import bayronwebp from '../../../Images/bayron-home-improvements_case_image.webp'
import goremote from '../../../Images/go-remote_case_image.png';
import goremotewebp from '../../../Images/go-remote_case_image.webp';
import gemini from '../../../Images/gemini-gas-springs_case_image.png'
import geminiwebp from '../../../Images/gemini-gas-springs_case_image.webp';
import giveasy from '../../../Images/giveasy_case_image.png';
import giveasywebp from '../../../Images/giveasy_case_image.webp';

class CaseStudies extends Component {
    render() {
        return (
            <section className="pr__dark pr__works pr__section section-slider uk-section uk-section-large" id="pr__works">
                <div className="section-outer">
                    <div className="section-heading">
                        <div className="uk-container">
                            <div className="inner">
                                <div className="left">
                                    <hr className="line pr__hr__secondary" />
                                    <h2 className="title uk-h1">Works.</h2>
                                    <span className="subtitle pr__heading__secondary">Things we've made</span>
                                </div>
                                {/* <div className="right">
                                    <a className="button uk-button uk-button-default" href="/work">View all</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-container case-study-items mb-5">
                    <a className="link__case-study link link--arrowed" href="/work/bayron-home-improvements">
                    <div className="inner uk-grid case-study__item_bayron" data-uk-grid="true">
                        <div className="left uk-width-expand uk-first-column case-study__content_bayron">
                            <div className="project-label__bayron mb-4">
                                Web Development
                            </div>
                            <h2 className="mb-3">Bayron website.</h2>
                            <p className="case-study__desc mb-5">
                                An easy-to-use website to showcase projects, services and previous successes. Over 30% of traffic increase in just 3 months time, and a Home Depot partnership.
                            </p>
                            <div className="project-cta">
                              View case study
                              <svg className="arrow-icon" height={32} viewBox="0 0 32 32" width={32} xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke="#ffffff" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth="1.5">
                                  <circle className="arrow-icon--circle" cx={16} cy={16} r="15.12" />
                                  <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98" />
                                </g>
                              </svg>
                            </div>
                        </div>
                        <div className="right case-study">
                            <Image className="case-img__bayron" src={bayron} webp={bayronwebp} alt="Bayron Home Improvements case study" />
                        </div>
                    </div>
                    </a>
                </div>

                <div className="uk-container case-study-items mb-5">
                    <a className="link__case-study link link--arrowed" href="/work/goremote">
                    <div className="inner uk-grid case-study__item_go-remote" data-uk-grid="true">
                        <div className="left uk-width-expand uk-first-column case-study__content_bayron">
                            <div className="project-label__go-remote">
                                Product Concept
                            </div>
                            <h2 className="mb-3">GoRemote Job Board.</h2>
                            <p className="case-study__desc mb-5">
                                Digital nomads can now connect to employers. Concepted, designed and developed the platform as a side product for Scope Labs. Launch expected in early 2019 with early access to our newsletter subscribers.
                            </p>
                            <div className="project-cta">
                              View case study
                              <svg className="arrow-icon" height={32} viewBox="0 0 32 32" width={32} xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke="#5D5555" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth="1.5">
                                  <circle className="arrow-icon--circle" cx={16} cy={16} r="15.12" />
                                  <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98" />
                                </g>
                              </svg>
                            </div>
                        </div>
                        <div className="right case-study uk-grid-margin uk-first-column">
                            <Image className="case-img__goremote" src={goremote} webp={goremotewebp} alt="GoRemote job board case study" />
                        </div>
                    </div>
                    </a>
                </div>

                <div className="uk-container case-study-items mb-5">
                    <a className="link__case-study link link--arrowed" href="/work/gemini-gas-springs">
                    <div className="inner uk-grid case-study__item_gemini" data-uk-grid="true">
                        <div className="left uk-width-expand uk-first-column case-study__content">
                            <div className="project-label__gemini mb-4">
                                Web Development &amp; SEO
                            </div>
                            <h2 className="mb-3">Gemini Gas Springs Inc.</h2>
                            <p className="case-study__desc mb-5">
                            Designed and built the user experience for North America's only true manufacturer of high quality industrial gas springs. Continued efforts to scale, monitor performance and build a gas spring product configurator.
                            </p>
                            <div className="project-cta">
                              View case study
                              <svg className="arrow-icon" height={32} viewBox="0 0 32 32" width={32} xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke="#ffffff" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth="1.5">
                                  <circle className="arrow-icon--circle" cx={16} cy={16} r="15.12" />
                                  <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98" />
                                </g>
                              </svg>
                            </div>
                        </div>
                        <div className="right case-study-gemini uk-grid-margin uk-first-column">
                            <Image className="case-img__gemini" src={gemini} webp={geminiwebp} alt="Gemini Gas Springs case study" />
                        </div>
                    </div>
                    </a>
                </div>

                <div className="uk-container case-study-items mb-5">
                    <a className="link__case-study link link--arrowed" href="/work/giveasy">
                    <div className="inner uk-grid case-study__item_giveasy" data-uk-grid="true">
                        <div className="left uk-width-expand uk-first-column case-study__content">
                            <div className="project-label__giveasy mb-4">
                                Scope Labs
                            </div>
                            <h2 className="mb-3">GivEasy</h2>
                            <p className="case-study__desc mb-5">
                             Starting from a Hackathon, we set out to build a donation platform that helps connect donators to local charities. Using geocoding technology, users submit the items they want to donate, allowing charities to send a driver
                             and pick them up from your address of choice.
                            </p>
                            <div className="project-cta">
                              View case study
                              <svg className="arrow-icon" height={32} viewBox="0 0 32 32" width={32} xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" stroke="#ffffff" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth="1.5">
                                  <circle className="arrow-icon--circle" cx={16} cy={16} r="15.12" />
                                  <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98" />
                                </g>
                              </svg>
                            </div>
                        </div>
                        <div className="right case-study-giveasy uk-grid-margin uk-first-column">
                            <Image className="case-img__giveasy" src={giveasy} webp={giveasywebp} alt="GivEasy case study" />
                        </div>
                    </div>
                    </a>
                </div>

            </section>

        );
    }
}

export default CaseStudies;
