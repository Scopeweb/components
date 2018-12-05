import React, { Component } from "react";
import Helmet from "react-helmet";
import ReactGA from "react-ga";

import Jumbotron from "./Jumbotron/Jumbotron";
import NavbarDark from "../../Global/NavbarDark/NavbarDark";
import Content from "./Content/Content";
import Footer from "../../Global/Footer/Footer";

export const initGA = () => {
  console.log("GAinit");
  ReactGA.initialize("UA-129909734-1");
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
          title="About · Scope NYC · Passion, People &amp; Technology"
          description="Scope has been around since 2016. Since then we helped businesses grow through our strong and innovative web development services."
        />
        <NavbarDark />
        <Jumbotron />
        <hr className="pr__vr__section" />
        <Content />
        <hr className="pr__vr__section" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default BayronHomeImprovements;
