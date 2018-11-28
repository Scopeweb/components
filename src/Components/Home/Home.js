import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import Navbar from '../Global/Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import ServiceCards from './ServiceCards/ServiceCards';
import Services from './Services/Services';
import CaseStudies from './CaseStudies/CaseStudies';
import About from './About/About';
import Footer from '../Global/Footer/Footer';
import ContactForm from '../Global/ContactForm/ContactForm';

export const initGA= () => {
  console.log('GAinit')
  ReactGA.initialize('UA-129909734-1')
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname})
  ReactGA.pageview(window.location.pathname)
}

class Home extends Component {

  componentDidMount () {
    initGA()
    logPageView()
  }

	render() {

		return (
      <React.Fragment>
        <Helmet 
          title="Scope NYC · Web &amp; Mobile Apps for Industry leaders"
          description="Hi. We are Scope. An award-winning Web &amp; Mobile development firm from NYC. We produce affordable, great design that achieves your objectives. Let's start growing your business today."
        />
        <div className="pr__wrapper" id="site-wrapper" style={{top:'0px'}}>
        <div className="pr__hero__wrap" id="site-hero">
          {/* <div className="pr__hero__wrap" style={{backgroundImage: `url(${HeroBG})`}} id="site-hero"> */}
            <Navbar />
            <Jumbotron />
            <ServiceCards />
          </div>
          <div className="pr__content" id="site-content">
            <hr className="pr__vr__section" />
            <Services />
            <hr className="pr__vr__section" />
            <CaseStudies />
            <hr className="pr__vr__section" />
            <About />
            <hr className="pr__vr__section" />
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;