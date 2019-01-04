import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Jumbotron extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="pr__hero__wrap pr__darkbg" id="site-hero">
          <div className="uk-sticky-placeholder" style={{height: 170, margin: 0}} hidden />{/* Site Header End */}
          <section className="pr__hero uk-section uk-padding-large-bottom" id="pr__hero">
            <div className="section-inner">
              <div className="uk-container">
              <hr className="line pr__hr__secondary" style={{width: 70}} />
                <div className="inner uk-grid" data-uk-grid="true">
                  <div className="left uk-width-expand uk-first-column">
                      <h1 className="page-title uk-heading-primary title-light" style={{opacity: 1, transform: 'translateY(0px)'}}>Bayron Home Improvements</h1>
                  </div>
                  <div className="right uk-width-3-5@s vertical-center">
                    <p className="header-title">
                      We partnered up with a local home improvements business to design a fun, intuitive website that continues to help drive growth. Meet Bayron Home Improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* Site Hero End */}
        </div>
      </React.Fragment>
    );
  }
}

export default Jumbotron;
