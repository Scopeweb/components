import React, { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div id="pr__contact__form" class="pr__contact__form uk-modal-full" data-uk-modal="">
                <div class="uk-modal-dialog" data-uk-height-viewport="">
                    <div class="form-outer">
                        <div class="uk-container uk-container-xsmall">
                            <div class="form-inner uk-position-relative">
                                <button class="uk-modal-close-full" type="button" data-uk-close="ratio: 2;"><span>Close</span></button>
                                <h2 class="uk-modal-title uk-h1">Let's Talk?</h2>
                                <p>Let’s make something awesome togheter</p>
                                <form class="pr__form" action="/">
                                    <div class="pr__form__group">
                                        <label for="name">Your Name <span class="required">*</span></label>
                                        <input class="pr-input" id="name" name="name" type="text" />
                                    </div>
                                    <div class="pr__form__group">
                                        <label for="email">Your E-Mail <span class="required">*</span></label>
                                        <input class="pr-input" id="email" name="email" type="text" />
                                    </div>
                                    <div class="pr__form__group">
                                        <label for="subject">Your Subject <span class="required">*</span></label>
                                        <input class="pr-input" id="subject" name="subject" type="text" />
                                    </div>
                                    <div class="pr__form__group">
                                        <label for="budget">What's your budget range?</label>
                                        <select class="uk-select" id="budget" name="budget">
                                            <option>&nbsp;</option>
                                            <option>Low budget</option>
                                            <option>$1,000 — $2,000</option>
                                            <option>$2,000 — $5,000</option>
                                            <option>$5,000 — $10,000</option>
                                            <option>$10,000+</option>
                                        </select>
                                    </div>
                                    <div class="pr__form__group">
                                        <label for="message">Your message <span class="required">*</span></label>
                                        <textarea class="pr-textarea" id="message" name="message"></textarea>
                                    </div>
                                    <p class="pr__form__group uk-margin-large">
                                        <button class="uk-button uk-button-large uk-button-primary" type="button">Send message</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;