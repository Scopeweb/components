import React, { Component } from 'react';

import dotgrid from '../../../Images/dotted-grid.png';

class DottedGrid extends Component {
    render() {
        return (
            <div className="uk-grid">
                <img className="case-img__bayron" src={dotgrid} alt="dotted-grid" />
            </div>
        );
    }
}

export default DottedGrid;