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
    const title = 'Scope Web NYC · Case Study · Bayron Home Improvements';
    return (
      <div className="pr__content" id="site-content">
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
                            <h3 className="uk-h3">Summary.</h3>
                            <p>
                              Bring to the table win-win survival strategies to
                              ensure proactive domination. At the end of the
                              day, going forward, a new normal that has evolved
                              from generation X is on the runway heading towards
                              a streamlined cloud solution. User generated
                              content in real-time will have multiple
                              touchpoints for offshoring.
                            </p>
                            <p>
                              Capitalize on low hanging fruit to identify a
                              ballpark value added activity to beta test.
                              Override the digital divide with additional
                              clickthroughs from DevOps. Nanotechnology
                              immersion along the information highway will close
                              the loop on focusing solely on the bottom line.
                            </p>
                            <p>
                              Podcasting operational change management inside of
                              workflows to establish a framework. Taking
                              seamless key performance indicators offline to
                              maximise the long tail. Keeping your eye on the
                              ball while performing a deep dive on the start-up
                              mentality to derive convergence on cross-platform
                              integration.
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
                          <div className="pr__entry__share pr__small mt-20">
                            <TwitterShareButton url={shareUrl} quote={title} className="share-icon">
                              <TwitterIcon size={25} round />
                            </TwitterShareButton>
                            <FacebookShareButton url={shareUrl} quote={title} className="share-icon">
                              <FacebookIcon size={25} round />
                            </FacebookShareButton>
                            <LinkedinShareButton url={shareUrl} quote={title} className="share-icon">
                              <LinkedinIcon size={25} round />
                            </LinkedinShareButton>
                          </div>
                          <div className="pr__entry__footer">
                            <a
                              href="https://www.bayroninc.com" target="_blank" rel="noopener"
                              className="button uk-button uk-button-default uk-width-1-1"
                            >
                              Visite site
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
