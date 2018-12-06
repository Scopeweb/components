import React, { Component } from 'react';
import Modal from 'react-modal';

import FormComponent from './FormComponent';

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
                    <FormComponent />
                    </div>
                </div>
            </div>
            </Modal>
          </div>
        );
      }

}

export default ContactForm;
