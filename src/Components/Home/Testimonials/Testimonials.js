import React, { Component } from 'react';

class Testimonials extends Component {
    render() {
        return (
            <section className="pr__clients pr__section uk-section uk-section-large" id="pr__clients">
                <div className="uk-container">
                    <div className="section-outer">
                    <div className="uk-flex uk-flex-middle uk-grid uk-grid-large" data-uk-grid>
                        <div className="right uk-width-expand">
                        <div className="section-heading">
                            <div className="inner">
                            <div className="left">
                                <hr className="line pr__hr__secondary" />
                                <h2 className="title uk-h1">What Clients Say.</h2>
                                <span className="subtitle pr__heading__secondary">From all over the world</span>
                            </div>
                            </div>
                        </div>
                        <div className="section-inner">
                            <div className="item client-box">
                            <div className="outer">
                                <div className="inner">
                                <p className="description">We are motivated by the satisfaction of our
                                    clients. Put your trust in us and share
                                    in our growth Asset Management is made up of a team of expert,
                                    committed and experienced people with a passion for
                                    financial markets. Our goal is to achieve continuous and
                                    sustainable growth of our clients.</p>
                                <p className="client">Aron Smith, UX Designer</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="left uk-width-2-5@m uk-flex-first uk-first-column">
                        <div className="item client-box client-image">
                            <div className="image pr__image__cover pr__ratio__portrait" data-src="assets/images/client_01.jpg" data-uk-img style={{backgroundImage: 'url("http://gentium.pixerex.com/html/demo/assets/images/client_01.jpg")'}} />
                        </div>
                        </div>
                    </div>{/* Grid End */}
                    </div>{/* Outer End */}
                </div>{/* Container End */}
                </section>
        );
    }
}

export default Testimonials;