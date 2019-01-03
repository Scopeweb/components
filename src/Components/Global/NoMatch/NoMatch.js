import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const NoMatch = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="bg-dark">
        {/* Simple HttpErrorPages | MIT License | https://github.com/AndiDittrich/HttpErrorPages */}
        <title>We've got some trouble | 404 - Resource not found</title>
        {/* <div className="uk-container">
          <div className="uk-align-center">
            <div className="cover">
            <h1 className="uk-align-center">Resource not found <small>Error 404</small></h1>
            <p className="lead">The requested resource could not be found but may be available again in the future.</p>
          </div>
          </div>
        </div> */}
        <div className="uk-section uk-section-large uk-margin-bottom-large">
          <div className="section-outer">
            <div className="uk-container">
              <div className="section-inner">
                <div className="columns uk-grid" data-uk-grid="true" style={{justifyContent: 'center'}}>
                  <div className="pr__cta column">
                    <div className="inner">
                      <h1 style={{color: '#fff'}}>Resource not found <small>Error 404</small></h1>
                      <p style={{color: '#fff', fontWeight: 400}}>The requested resource could not be found but may be available again in the future.</p>
                      <div className="uk-navbar-item">
                        <Link to="/"><button className="button-white uk-button uk-button-large uk-button-default">Go back to homepage</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default NoMatch;
