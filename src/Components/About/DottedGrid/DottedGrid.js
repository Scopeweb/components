import React, { Component } from 'react';

import dotgrid from '../../../Images/dotted-grid.png';
import dotgrid320 from '../../../Images/dotted-grid-320.png';
import dotgrid411 from '../../../Images/dotted-grid-411.png';
import dotgrid768 from '../../../Images/dotted-grid-768.png';
import dotgrid1280 from '../../../Images/dotted-grid-1280.png';

class DottedGrid extends Component {

    state = { currentSrc: '' };

    onLoad = (event) => {
        this.setState({
        currentSrc: event.target.currentSrc
        });
    }

    render() {
        return (
            <div className="uk-grid uk-margin-large-bottom uk-margin-medium-bottom">
                <img alt="wave grid" src={dotgrid411} srcSet={`${dotgrid320} 320, ${dotgrid411} 411w, ${dotgrid768} 768w, ${dotgrid1280} 1280w, ${dotgrid} 1080w`} onLoad={this.onLoad} />
            </div>
        );
    }
}

export default DottedGrid;