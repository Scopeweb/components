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

export const initGA= () => {
    console.log('GAinit')
    ReactGA.initialize('UA-129909734-1')
}
export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
}

class About extends Component {

  componentDidMount () {
    initGA()
    logPageView()
  }

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
