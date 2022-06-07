import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../css/App.css";
import { MdModeEdit } from "react-icons/md";
import EditFormPencatatan from "./EditFormPencatatan";

const BtnEdit = ({ idData }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
    setid(idData);
  };
  const handleClose = async () => {
    setShow(false);
<<<<<<< HEAD:bangtensi/src/components/BtnEdit.js
    window.location.replace("/");
  };
  const [id, setid] = useState();
  console.log("ID BTN", idData);
=======
    window.location.replace("/pencatatan-super-admin");
  };
  const [id, setid] = useState();
  console.log("ID BTN", idData);

>>>>>>> 167353dc4b7077612e472b52b1dae019b7a082c5:bangtensi/src/components/BtnEditPencatatan.js
  return (
    <>
      <Button onClick={handleShow} variant="warning" data-toggle="modal">
        <MdModeEdit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Kompetensi</Modal.Title>
        </Modal.Header>
<<<<<<< HEAD:bangtensi/src/components/BtnEdit.js
        <EditForm id={id} />
=======
        <EditFormPencatatan id={id} />
>>>>>>> 167353dc4b7077612e472b52b1dae019b7a082c5:bangtensi/src/components/BtnEditPencatatan.js
      </Modal>
    </>
  );
};

export default BtnEdit;
