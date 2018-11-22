import React, { Component } from 'react';

class TopCards extends Component {
    render() {
        return (
            <section className="pr__services pr__section uk-section uk-section-medium uk-margin-medium-top" id="pr__services">
                <div className="section-outer">
                    <div className="section-heading">
                        <div class="uk-container uk-container-large">
                            <div className="uk-child-width-1-3@s uk-grid" uk-grid>
                                <div className="uk-first-column">
                                    <div className="uk-card uk-card-default uk-card-body">
                                        <h3 className="uk-card-title">1. Analyze</h3>
                                        <p>We get to know your business and it’s existing online profile. We measure, think, plan and get the project started.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card uk-card-default uk-card-body">
                                        <h3 className="uk-card-title">2. Design</h3>
                                        <p>Prototype, test, reiterate until we establish the branding that matches your business and the industry you operate in.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card uk-card-default uk-card-body">
                                        <h3 className="uk-card-title">3. Develop</h3>
                                        <p>We respond to change rather then following a plan. We focus on customer needs and reduce the time planning campaigns.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TopCards;