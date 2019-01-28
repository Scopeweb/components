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

import GoRemoteCaseIMG01 from '../../../../Images/goremote-case-img-01.png';
import GoRemoteCaseIMG01webp from '../../../../Images/goremote-case-img-01.webp';

export default class Content extends Component {
  render() {
    const shareUrl = 'https://scopeweb.nyc/work/goremote';
    const title = 'Learn more about the upcoming Remote Job board built by @scopewebnyc';
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
                            <h3 className="uk-h3 title-light">1. Defining the product &amp; platform.</h3>
                            <p>
                            The first problem we want to solve with GoRemote, is avoiding the stress of relocation, allowing you to work from any place you can possibly imagine. The second problem we're set to solve is how to actually make people be able to go remote. If you still have a job, tied to an office, it's unlikely to happen.
                            </p>
                            <h3 className="uk-h3 title-light">Initial targets.</h3>
                            <p>
                              <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                              Define and build an MvP which launches before the summer of 2019.
                            </p>
                            <p>
                              <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                              Build out the core product team, that will develop, maintain and grow the product after the MvP launch.
                            </p>
                            <h3 className="uk-h3 title-light">2. Technologies used</h3>
                            <p>
                              With our team consisting of experienced developers comfortable to build any product in a JavaScript stack, the MvP version is built using JavaScript technologies such as React for the frontend, Express as backend framework, connecting to a NoSQL MongoDB database.
                              For the second iteration, after MvP launch, we're looking to refactor the backend to have a more stable framework in place, that will replace Express.
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
                                    data-src={GoRemoteCaseIMG01}
                                    webp={GoRemoteCaseIMG01webp}
                                    data-uk-img
                                    style={{ backgroundImage: `url(${GoRemoteCaseIMG01})` }}
                                  />
                                  <a
                                    href={GoRemoteCaseIMG01}
                                    className="link"
                                  />
                                </div>
                              </div>
                            </div>
                            <h3 className="uk-h3 title-light">5. Future roadmap</h3>
                            <p>
                              Technically, this project has been super trivial, but the real challenge here lies in growing an audience to make a job board work. And then connecting that to companies who need people.
                              We're continously exploring new partnerships to reach a bigger market, and the ever growing group of digital nomads. Besides that, jobs are always a great source of revenue. The recruitment
                              market is huge. Helping companies get the right people to do their work will always be a valuable offering. And doing that for remote work seems like a pretty obvious market need to us.
                            </p>
                          </div>
                        </div>
                        <div className="pr__entry__sidebar uk-width-1-5@l">
                          <div className="pr__entry__meta pr__vr">
                            <h2 className="title">Project Details</h2>
                            <ul className="content uk-list uk-list-divider">
                              <li className="author">
                                <strong>Project</strong>
                                <span>GoRemote.work</span>
                              </li>
                              <li className="date">
                                <strong>Date</strong>
                                <span>Jan 2019 - Ongoing</span>
                              </li>
                              <li className="category">
                                <strong>Category</strong>
                                <span>
                                  Product Development,
                                  Product Design,
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
                            <EmailShareButton url={shareUrl} subject="Check out this amazing case study" body="Hey, I just found this amzing case study of the GoRemote.work website built by Scope Web, a team of professionals from New York City. I think you should shoot them a message and see what they can do for your business." className="share-icon">
                              <EmailIcon size={25} round />
                            </EmailShareButton>
                          </div>
                          <div className="pr__entry__footer">
                            <a
                              href="https://www.goremote.work" target="_blank" rel="noopener noreferrer"
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
