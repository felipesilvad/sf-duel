import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';

function ModalSuper({handleClose, show, selectedChars}) {

  if (selectedChars) {
    return (
      <Modal  show={show} onHide={handleClose}>
        <Modal.Body className='modal-combo-sim'>
          {selectedChars.map(selectedChar => (
            selectedChar.title
          ))}
        </Modal.Body>
      </Modal>
    );
  } else {
    return (
      <Modal  show={show} onHide={handleClose}>
        <Modal.Body className='modal-combo-sim'>
          <h2 className='ardela'>SELECT A CHARACTER FIRST</h2>
        </Modal.Body>
      </Modal>
    );
  }
  
}

export default ModalSuper;