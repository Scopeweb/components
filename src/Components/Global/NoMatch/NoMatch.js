import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

import Navbar from '../Navbar/Navbar';

class NoMatch extends Component {
    render() {
      const opts = {
        height: '600',
        width: '790',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
          controls: 1,
          cc_load_policy: 0,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0
        }
      };
    return (
      <React.Fragment>
        <Navbar />
        <div className="pr__wrapper" id="site-wrapper" style={{top:'0px'}}>
          <div className="pr__dark pr__hero__wrap" id="site-hero" style={{minHeight: 'calc(100vh - 170px)'}}>
          <section className="pr__hero uk-section" id="pr__hero">
            <div className="uk-container">
              <div className="section-inner">
                <div className="hero-content uk-grid uk-grid-stack" data-uk-grid>
                  <div className="uk-first-column">
                    {/* <hr className="line pr__hr__primary" style={{width: 70}} /> */}
                    <div className="space-between" />
                    <h1 className="title uk-heading-hero uk-text-center" style={{opacity: 1, transform: 'translateY(0px)'}}>Resource not found - 404</h1>
                    <p className="jumbo-desc uk-text-center">
                      The requested resource could not be found but may be available again in the future.
                    </p>
                    <div className="uk-navbar-item">
                      <Link to="/"><button className="button-white uk-button uk-button-large uk-button-default">Go back to homepage</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="uk-container">
              <div className="gallery-boxes pr__grd__overlay uk-grid uk-grid-match uk-grid-medium" data-uk-grid>
                <div className="left uk-width-expand uk-first-column">
                  <div className="item gallery-box big">
                    <div className="outer">
                      <YouTube
                          videoId="4TBd_A7lLH8"
                          opts={opts}
                          onReady={this._onReady}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NoMatch;
