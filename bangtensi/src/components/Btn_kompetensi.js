import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './App.css';
import { BsPlusLg } from 'react-icons/bs';
import AddForm from './AddForm';

const Btn_kompetensi = () => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <>
    <div className='btn-kompetensi'>
      <Button onClick={handleShow} className="btn btn-primary" data-toggle="modal"><BsPlusLg /><span>Tambah Kompetensi</span></Button>
    </div>

    <table className='table'>
        <thead>
            <tr>
                <th>No.</th>
                <th>Nama Kompetensi</th>
                <th>Tanggal</th>
                <th>JP</th>
                <th>Penyelenggara</th>
            </tr>
        </thead>
    </table>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Tambah Kompetensi
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" type="submit" block>
                Tambah Kompetensi Baru
            </Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default Btn_kompetensi


