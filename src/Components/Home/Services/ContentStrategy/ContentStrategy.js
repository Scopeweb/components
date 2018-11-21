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

class ContentStrategy extends Component {

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
              <i className="overlay-icon icon pr-line-clipboard" />
              <h5 className="title uk-h5">Content Strategy</h5>
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
                <h2 className="uk-modal-title">Content Strategy</h2>
                <h3 className="title uk-h4" style={{opacity: 1, transform: 'translateY(0px)'}}>We create content that speaks directly to your audience and builds a conversation around your brand.</h3>
                <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                <p>Stories matter. Good ones make a difference. We launch brands through innovative marketing, from conception to creation to conversion. With analytics tracking and campaign measurement, we combine the creative power of in-house writers, designers and videographers with the search data of your highest-value prospects.</p>
                <p>We employ creative storytellers from the U.S. who are trained to use digital tools to inform great content. Strong copywriting attracts more clicks and more conversations – it’s likely one of the first entry points into your sales funnel.</p>
                <p>Combining industry-focused content writers who excel at nailing tone, style and subject matter with experienced content marketing strategists and project managers, Scope Web ensures you can count on a copywriting services team that speaks to your target audience, drives commercial results and sticks to your deadlines.</p>
                <p>Recognising the need for a strong Content Creation strategy is just the first step, actually putting one together is an entirely different undertaking! We're here to help - send us a message 📬</p>
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

export default ContentStrategy;