import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import Jumbotron from './Jumbotron/Jumbotron';
import NavbarDark from '../Global/NavbarDark/NavbarDark';
import DottedGrid from './DottedGrid/DottedGrid';
import OurValues from './OurValues/OurValues';
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
                    title="About · Scope NYC · Passion, People &amp; Technology"
                    description="Scope Web has been around since 2016. Since then we helped businesses grow through our strong and innovative web development services."
                />
                <NavbarDark />
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