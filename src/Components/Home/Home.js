import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import Navbar from '../Global/Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
// import ServiceCards from './ServiceCards/ServiceCards';
import Services from './Services/Services';
import CaseStudies from './CaseStudies/CaseStudies';
// import About from './About/About';
import Footer from '../Global/Footer/Footer';

ReactGA.initialize('UA-118350668-1');
ReactGA.pageview("/");

class Home extends Component {
	render() {

		return (
      <React.Fragment>
        <Helmet>
          <title>Scope &bull; New York City Mobile App Developers &amp; Designers</title>
          <meta name="description" content="Hi. We are ScopeWeb. An award-winning &amp; Mobile development firm from NYC. We produce affordable, great design that achieves your objectives. Let's start growing your business today" />
        </Helmet>
        <div className="pr__wrapper" id="site-wrapper" style={{top:'0px'}}>
        <div className="pr__dark pr__hero__wrap" id="site-hero">
          {/* <div className="pr__hero__wrap" style={{backgroundImage: `url(${HeroBG})`}} id="site-hero"> */}
            <Navbar />
            <Jumbotron />
            {/* <ServiceCards /> */}
          </div>
          <div className="pr__content" id="site-content">
            <hr className="pr__vr__section" />
            <Services />
            <hr className="pr__vr__section" />
            <CaseStudies />
            <hr className="pr__vr__section" />

            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
