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

class AppDevelopment extends Component {

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
            <div className="item service-box uk-grid-margin uk-first-column uk-active">
              <div className="inner" onClick={this.openModal}>
              <i className="overlay-icon icon pr-line-phone" />
              <h5 className="title uk-h5">iOS &amp; Android</h5>
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
                <h2 className="uk-modal-title title-light">iOS &amp; Android</h2>
                <h3 className="title uk-h4 title-light" style={{opacity: 1, transform: 'translateY(0px)'}}>We have the expertise in both native and cross-platform technologies, we always find the right balance among price, quality, and project requirements.</h3>
                <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                <p>We build cross-platform apps that run on both iOS and Android from a single code base. Code written in React Native is operating system–agnostic, yet apps written in React feel just like native apps written in Java or Swift. Using React Native speeds up mobile app development for iOS and Android.</p>
                <p>The number of people who own Apple iPhones is growing year over year. You certainly want to offer your unique solution to this huge user base! We develop iOS apps for iPhones and iPads using the Swift and Objective-C programming languages and Apple’s own development tools and guidelines.</p>
                <p>Outside of iOS apps, we are experienced in Android mobile application development from scratch, and can port your existing iOS application to Android. We use Java to build apps for Google's mobile operating system.</p>
                <p>If your app needs to cover both iOS and Android, we use React Native. This allows us to build cross-platform apps that run on both iOS and Android from a single code base. Code written in React Native is operating system–agnostic, yet apps written in React feel just like native apps written in Java or Swift. Using React Native speeds up mobile app development for iOS and Android.</p>
                <p>Recognizing the need for a mobile app is a good start, but, actually putting one together is an entirely different undertaking! We're here to help - send us a message.</p>
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

export default AppDevelopment;
