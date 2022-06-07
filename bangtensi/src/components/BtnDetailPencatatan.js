import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../css/App.css";
import { AiOutlineFileSearch } from "react-icons/ai";
import DetailPencatatan from "./DetailPencatatan";

const BtnDetailPencatatan = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = async () => {
    setShow(false);
    //window.location.replace("/pencatatan-admin");
  };
  return (
    <>
      <Button onClick={handleShow} variant="primary" data-toggle="modal">
        <AiOutlineFileSearch />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detail Kompetensi</Modal.Title>
        </Modal.Header>
        <DetailPencatatan />
      </Modal>
    </>
  );
};

export default BtnDetailPencatatan;
