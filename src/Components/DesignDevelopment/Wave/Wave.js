import React, { Component } from 'react';

import waves from '../../../Images/wave.png';
import waves320 from '../../../Images/wave-320.png';
import waves768 from '../../../Images/wave-768.png';
import waves1280 from '../../../Images/wave-1280.png';

class Wave extends Component {

    state = { currentSrc: '' };

    onLoad = (event) => {
        this.setState({
        currentSrc: event.target.currentSrc
        });
    }

    render() {
        return (
            <div className="uk-grid uk-margin-large-bottom uk-margin-medium-top">
                <img alt="wave grid" src={waves320} srcSet={`${waves320} 320, ${waves768} 768w, ${waves1280} 1280w, ${waves} 1080w`} onLoad={this.onLoad} />
            </div>
        );
    }
}

export default Wave;