import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../../css/App.css";
import { BsPlusLg } from "react-icons/bs";
import AddFormPencatatan from "../../components/FormAdd/AddFormPencatatan";

const BtnTambahPencatatan = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = async () => {
    setShow(false);
    window.location.replace("/pencatatan-admin");
  };

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
        <AddFormPencatatan />
      </Modal>
    </>
  );
};

export default BtnTambahPencatatan;
