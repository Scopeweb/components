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
      width                 : '55%'
    }
  };
  
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root')

class DesignConcept extends Component {

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
              <i className="overlay-icon icon pr-line-tools" />
              <h5 className="title uk-h5">Design &amp; Concept</h5>
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
                <h2 className="uk-modal-title">Design &amp; Concept</h2>
                <h3 className="title uk-h4" style={{opacity: 1, transform: 'translateY(0px)'}}>We create designs that are more than skin deep, engaging your users to come back.</h3>
                <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                <p>Each step in our process helps us to focus and hone in more closely on a user’s experience. In the IA we’re essentially establishing orientation and signposting an in wireframing we start to look more closely at the elements that a user will see on the screen itself: content, navigation, calls to action, interactive features etc.</p>
                <p>We use this process to identify content and feature priorities:</p>
                <ul>
                    <li>What does a visitor need to see first?</li>
                    <li>What do we know about this user?</li>
                    <li>If we know they’re an existing customer and they’re on a location aware mobile device, what content or feature would they find most useful?</li>
                </ul>
                <p>Wireframes are the documents that we output from this process, they’re essentially static (or interactive) sketches that demonstrate the content, features and navigation a page will have. They also become the blueprint for designers, developers, content writers, animators and SEO teams to all have a say and understand what a specific page needs to do and what they need to do to bring it into reality.</p>
                <p>Recognising the need for a strong Design &amp; Concept strategy is just the first step, actually putting one together is an entirely different undertaking! We're here to help - send us a message 📬</p>
                <p className="uk-text-right">
                <button className="uk-button uk-button-secondary uk-modal-close uk-margin-right" type="button" onClick={this.closeModal}>Cancel</button>
                <button className="uk-button uk-button-default" type="button" onClick={this.onClick}>E-mail our experts</button>
                </p>
            </div>
            </Modal>
          </div>
        );
      }

}

export default DesignConcept;