import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';

class ModalForm extends React.Component {
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
    // console.log(this.props.history);
    this.props.history.push("/");

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
