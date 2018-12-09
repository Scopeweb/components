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
      width                 : '55%',
      maxHeight             : '100vh',
      overflowY             : 'auto'
    }
  };
  
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root')

class DigitalMarketing extends Component {

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
            <div className="item service-box uk-grid-margin uk-first-column">
              <div className="inner" onClick={this.openModal}>
              <i className="overlay-icon icon pr-line-presentation" />
              <h5 className="title uk-h5">Digital Marketing</h5>
              <i className="icon pr-arrow-right" />
              <a className="link uk-position-cover" />
              </div>
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
            <div className="uk-modal-body">
                <h2 className="uk-modal-title">Digital Marketing</h2>
                <h3 className="title uk-h4" style={{opacity: 1, transform: 'translateY(0px)'}}>We help businesses leverage digital channels to connect with current and prospective customers.</h3>
                <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                <p>In the digital age, producing rich content to attract audiences is necessary. As a creative agency, our capable strategists build digital content that drives human connection and conversation through storytelling.</p>
                <p>Google provides more ROI than any other digital platform. Most people find us through a Google search, and we’re ranked in the top positions for the most competitive terms in our industry. We help our partners do the same.</p>
                <p>Knowing how to cut through the noisy web takes skill. We analyze the digital channel to find smart opportunities, and build growth hacking tactics to help you become a market leader. </p>
                <p>Recognizing the need for a strong Digital Marketing strategy is just the first step, actually putting one together is an entirely different undertaking! We're here to help - send us a message.</p>
                <p className="uk-text-right">
                <button className="uk-button uk-button-secondary uk-modal-close uk-margin-right" type="button" onClick={this.closeModal}>Cancel</button>
                <button className="uk-button uk-button-default" type="button" onClick={this.onClick}>Get started</button>
                </p>
            </div>
            </Modal>
          </div>
        );
      }

}

export default DigitalMarketing;