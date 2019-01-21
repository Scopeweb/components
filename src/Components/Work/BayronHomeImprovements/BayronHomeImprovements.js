import React, { Component } from "react";
import Helmet from "react-helmet";
import ReactGA from "react-ga";

import Jumbotron from "./Jumbotron/Jumbotron";
import Navbar from "../../Global/Navbar/Navbar";
import Content from "./Content/Content";
import Footer from "../../Global/Footer/Footer";

ReactGA.initialize('UA-118350668-1');
ReactGA.pageview("/work/bayron-home-improvements");

class BayronHomeImprovements extends Component {

  render() {
    return (
      <React.Fragment>
        <Helmet
          title="Bayron Home Improvements Case Study · Scope NYC"
          description="Scope has been around since 2016. Since then we helped businesses grow through our strong and innovative web development services."
        />
        <Navbar />
        <Jumbotron />
        {/* <hr className="pr__vr__section" /> */}
        <Content />
        <hr className="pr__vr__section" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default BayronHomeImprovements;
