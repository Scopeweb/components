import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import Jumbotron from './Jumbotron/Jumbotron';
import Navbar from '../Global/Navbar/Navbar';
import DottedGrid from './DottedGrid/DottedGrid';
import OurValues from './OurValues/OurValues';
import Footer from '../Global/Footer/Footer';

ReactGA.initialize('UA-118350668-1');
ReactGA.pageview("/about");

class About extends Component {

  render() {
        return (
            <React.Fragment>
                <Helmet>
                  <title>Scope &bull; Passion, People & Technology</title>
                  <meta name="description" content="Scope has been around since 2016. Since then we helped businesses grow through our strong and innovative design &amp; development services." />
                  <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
                </Helmet>
                <div className="pr__wrapper" id="site-wrapper" style={{top:'0px'}}>
                  <div className="pr__darkbg pr__hero__wrap" id="site-hero">
                    <Navbar />
                    <Jumbotron />
                  </div>
                  <DottedGrid />
                  <hr className="pr__vr__section" />
                  <OurValues />
                  <hr className="pr__vr__section" />
                  <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default About;
