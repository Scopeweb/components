import React, { Component } from 'react';
import { BrowserRouter as Route } from "react-router-dom";

import Navbar from '../Global/Navbar/Navbar';


class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>
            <h1>Work</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Work;
