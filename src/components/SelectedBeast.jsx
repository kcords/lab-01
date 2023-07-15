import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

export default class SelectedBeast extends React.Component {
  render() {
    const { showModal, selectedBeast, handleBeastSelection } = this.props;
    const { title, image_url, description } = selectedBeast || {};
    return(
      <Modal show={showModal} onHide={() => { handleBeastSelection(null) }}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={image_url} fluid className="mb-3" />
          <p>{ description }</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => { handleBeastSelection(null) }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
