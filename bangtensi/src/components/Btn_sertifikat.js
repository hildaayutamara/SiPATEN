import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./App.css";
import { BsPlusLg } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import AddFormSertifikat from "./AddFormSertifikat";
import axios from "axios";

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const defaultLayoutPluginInstance = defaultLayoutPlugin();

const Btn_sertifikat = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    const [database, setdatabase] = useState([]);
    const getdata = async () => {
      await axios
        .get(`http://localhost:3200/data_sertifikat`)
        .then((result) => setdatabase(result.data))
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      getdata();
    }, []);
    console.log("database>>>>>>>", database);

    const handleLihat=() => {
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
    }

  return (
    <>
      <div className="btn-kompetensi">
        <Button onClick={handleShow} className="btn btn-primary" data-toggle="modal">
          <BsPlusLg />
          <span>Tambah Sertifikat</span>
        </Button>
      </div>

      <Table striped className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>No. Sertifikat</th>
            <th>Nama Sertifikat</th>
            <th>Update</th>
            <th>Lihat</th>
          </tr>
        </thead>
        <tbody>
          {database?.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item?.nomor}</td>
              <td>{item?.nama}</td>
              <td>{item?.update}</td>
              <td>
                    <Button variant="success">
                      <span className="me-2">Lihat Dokumen</span>
                      <FaEye />
                    </Button>
                </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Sertifikat Baru</Modal.Title>
        </Modal.Header>
        <AddFormSertifikat />
      </Modal>
    </>
  )
}

export default Btn_sertifikat

