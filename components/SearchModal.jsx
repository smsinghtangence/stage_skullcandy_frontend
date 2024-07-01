import React from 'react'
import SearchCard from '@/components/SearchCard'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function SearchModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

<input type="text" onFocus={handleShow} />

  <Modal show={show} onHide={handleClose} id="search-modal">
        <Modal.Header closeButton>
          <Modal.Title className='text-center d-block w-100 text-grey text-uppercase'>Search Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>    <SearchCard /></Modal.Body>
      
      </Modal>
    </>
  )
}

export default SearchModal