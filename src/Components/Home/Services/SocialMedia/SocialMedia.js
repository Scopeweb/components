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
      overflowY             : 'auto',
      backgroundColor       : '#182535',
      border                : '#E9204F'
    }
  };

  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root')

class SocialMedia extends Component {

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
            <div className="item service-box">
              <div className="inner" onClick={this.openModal}>
              <i className="overlay-icon icon pr-line-chat" />
              <h5 className="title uk-h5">Social Media</h5>
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
                <h2 className="uk-modal-title title-light">Social Media</h2>
                <h3 className="title uk-h4 title-light" style={{opacity: 1, transform: 'translateY(0px)'}}>We help businesses find the platforms that help them connect with customers, outside of the default choices.</h3>
                <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                <p>Scope's social media service is designed to keep you in total control of your messages across various social media networks, and is based on understanding your own unique business challenges and objectives.</p>
                <p>We will make sure you never fall into a well-publicised #epicfail campaign or a compilation of 'The 10 Biggest Social Media Disasters…' We also won’t completely take over your accounts because we know that people want to talk to you and not listen to constant, one-way sales messages pushed from your marketing agency.</p>
                <p>As part of our social media marketing service we provide help &amp; guidance with:</p>
                <ul>
                  <li>Brand Management</li>
                  <li>Social Media Monitoring</li>
                  <li>Creative Discussion</li>
                  <li>Reporting &amp; Analysis</li>
                  <li>Cross Channel Promotion</li>
                </ul>
                <p>Recognizing the need for a digital marketing strategy is just the first step, actually putting one together is an entirely different undertaking! We're here to help - send us a message.</p>
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

export default SocialMedia;
