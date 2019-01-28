import React, { Component } from 'react';

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
                      <h1 className="page-title uk-heading-primary title-light" style={{opacity: 1, transform: 'translateY(0px)'}}>GoRemote - digital nomads</h1>
                  </div>
                  <div className="right uk-width-3-5@s vertical-center">
                    <p className="header-title">
                      We started developing GoRemote to build a job board that cuts out the location requirements for candidates. Being a remote-first company
                      we love the freedom it offers all of us.
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
