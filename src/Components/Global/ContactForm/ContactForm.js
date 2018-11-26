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
      paddingTop            : '60px'
    }
  };
  
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root')

class ContactForm extends Component {

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
              <a className="button uk-button uk-button-large uk-button-default">Make an enquiry</a>
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
                    <div className="form-inner uk-position-relative">
                        <button className="uk-modal-close-full uk-close uk-icon" type="button" data-uk-close="ratio: 2;" onClick={this.closeModal}><span>Close</span></button>
                    <h2 className="uk-modal-title uk-h1">Let's Talk?</h2>
                    <p>Let’s make something awesome together</p>
                    <form className="pr__contact pr__form" action="includes/sendemail.php" noValidate="novalidate">
                        <div className="pr__form__group">
                            <label htmlFor="name">Your Name <span className="required">*</span></label>
                            <input className="pr-input" id="name" name="name" type="text" />
                        </div>
                        <div className="pr__form__group">
                            <label htmlFor="email">Your E-Mail <span className="required">*</span></label>
                            <input className="pr-input" id="email" name="email" type="text" />
                        </div>
                        <div className="pr__form__group">
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
                        </div>
                        <div className="pr__form__group">
                            <label htmlFor="budget">What's your budget range?</label>
                            <select className="uk-select" id="budget" name="budget">
                                <option>&nbsp;</option>
                                <option>Low budget</option>
                                <option>$1,000 — $2,000</option>
                                <option>$2,000 — $5,000</option>
                                <option>$5,000 — $10,000</option>
                                <option>$10,000+</option>
                            </select>
                        </div>
                        <div className="pr__form__group">
                            <label htmlFor="message">Project description <span className="required">*</span></label>
                            <textarea className="pr-textarea" id="message" name="message" defaultValue={""} />
                        </div>
                        <p className="pr__form__group uk-margin-large">
                            <button className="uk-button uk-button-large uk-button-primary" type="submit">Send message</button>
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

export default ContactForm;