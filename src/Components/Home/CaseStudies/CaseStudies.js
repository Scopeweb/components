import React, { Component } from 'react';

class CaseStudies extends Component {
    render() {
        return (
            <section className="pr__works pr__section section-slider uk-section uk-section-large" id="pr__works">
                <div className="section-outer">
                    <div className="section-heading">
                    <div className="uk-container">
                        <div className="inner">
                        <div className="left">
                            <hr className="line pr__hr__secondary" />
                            <h2 className="title uk-h1">Works.</h2>
                            <span className="subtitle pr__heading__secondary">Things we've made</span>
                        </div>
                        <div className="right">
                            <a className="button uk-button uk-button-default" href="#">View all</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        );
    }
}

export default CaseStudies;