import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./App.css";
import { IoIosCreate } from "react-icons/io";
import AddFormPengajuan from "./AddFormPengajuan";

const BtnPengajuan = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="btn-pengajuan">
        <Button onClick={handleShow} className="btn btn-primary" data-toggle="modal">
          <IoIosCreate className="icon" />
          <span>Buat Pengajuan</span>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pengajuan Kompetensi</Modal.Title>
        </Modal.Header>
        <AddFormPengajuan />
      </Modal>
    </>
  );
};

export default BtnPengajuan;
