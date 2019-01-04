import React, { Component } from 'react';
import { BrowserRouter as Route } from "react-router-dom";

import Navbar from '../Global/Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import Footer from '../Global/Footer/Footer';

class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="pr__wrapper" id="site-wrapper" style={{top:'0px'}}>
          <div className="pr__dark pr__hero__wrap" id="site-hero">
            <Navbar />
            <Jumbotron />
          </div>
          <hr className="pr__vr__section" />
          {/* <Content />
          <hr className="pr__vr__section" /> */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Work;
