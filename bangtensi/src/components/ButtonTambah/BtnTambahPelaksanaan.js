import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../../css/App.css";
import { BsPlusLg } from "react-icons/bs";
import AddFormPelaksanaan from "../../components/FormAdd/AddFormPelaksanaan";

const BtnTambahPelaksanaan = () => {
  const [show, setShow] = useState(false);
  const status = "Diproses";
  const handleShow = () => setShow(true);
  const handleClose = async () => {
    setShow(false);
    window.location.replace("/pelaksanaan-admin");
  };

  return (
    <>
      <div className="btn-pelaksanaan">
        <Button onClick={handleShow} className="btn btn-primary" data-toggle="modal">
          <BsPlusLg className="icon" />
          <span>Tambah Pengajuan</span>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pengajuan Pelaksanaan Kompetensi</Modal.Title>
        </Modal.Header>
        <AddFormPelaksanaan status={status} />
      </Modal>
    </>
  );
};

export default BtnTambahPelaksanaan;
