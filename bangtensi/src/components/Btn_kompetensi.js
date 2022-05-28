import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./App.css";
import { BsPlusLg } from "react-icons/bs";
import AddForm from "./AddForm";

const Btn_kompetensi = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="btn-kompetensi">
        <Button onClick={handleShow} className="btn btn-primary" data-toggle="modal">
          <BsPlusLg className="icon" />
          <span>Tambah Kompetensi</span>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Kompetensi</Modal.Title>
        </Modal.Header>
        <AddForm />
      </Modal>
    </>
  );
};

export default Btn_kompetensi;
