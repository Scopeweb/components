import React, { Component } from 'react';

class MailChimp extends Component {
    render() {
        return (
            <form className="uk-grid-small" uk-grid>
                <div className="uk-width-1-1">
                    <input className="uk-input" type="text" placeholder="100" />
                </div>
                <div className="uk-width-1-2@s">
                    <input className="uk-input" type="text" placeholder="50" />
                </div>
                <div className="uk-width-1-4@s">
                    <input className="uk-input" type="text" placeholder="25" />
                </div>
                <div className="uk-width-1-4@s">
                    <input className="uk-input" type="text" placeholder="25" />
                </div>
                <div className="uk-width-1-2@s">
                    <input className="uk-input" type="text" placeholder="50" />
                </div>
                <div className="uk-width-1-2@s">
                    <input className="uk-input" type="text" placeholder="50" />
                </div>
            </form>
        );
    }
}

export default MailChimp;