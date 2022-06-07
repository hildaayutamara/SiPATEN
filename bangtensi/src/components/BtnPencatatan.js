import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../css/App.css";
import { BsPlusLg } from "react-icons/bs";
import AddFormPencatatan from "./AddFormPencatatan";

const BtnKompetensi = () => {
  const [show, setShow] = useState(false);
<<<<<<< HEAD:bangtensi/src/components/BtnKompetensi.js
  const status = "Diproses";
  const handleShow = (e) => {
    setShow(true);
  };
  const handleClose = () => setShow(false);
=======
  const handleShow = () => setShow(true);
  const handleClose = async () => {
    setShow(false);
    window.location.replace("/pencatatan-admin");
  };
>>>>>>> 167353dc4b7077612e472b52b1dae019b7a082c5:bangtensi/src/components/BtnPencatatan.js

  return (
    <>
      <div className="btn-pencatatan">
        <Button onClick={handleShow} className="btn btn-primary" data-toggle="modal">
          <BsPlusLg className="icon" />
          <span>Tambah Pencatatan</span>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Kompetensi</Modal.Title>
        </Modal.Header>
<<<<<<< HEAD:bangtensi/src/components/BtnKompetensi.js
        <AddForm status={status} />
=======
        <AddFormPencatatan />
>>>>>>> 167353dc4b7077612e472b52b1dae019b7a082c5:bangtensi/src/components/BtnPencatatan.js
      </Modal>
    </>
  );
};

export default BtnKompetensi;
