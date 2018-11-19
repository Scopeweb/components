import React, { Component } from 'react';

import waves from '../../../Images/wave.png';

class Wave extends Component {
    render() {
        return (
            <div className="uk-grid uk-margin-large-bottom uk-margin-medium-top">
                <img src={waves} alt="wave-grid" />
            </div>
        );
    }
}

export default Wave;