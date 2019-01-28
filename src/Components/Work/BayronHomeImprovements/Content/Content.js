import React, { Component } from "react";
import Image from 'react-image-webp';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share';

import BayronCaseIMG01 from '../../../../Images/bayron-case-img-01.png';
import BayronCaseIMG01webp from '../../../../Images/bayron-case-img-01.webp';
import BayronCaseIMG02 from '../../../../Images/bayron-case-img-02.png';
import BayronCaseIMG02webp from '../../../../Images/bayron-case-img-02.webp';
import BayronCaseIMG03 from '../../../../Images/bayron-case-img-03.png';
import BayronCaseIMG03webp from '../../../../Images/bayron-case-img-03.webp';
import BayronCaseIMG04 from '../../../../Images/bayron-case-img-04.png';
import BayronCaseIMG04webp from '../../../../Images/bayron-case-img-04.webp';

export default class Content extends Component {
  render() {
    const shareUrl = 'https://scopeweb.nyc/work/bayron-home-improvements';
    const title = 'Learn more about the website @scopewebnyc built for Bayron Home Improvements';
    return (
      <div className="pr__content pr__darkbg" id="site-content">
        <div
          className="pr__primary uk-section uk-section-medium"
          id="site-primary"
        >
          <div className="outer">
            <div className="uk-container uk-position-relative">
              <div
                className="inner uk-grid uk-grid-large uk-grid-match uk-grid-stack"
                data-uk-grid
              >
                <div className="uk-width-expand uk-first-column">
                  <main className="pr__main" id="site-main">
                    <article className="uk-article post type-project">
                      <div className="outer uk-grid uk-grid-large" data-uk-grid>
                        <div className="inner uk-width-expand uk-first-column">
                          <div className="entry-body">
                            <h3 className="uk-h3 title-light">1. Business challenges.</h3>
                            <p>
                              Enhance Bayron Home Improvements reach to the local community, home improvement leads and contracts, and funnel a larger percentage of job seekers to Bayron's website.
                            </p>
                            <h3 className="uk-h3 title-light">Initial results.</h3>
                            <p>
                              <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                              The Home Depot partnership contract within the first few months after the website launched.
                            </p>
                            <p>
                              <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                              30% month-over-month traffic increase through local Google SEO ranking strategies.
                            </p>
                            <h3 className="uk-h3 title-light">2. Technologies used</h3>
                            <p>
                              As a tech agnostic company that puts users first, Scope decided to leverage Bayron's flexibility (not having a website at the time) to provide a solution
                              that was affordable, fast, and fully integrated into existing marketing strategies. Grav CMS decreases the loading times by cutting out the requirement
                              to have a database. As a flat-file CMS all the site’s content and configuration settings are stored in plain text files, increasing the speed.
                            </p>
                            <div
                              className="pr__gallery uk-grid uk-grid-stack"
                              data-uk-grid
                              data-uk-lightbox="animation: scale"
                            >
                              <div className="pr__gallery__item uk-width-1-1@m uk-first-column">
                                <div className="featured-image">
                                  <div
                                    className="image pr__image__cover"
                                    data-src={BayronCaseIMG01}
                                    webp={BayronCaseIMG01webp}
                                    data-uk-img
                                    style={{ backgroundImage: `url(${BayronCaseIMG01})` }}
                                  />
                                  <a
                                    href={BayronCaseIMG01}
                                    className="link"
                                  />
                                </div>
                              </div>
                            </div>
                            <h3 className="uk-h3 title-light">3. Client discovery</h3>
                            <p>
                              A long term Scope Web Client, Bayron Home Improvements Inc. has offered a wide variety of home improvement and remodeling services to the Pocono Mountains areas since late 2017.
                              Bayron's customers appreciate his attention to detail and great communication skills, especially in an industry not known for outstanding customer service.
                            </p>
                            <p>
                              Like many local businesses that are just starting out, Bayron Home Improvements Inc. did not have a website. Since we started working with Bayron in December 2017, the company has
                              established a strong reputation and became a contractor for The Home Depot. What makes a great website goes far beyond simple aesthetics. Post-launch, we’ve seen a vast improvement
                              in Bayron's website performance.
                            </p>
                            <div
                              className="pr__gallery uk-grid uk-child-width-1-2@m uk-flex-top uk-flex-wrap-top"
                              data-uk-grid="masonry: true;"
                              data-uk-lightbox="animation: scale"
                              style={{ height: "652px" }}
                            >
                              <div
                                className="pr__gallery__item uk-first-column"
                                style={{ transform: "translateY(0px)" }}
                              >
                                <div className="featured-image">
                                  <div
                                    className="image pr__image__cover"
                                    data-src={BayronCaseIMG02}
                                    webp={BayronCaseIMG02webp}
                                    data-uk-img
                                    style={{ backgroundImage: `url(${BayronCaseIMG02})` }}
                                  />
                                  <a
                                    href={BayronCaseIMG02}
                                    className="link"
                                  />
                                </div>
                              </div>
                              <div
                                className="pr__gallery__item"
                                style={{ transform: "translateY(0px)" }}
                              >
                                <div className="featured-image">
                                  <div
                                    className="image pr__image__cover pr__ratio__portrait"
                                    data-src={BayronCaseIMG03}
                                    webp={BayronCaseIMG03webp}
                                    data-uk-img
                                    style={{ backgroundImage: `url(${BayronCaseIMG03})` }}
                                  />
                                  <a
                                    href={BayronCaseIMG03}
                                    className="link"
                                  />
                                </div>
                              </div>
                              <div className="featured-image">
                                  <div
                                    className="image pr__image__cover"
                                    data-src={BayronCaseIMG04}
                                    webp={BayronCaseIMG04webp}
                                    data-uk-img
                                    style={{ backgroundImage: `url(${BayronCaseIMG04})` }}
                                  />
                                  <a
                                    href={BayronCaseIMG04}
                                    className="link"
                                  />
                                </div>
                              </div>
                              <h3 className="uk-h3 title-light">4. Work completed</h3>
                              <p>
                                The only way Juan was marketing his business was through word of mouth, a car magnet and local advertising. However, due to the fact that he had no way
                                to track the results of the advertising, he wasn’t really sure how well it was working. In addition, Juan didn’t have any marketing materials for his
                                business other than a business card, which made it difficult to educate prospective customers about the range of services he offered. After completing
                                a brand audit with our design team, Juan realized how much potential business he was missing out on by not having an online presence.
                              </p>
                              <h3 className="uk-h3 title-light">5. Future roadmap</h3>
                              <p>
                                Before diving head-first into marketing and development tactics, Ray &amp; Stephan helped Juan develop a marketing strategy for his business that would really
                                make him stand out from the competition. After analyzing the business's strengths and discussing the goals with him, our team recommended an agile but lean approach.
                                Juan immediately understood what a big advantage our approach would give him over his competitors, so he readily agreed to the marketing strategy. 3 months later
                                The Home Depot contacted and contracted him for the local area.
                              </p>
                          </div>
                        </div>
                        <div className="pr__entry__sidebar uk-width-1-5@l">
                          <div className="pr__entry__meta pr__vr">
                            <h2 className="title">Project Details</h2>
                            <ul className="content uk-list uk-list-divider">
                              <li className="author">
                                <strong>Client</strong>
                                <span>Bayron Home Improvements Inc.</span>
                              </li>
                              <li className="date">
                                <strong>Date</strong>
                                <span>January, 2018</span>
                              </li>
                              <li className="category">
                                <strong>Category</strong>
                                <span>
                                  Web Development,
                                  Web Design,
                                  SEO
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="pr__entry__share pr__small mtn-45">
                            <TwitterShareButton url={shareUrl} title={title} via="scopewebnyc" className="share-icon">
                              <TwitterIcon size={25} round />
                            </TwitterShareButton>
                            <FacebookShareButton url={shareUrl} quote={title} className="share-icon">
                              <FacebookIcon size={25} round />
                            </FacebookShareButton>
                            <LinkedinShareButton url={shareUrl} title={title} className="share-icon">
                              <LinkedinIcon size={25} round />
                            </LinkedinShareButton>
                            <EmailShareButton url={shareUrl} subject="Check out this amazing case study" body="Hey, I just found this amzing case study of the Bayron Home Improvements website built by Scope Web, a team of professionals from New York City. I think you should shoot them a message and see what they can do for your business." className="share-icon">
                              <EmailIcon size={25} round />
                            </EmailShareButton>
                          </div>
                          <div className="pr__entry__footer">
                            <a
                              href="https://www.bayroninc.com" target="_blank" rel="noopener noreferrer"
                              className="button uk-button uk-button-default uk-width-1-1"
                            >
                              Visit site
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
