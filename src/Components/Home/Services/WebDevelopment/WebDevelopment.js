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

class WebDevelopment extends Component {

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
              <i className="overlay-icon icon pr-laptop" />
              <h5 className="title uk-h5">Web Development</h5>
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
                <h2 className="uk-modal-title title-light">Web Development</h2>
                <h3 className="title uk-h4 title-light" style={{opacity: 1, transform: 'translateY(0px)'}}>Developing the right foundation for your website is key to online success. Balancing functionality and user experience with the latest technology is essential to create the perfect platform to develop your web presence upon.</h3>
                <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                <p>Our website developers provide expert web application development and web design services to our clients. Scope offers a variety of website design and development services, from creating mobile web development solutions and responsive website designs, to building custom e-commerce and intranet experiences using the latest and proven web technologies. </p>
                <p>With up to 85% of consumers visiting company’s or service provider’s website before making a purchase, more and more consumers make decisions based on their online experience: the appearance, usability and accessibility of your website is more important than ever, especially in an increasingly competitive market.</p>
                <p>Recognizing the need for a strong online presence is just the first step, actually putting one together is an entirely different undertaking! We're here to help - send us a message.</p>
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

export default WebDevelopment;
