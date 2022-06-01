import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./App.css";
import { BsPlusLg } from "react-icons/bs";
import AddForm from "./AddForm";

const BtnKompetensi = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = async () => {
    setShow(false);
    window.location.replace("/pengembangan");
  };

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

export default BtnKompetensi;
