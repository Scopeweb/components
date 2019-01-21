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

class GivEasy extends Component {
  componentDidMount() {
    initGA();
    logPageView();
  }

  render() {
    return (
      <React.Fragment>
        <Helmet
          title="GivEasy Case Study · Scope NYC"
          description="Scope has been around since 2016. Since then we helped businesses grow through our strong and innovative web development services."
        />
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

export default GivEasy;
