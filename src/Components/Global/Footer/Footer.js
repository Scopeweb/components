import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';

class Footer extends Component {
    render() {
        return (
            <footer className="pr__footer" id="site-footer">
                <div className="pr__footer__top uk-section uk-section-large">
                    <div className="section-outer">
                        <div className="uk-container">
                            <div className="section-inner">
                                <div className="columns uk-grid" data-uk-grid>
                                    <div className="pr__cta column">
                                        <div className="inner">
                                            <h2 className="title uk-h1">Let's Talk?</h2>
                                        </div>
                                    </div>
                                    <div className="pr__cta column uk-grid-margin uk-first-column">
                                        <ContactForm />
                                    </div>
                                    <div className="pr__social column uk-first-column uk-grid-margin">
                                        <div className="inner">
                                            <a href="https://facebook.com/scopeweb" target="_blank" rel="noopener" className="icon pr-logo-facebook" />
                                            <a href="https://twitter.com/scopewebnyc" target="_blank" rel="noopener" className="icon pr-logo-twitter" />
                                            <a href="https://instagram.com/scopeweb" target="_blank" rel="noopener" className="icon pr-logo-instagram" />
                                            <a href="https://wa.me/31621592938" className="icon pr-logo-whatsapp" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pr__footer__center uk-section uk-section-small">
                    <div className="uk-container">
                    <ul>
                        <li><a href="https://clients.scopeweb.nyc" target="_blank" rel="noopener">Client Portal<span className="phone">clients.scopeweb.nyc</span></a></li>
                        <li><a href="mailto:info@scopeweb.nyc">Email<span className="phone">info@scopeweb.nyc</span></a></li>
                    </ul>
                    </div>
                </div>
                <div className="pr__footer__bottom uk-section">
                    <div className="section-outer">
                        <div className="uk-container">
                            <div className="section-inner">
                                <div className="columns uk-grid" data-uk-grid>
                                    <div className="pr__links column">
                                        <div className="inner">
                                            <a href="#">Terms of use</a>
                                            <a href="#">Privacy Policy</a>
                                            <a href="#">Cookie Policy</a>
                                        </div>
                                    </div>
                                    <div className="pr__copyrights column uk-first-column">
                                        <div className="inner">
                                            <p>2018 © <a href="/">Scope Web LLC</a>, All rights reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
