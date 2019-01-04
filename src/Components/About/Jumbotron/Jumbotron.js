import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Jumbotron extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="pr__hero__wrap" id="site-hero">
                    <div className="uk-sticky-placeholder" style={{height: 170, margin: 0}} hidden />{/* Site Header End */}
                    <section className="pr__hero uk-section uk-margin-large-bottom" id="pr__hero">
                        <div className="section-inner">
                            <div className="uk-container">
                            <hr className="line pr__hr__secondary" style={{width: 70}} />
                                <div className="inner uk-grid" data-uk-grid="true">
                                    <div className="left uk-width-expand uk-first-column">
                                        <h1 className="page-title uk-heading-primary" style={{opacity: 1, transform: 'translateY(0px)'}}>About Scope</h1>
                                    </div>
                                    <div className="right uk-width-3-5@s">
                                        <p className="header-title">Scope is a people-first company. We strive to create a unique, engaging work environment that fosters creativity, loyalty and long-term commitment of our employees to the company thus makes our customers happy. What’s paramount for us is the relationships we build.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* Site Hero End */}
                </div>
            </React.Fragment>
        );
    }
}

export default Jumbotron;
