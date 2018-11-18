import React, { Component } from 'react';

import HeroBG from '../../Images/hero_01.png';

import Navbar from '../Global/Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import ServiceCards from './ServiceCards/ServiceCards';
import Services from './Services/Services';
import CaseStudies from './CaseStudies/CaseStudies';
import About from './About/About';
import LatestBlog from './LatestBlog/LatestBlog';
import Footer from '../Global/Footer/Footer';
import ContactForm from '../Global/ContactForm/ContactForm';

class Home extends Component {
	render() {

		return (
      <React.Fragment>
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
            <ContactForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;