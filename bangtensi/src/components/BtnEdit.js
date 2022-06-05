import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./App.css";
import { MdModeEdit } from "react-icons/md";
import EditForm from "./EditForm";

const BtnEdit = ({ idData }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
    setid(idData);
  };
  const handleClose = async () => {
    setShow(false);
    window.location.replace("/");
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
          <Modal.Title>Edit Kompetensi</Modal.Title>
        </Modal.Header>
        <EditForm id={id} />
      </Modal>
    </>
  );
};

export default BtnEdit;
