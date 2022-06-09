import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../../css/App.css";
import { MdModeEdit } from "react-icons/md";
import EditFormPelaksanaan from "../../components/FormEdit/EditFormPelaksanaan";

const BtnEditPelaksanaan = ({ idData }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
    setid(idData);
  };
  const handleClose = async () => {
    setShow(false);
    window.location.replace("/pelaksanaan-super-admin");
  };
  const [id, setid] = useState();
  console.log("ID BTN", idData);
  return (
    <>
      <Button onClick={handleShow} variant="warning" data-toggle="modal">
        <MdModeEdit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Pengajuan Pelaksanaan</Modal.Title>
        </Modal.Header>
        <EditFormPelaksanaan id={id} />
      </Modal>
    </>
  );
};

export default BtnEditPelaksanaan;
