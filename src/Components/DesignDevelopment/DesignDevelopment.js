import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import Jumbotron from './Jumbotron/Jumbotron';
import Navbar from '../Global/Navbar/Navbar';
// import Heading from './Heading/Heading';
// import AnalyzeDesignDevelop from './TopCards/TopCards';
// import ProcessHeading from './ProcessHeading/ProcessHeading';
// import Steps from './Steps/Steps';
import Footer from '../Global/Footer/Footer';

ReactGA.initialize('UA-118350668-1');
ReactGA.pageview("/ourprocess");

class About extends Component {

  render() {
    return (
      <React.Fragment>
        <Helmet
          title="Scope &bull; Our Process &bull; Design &amp; Development"
          description="Learn how scope helps entrepreneurs grow businesses through our experience in creating innovative services."
        />
        <div className="pr__wrapper" id="site-wrapper" style={{top:'0px'}}>
          <div className="pr__dark pr__hero__wrap" id="site-hero">
            <Navbar />
            <Jumbotron />
          </div>
          {/* <Heading />
          <AnalyzeDesignDevelop />
          <ProcessHeading />
          <Steps /> */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default About;
