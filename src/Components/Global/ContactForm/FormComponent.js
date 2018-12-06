import React, { Component } from 'react';
import validator from 'validator';
import FormError from './FormErrors';
require('dotenv').config()

const sgMail = require('@sendgrid/mail');

export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      tel: '',
      desc: '',
      formValidity: false,
      submitDisabled: false,
      formErrors: {
        email: 'Please enter a correct email address',
        name: 'Make sure you enter your first and last name, we like to get to know you',
        tel: 'Telephone numbers can contain 10 numeric characters (e.g. 3057778866)',
        desc: 'Please describe your project in as much detail as possible'
      },
    };

    const SENDGRID_API_KEY = "process.env.SENDGRID_API_KEY";
    sgMail.setApiKey(SENDGRID_API_KEY);

    this.changeValue = this.changeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  };

  changeValue = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    let formValidity = true;
    let errorType = undefined;

    const MSG = {
      to: 'info@scopeweb.nyc',
      from: 'web@scopeweb.nyc',
      subject: 'Project Request',
      text: '  ',
      html: '<div style="text-align:center;font-size:22px">' +
      '<h2>You have received a new lead!</h2>' +
      '<ul style="text-alig:left;font-size:16px">' +
      '<li>First Name: ' + this.state.fName + '</li>' +
      '<li>Last Name: ' + this.state.lName + '</li>' +
      '<li>Email Address: ' + this.state.email + '</li>' +
      '</ul>' +
      '<p>Project description: ' + this.state.desc + '</p>' +
      '</div>',
    };

    if (!validator.isEmail(this.state.email)) {
      formValidity = false;
      errorType = this.state.formErrors.email
    } else if (!validator.isAlpha(this.state.fName) || !validator.isAlpha(this.state.lName)) {
      formValidity = false;
      errorType = this.state.formErrors.name
    }
    if (!formValidity) {
      this.setState({
        formValidity,
        errorType
      })
    } else {
      this.setState({
        formValidity,
        erorrType: "Success, we'll get back to you shortly!",
        submitDisabled: true,
        fName: '',
        lName: '',
        email: '',
        tel: '',
        desc: ''
      }, () => sgMail.send(MSG))
    }
  };

  render() {
    return (
      <form className="pr__contact pr__form">
        <div className="pr__form__group">
          <label htmlFor="name">First Name <span className="required">*</span></label>
          <input
            className="pr-input"
            value={this.state.fName}
            name="fName"
            onChange={event => this.changeValue(event)}
            required={this.props.required || null}
          />
        </div>
        <div className="pr__form__group">
          <label htmlFor="name">Last Name <span className="required">*</span></label>
          <input
            className="pr-input"
            value={this.state.lName}
            name="lName"
            onChange={event => this.changeValue(event)}
            required={this.props.required || null}
          />
        </div>
        <div className="pr__form__group">
          <label htmlFor="email">Your E-Mail <span className="required">*</span></label>
          <input
            className="pr-input"
            value={this.state.email}
            name="email"
            onChange={event => this.changeValue(event)}
            required={this.props.required || null}
          />
        </div>
        {/* TODO: Create checkbox + states */}
        {/* <div className="pr__form__group">
          <div className="uk-child-width-1-3@s uk-grid uk-text-center" uk-grid>
            <div>
              <label htmlFor="input-frontend">
                <input class="uk-radio project-choice" type="radio" name="input-checked" id="input-frontend" />
                <div className="uk-card uk-card-default uk-card-body hover-card project-label">
                <svg viewBox="0 0 35 32" id="icon--monitor" width="50%" height="50%"> <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><g stroke="currentColor" strokeWidth={2}><g><g><g><path d="M17 25.1225806v5.6064517m-7.1 0h15-15zM3 1h29c1.1045695 0 2 .8954305 2 2v19.1225806c0 1.1045695-.8954305 2-2 2H3c-1.1045695 0-2-.8954305-2-2V3c0-1.1045695.8954305-2 2-2z" /></g></g></g></g></g> </svg>
                    <p>Front-end</p>
                </div>
              </label>
            </div>
            <div>
              <label htmlFor="input-backend">
                <input class="uk-radio project-choice" type="radio" name="input-checked" id="input-backend" />
                <div className="uk-card uk-card-default uk-card-body hover-card project-label">
                <svg viewBox="0 0 36 34" id="icon--server" width="50%" height="50%"> <g fill="none" fillRule="evenodd"><g><g><g><g transform="translate(1 1)"><rect stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={34} height="12.8" rx={2} /><rect stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" y="19.2" width={34} height="12.8" rx={2} /><ellipse fill="currentColor" cx="6.375" cy="6.4" rx="2.125" ry="2.13333333" /><ellipse fill="currentColor" cx="6.375" cy="25.6" rx="2.125" ry="2.13333333" /></g></g></g></g></g> </svg>
                    <p>Back-end</p>
                </div>
              </label>
            </div>
            <div>
              <label htmlFor="input-design">
                <input class="uk-radio project-choice" type="radio" name="input-checked" id="input-design" />
                <div className="uk-card uk-card-default uk-card-body hover-card project-label">
                <svg viewBox="0 0 34 34" id="icon--grid" width="50%" height="50%"> <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><g stroke="currentColor" strokeWidth={2}><g><g><g><path d="M1 1h12.4444444v12.4444444H1zM20.5555556 1H33v12.4444444H20.5555556zM20.5555556 20.5555556H33V33H20.5555556zM1 20.5555556h12.4444444V33H1z" /></g></g></g></g></g> </svg>
                  <p>UI &amp; UX design</p>
                </div>
              </label>
            </div>
          </div>
        </div> */}
        {/* TODO: Create option input + state */}
        {/* <div className="pr__form__group">
          <label htmlFor="budget">What's your budget range?</label>
          <select className="uk-select" id="budget" name="budget">
            <option>&nbsp;</option>
            <option value="Low budget">Low budget</option>
            <option value="$1,000 - $2,000">$1,000 — $2,000</option>
            <option>$2,000 — $5,000</option>
            <option>$5,000 — $10,000</option>
            <option>$10,000+</option>
          </select>
        </div> */}
        <div className="pr__form__group">
          <label htmlFor="message">Project description <span className="required">*</span></label>
          <textarea
            className="pr-textarea"
            value={this.state.desc}
            name="desc"
            onChange={event => this.changeValue(event)}
          />
        </div>
        <p className="pr__form__group uk-margin-large">
          <button disabled={this.state.submitDisabled} onClick={(event) => this.onSubmit(event)} className="uk-button uk-button-large uk-button-primary">Send message</button>
          <FormError errorType={this.state.errorType}/>
        </p>
      </form>
    )
  }
}
