import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../css/App.css";
import { MdModeEdit } from "react-icons/md";
import EditFormUsulan from "./EditFormUsulan";

const BtnEditUsulan = ({ idData }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
    setid(idData);
  };
  const handleClose = async () => {
    setShow(false);
    window.location.replace("/usulan-super-admin");
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
          <Modal.Title>Edit Usulan Kepesertaan</Modal.Title>
        </Modal.Header>
        <EditFormUsulan id={id} />
      </Modal>
    </>
  );
};

export default BtnEditUsulan;
