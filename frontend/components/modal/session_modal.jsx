import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';

class ModalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.push("/"); // push "/" onto history stack, and will redirect the user to the URL "/"

  }

  render() {
    return (
      <div>
        <Modal className="modal"

          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}

          contentLabel="Example Modal"
        >

        </Modal>
      </div>
    );
  }
}

export default withRouter(ModalForm);
