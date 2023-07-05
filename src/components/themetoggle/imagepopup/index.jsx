import React from "react";
import { Modal, Button } from "react-bootstrap";

const ImagePopup = ({ show, handleClose, imageUrl, desc }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{desc}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageUrl} alt="" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImagePopup;
