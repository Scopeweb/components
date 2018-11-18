import React, { Component } from 'react';

import Navbar from '../Global/Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import DottedGrid from './DottedGrid/DottedGrid';
import OurValues from './OurValues/OurValues';
import Footer from '../Global/Footer/Footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron />
                <DottedGrid />
                <hr className="pr__vr__section" />
                <OurValues />
                <hr className="pr__vr__section" />
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;