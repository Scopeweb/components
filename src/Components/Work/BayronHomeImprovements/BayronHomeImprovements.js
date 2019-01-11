import React, { Component } from "react";
import Helmet from "react-helmet";
import ReactGA from "react-ga";

import Jumbotron from "./Jumbotron/Jumbotron";
import Navbar from "../../Global/Navbar/Navbar";
import Content from "./Content/Content";
import Footer from "../../Global/Footer/Footer";

export const initGA = () => {
  console.log("GAinit");
  ReactGA.initialize("UA-118350668-1");
};
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

class BayronHomeImprovements extends Component {
  componentDidMount() {
    initGA();
    logPageView();
  }

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
