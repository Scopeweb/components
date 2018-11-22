import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Jumbotron from './Jumbotron/Jumbotron';
import Wave from './Wave/Wave';
import Heading from './Services/Services';
import AnalyzeDesignDevelop from './TopCards/TopCards';
import ProcessHeading from './ProcessHeading/ProcessHeading';
import Steps from './Steps/Steps';

import Footer from '../Global/Footer/Footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    title="Design &amp; Development | NYC Web Design &amp; Development | Scope Web"
                    description="Scope Web has been around since 2016. Since then we helped businesses grow through our strong and innovative web development services."
                </Helmet>
                <Jumbotron />
                <Wave />
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