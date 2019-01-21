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

class UxDesign extends Component {

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
              <i className="overlay-icon icon pr-line-browser" />
              <h5 className="title uk-h5">UX Design</h5>
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
                <h2 className="uk-modal-title title-light">UX Design</h2>
                <h3 className="title uk-h4 title-light" style={{opacity: 1, transform: 'translateY(0px)'}}>This how we make interfaces that let your business goals connect to user needs.</h3>
                <hr className="line pr__hr__secondary" style={{opacity: 1, transform: 'translateY(0px)'}} />
                <p>We interview your audience and do field research. The product discovery methods help us find out people's wants and needs. We share what we learned on workshops, where we can decide together which direction to go.</p>
                <p>Based on the research we create customer journeys. We build up your user personas, discover and map your product’s full customer journey.</p>
                <p>
                  Then we create prototypes and test our ideas with real users. This way we can really get more feedback about your upcoming product’s usability.
                  Finally, we find the perfect look for your product. After deciding on the visual details our designers create the final, pixel perfect screens.
                </p>
                <p>Recognizing the need for a strong UX strategy is just the first step, actually putting one together is an entirely different undertaking! We're here to help - send us a message.</p>
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

export default UxDesign;
