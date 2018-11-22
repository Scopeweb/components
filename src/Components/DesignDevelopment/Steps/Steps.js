import React, { Component } from 'react';

import StepAnalyze from './StepAnalyze/StepAnalyze';
import StepDesign from './StepDesign/StepDesign';
import StepDevelop from './StepDevelop/StepDevelop';
import SideBar from './SideBar/SideBar';

class Steps extends Component {
    render() {
        return (
            <div className="pr__content" id="site-content">
                <div className="pr__primary uk-section uk-section-large has-sidebar" id="site-primary">
                    <div className="outer">
                        <div className="uk-container uk-position-relative">
                            <div className="inner uk-grid uk-grid-large uk-grid-match" data-uk-grid>
                            <div className="uk-width-expand uk-first-column">
                                <main className="pr__main" id="site-main">
                                    <StepAnalyze />
                                    <StepDesign />
                                    <StepDevelop />
                                </main>
                            </div>
                            <SideBar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Steps;