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

class DigitalStrategy extends Component {

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
            <div className="item service-box uk-active">
              <div className="inner" onClick={this.openModal}>
              <i className="overlay-icon icon pr-line-strategy" />
              <h5 className="title uk-h5">Digital Strategy</h5>
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
                <h2 className="uk-modal-title">Digital Strategy</h2>
                <h3 className="title uk-h4" style={{opacity: 1, transform: 'translateY(0px)'}}>Research, scope and formulise your marketing strategy and communication schedule before implementation.</h3>
                <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                <p>Knowing where to start can be a very daunting task, but it doesn't have to be a stressful one as we are here to guide you through every step of the process. We can facilitate bespoke strategy workshops that give you the tools and confidence to put together your own comprehensive marketing strategy or can act as an extension to your marketing department by producing an actionable plan for you to implement.</p>
                <p>Marketing strategies can take various guises depending on your business and marketing objectives, so understanding these will determine if you need to focus your efforts and budget on social media or whether a content marketing strategy is more applicable. Our robust approach focuses on five main pillars that make up a marketing strategy.</p>
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

export default DigitalStrategy;