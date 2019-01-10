import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import Navbar from '../Global/Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import Footer from '../Global/Footer/Footer';

export const initGA= () => {
  console.log('GAinit')
  ReactGA.initialize('UA-129909734-1')
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname})
  ReactGA.pageview(window.location.pathname)
}

class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Scope &bull; Our work &bull; Mobile Design &amp; Development</title>
          <meta name="description" content="See our work and learn how we help entrepreneurs and businesses build products that solve everyday problems." />
        </Helmet>
        <div className="pr__wrapper" id="site-wrapper" style={{top:'0px'}}>
          <div className="pr__dark pr__hero__wrap" id="site-hero">
            <Navbar />
            <Jumbotron />
          </div>
          <hr className="pr__vr__section" />
          {/* <Content />
          <hr className="pr__vr__section" /> */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Work;
