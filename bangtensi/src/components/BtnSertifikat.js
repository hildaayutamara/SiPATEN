import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./App.css";
import { IoIosCreate } from "react-icons/io";
import AddFormSertifikat from "./AddFormSertifikat";

//import { Viewer, Worker } from '@react-pdf-viewer/core';
//import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

//import '@react-pdf-viewer/core/lib/styles/index.css';
//import '@react-pdf-viewer/default-layout/lib/styles/index.css';

//const defaultLayoutPluginInstance = defaultLayoutPlugin();

const BtnSertifikat = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  /**const handleLihat=() => {
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
        <div style={{ height: '750px' }}>
            <Viewer
                fileUrl={`${process.env.PUBLIC_URL}/pdf-open-parameters.pdf`}
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    </Worker>
    }*/

  return (
    <>
      <div className="btn-sertifikat">
        <Button onClick={handleShow} className="btn btn-primary" data-toggle="modal">
          <IoIosCreate className="icon" />
          <span>Buat Sertifikat</span>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buat Sertifikat Baru</Modal.Title>
        </Modal.Header>
        <AddFormSertifikat />
      </Modal>
    </>
  );
};

export default BtnSertifikat;
