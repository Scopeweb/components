import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '100%',
      maxHeight             : '100vh',
      overflowY             : 'auto',
      paddingTop            : '60px',
      backgroundColor       : '#0e1427'
    }
  };

  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root')

  class NavLightContact extends Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);

        this.state = {
          modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      onClick() {
          window.location.href = `mailto:info@scopeweb.nyc`;
      }

      openModal() {
        this.setState({modalIsOpen: true});
      }

      closeModal() {
        this.setState({modalIsOpen: false});
      }

      render() {
        return (
          <div>
            <div className="inner" onClick={this.openModal}>
              <a className="button uk-button uk-button-large uk-button-default">Work with us</a>
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
            <div className="form-outer">
                <div className="uk-container uk-container-xsmall">
                    <div className="form-inner uk-position-relative uk-margin-medium-top uk-margin-medium-bottom">
                        <button className="uk-modal-close-full uk-close uk-icon" type="button" data-uk-close="ratio: 2;" onClick={this.closeModal}><span></span></button>
                    <h2 className="uk-modal-title uk-h1 title-light">Let's Talk!</h2>
                    <p>We’d love to hear what you are working on. Drop us a note here and we’ll get back to you within 24 hours.</p>
                    <form className="pr__contact pr__form" action="https://formspree.io/info@scopeweb.nyc" method="POST">
                        <div className="pr__form__group">
                            <label htmlFor="name">Your Name <span className="required">*</span></label>
                            <input className="pr-input"     name="name" type="text" />
                        </div>
                        <div className="pr__form__group">
                            <label htmlFor="email">Your E-Mail <span className="required">*</span></label>
                            <input className="pr-input" name="_replyto" type="email" />
                        </div>
                        <div className="pr__form__group">
                        <div className="uk-child-width-1-3@s uk-grid uk-text-center" uk-grid>
                            <div>
                                <label htmlFor="input-web">
                                    <input className="uk-radio project-choice" type="radio" name="input-checked" id="input-web" />
                                    <div className="uk-card uk-card-default uk-card-body hover-card project-label">
                                    <svg className="contact-icon" viewBox="0 0 35 32" id="icon--monitor" width="50%" height="50%"> <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><g stroke="currentColor" strokeWidth={2}><g><g><g><path d="M17 25.1225806v5.6064517m-7.1 0h15-15zM3 1h29c1.1045695 0 2 .8954305 2 2v19.1225806c0 1.1045695-.8954305 2-2 2H3c-1.1045695 0-2-.8954305-2-2V3c0-1.1045695.8954305-2 2-2z" /></g></g></g></g></g> </svg>
                                        <p>Web App</p>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="input-mobile">
                                    <input className="uk-radio project-choice" type="radio" name="input-checked" id="input-mobile" />
                                    <div className="uk-card uk-card-default uk-card-body hover-card project-label">
                                      <svg className="contact-icon" viewBox="0 0 24 34" id="icon--smartphone" width="50%" height="50%"> <path d="M12 28c1.1045695 0 2-.8954305 2-2s-.8954305-2-2-2-2 .8954305-2 2 .8954305 2 2 2zM3 2c-.55228475 0-1 .44771525-1 1v28c0 .5522847.44771525 1 1 1h18c.5522847 0 1-.4477153 1-1V3c0-.55228475-.4477153-1-1-1H3zm0-2h18c1.6568542 0 3 1.34314575 3 3v28c0 1.6568542-1.3431458 3-3 3H3c-1.65685425 0-3-1.3431458-3-3V3c0-1.65685425 1.34314575-3 3-3z" fill="currentColor" fillRule="evenodd" /> </svg>
                                        <p>Mobile App</p>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="input-design">
                                    <input className="uk-radio project-choice" type="radio" name="input-checked" id="input-design" />
                                    <div className="uk-card uk-card-default uk-card-body hover-card project-label">
                                    <svg className="contact-icon" viewBox="0 0 34 34" id="icon--grid" width="50%" height="50%"> <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><g stroke="currentColor" strokeWidth={2}><g><g><g><path d="M1 1h12.4444444v12.4444444H1zM20.5555556 1H33v12.4444444H20.5555556zM20.5555556 20.5555556H33V33H20.5555556zM1 20.5555556h12.4444444V33H1z" /></g></g></g></g></g> </svg>
                                        <p>UI &amp; UX design</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="pr__form__group">
                            <label htmlFor="budget">What's your budget range?</label>
                            <select className="uk-select" id="budget" name="budget">
                                <option value="Less than $10,000t">Less than $10,000</option>
                                <option value="$10,000 - $20,000">$10,000 — $20,000</option>
                                <option value="$20,000 — $50,000">$20,000 — $50,000</option>
                                <option value="$50,000 — $100,000">$50,000 — $100,000</option>
                                <option value="$100,000+">$100,000+</option>
                            </select>
                        </div>
                        <div className="pr__form__group">
                            <label htmlFor="message">Project description <span className="required">*</span></label>
                            <textarea className="pr-textarea" id="message" name="message" defaultValue={""} />
                        </div>
                        <p className="pr__form__group uk-margin-large">
                            <button className="uk-button uk-button-large uk-button-primary" type="submit" value="Send">Send message</button>
                        </p>
                    </form>
                    </div>
                </div>
            </div>
            </Modal>
          </div>
        );
      }

}

export default NavLightContact;
