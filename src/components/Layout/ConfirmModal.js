import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class ConfirmModal extends Component {
  render() {
    const { message, isOpen, onReject, onAccept } = this.props;
    return (
      <Modal isOpen={isOpen} onClosed={() => onReject()}>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button onClick={() => onReject()}>Cancel</Button>
          <Button color="primary" onClick={() => onAccept()}>
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ConfirmModal
