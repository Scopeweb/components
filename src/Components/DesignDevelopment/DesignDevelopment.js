import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import Jumbotron from './Jumbotron/Jumbotron';
import Navbar from '../Global/Navbar/Navbar';
import Heading from './Heading/Heading';
import AnalyzeDesignDevelop from './TopCards/TopCards';
import ProcessHeading from './ProcessHeading/ProcessHeading';
import Steps from './Steps/Steps';
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
                <Helmet>
                    title="Scope NYC · How we work · Design &amp; Development"
                    description="Scope has been around since 2016. Since then we helped businesses grow through our strong and innovative web development services."
                </Helmet>
                <Navbar />
                <Jumbotron />
                <Heading />
                <AnalyzeDesignDevelop />
                <ProcessHeading />
                <Steps />
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;
