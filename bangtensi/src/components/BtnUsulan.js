import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../css/App.css";
import { BsPlusLg } from "react-icons/bs";
import AddFormUsulan from "./AddFormUsulan";

const BtnUsulan = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = async () => {
    setShow(false);
    window.location.replace("/usulan-admin");
  };
  return (
    <>
      <div className="btn-usulan">
        <Button onClick={handleShow} className="btn btn-primary" data-toggle="modal">
          <BsPlusLg className="icon" />
          <span>Tambah Usulan</span>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pengajuan Usulan Kepesertaan</Modal.Title>
        </Modal.Header>
        <AddFormUsulan />
      </Modal>
    </>
  );
};

export default BtnUsulan;
