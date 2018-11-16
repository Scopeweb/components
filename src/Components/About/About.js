import React, { Component } from 'react';

import Navbar from '../Global/Navbar/Navbar';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <h1>About</h1>
                </div>  
            </React.Fragment>
        );
    }
}

export default About;