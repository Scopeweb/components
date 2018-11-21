import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Jumbotron from './Jumbotron/Jumbotron';
import DottedGrid from './DottedGrid/DottedGrid';
import OurValues from './OurValues/OurValues';
import MailChimp from './MailChimp/MailChimp';
import Footer from '../Global/Footer/Footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet 
                    title="About | NYC Web Design &amp; Development | Scope Web"
                    description="Scope Web has been around since 2016. Since then we helped businesses grow through our strong and innovative web development services."
                />
                <Jumbotron />
                <DottedGrid />
                <hr className="pr__vr__section" />
                <OurValues />
                <hr className="pr__vr__section" />
                {/* <MailChimp />
                <hr className="pr__vr__section" /> */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;