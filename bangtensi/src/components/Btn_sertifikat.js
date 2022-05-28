import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./App.css";
import { IoIosCreate } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import AddFormSertifikat from "./AddFormSertifikat";
import axios from "axios";

//import { Viewer, Worker } from '@react-pdf-viewer/core';
//import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

//import '@react-pdf-viewer/core/lib/styles/index.css';
//import '@react-pdf-viewer/default-layout/lib/styles/index.css';

//const defaultLayoutPluginInstance = defaultLayoutPlugin();

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

      <Table striped className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Kompetensi</th>
            <th>Penyelenggara</th>
            <th>JP</th>
            <th>Nota Kegiatan</th>
            <th>Status</th>
            <th>Sertifikat</th>
          </tr>
        </thead>
        <tbody>
          {database?.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item?.nama}</td>
              <td>{item?.penyelenggara}</td>
              <td>{item?.jp}</td>
              <td>
                  <Button variant="success">
                    <span className="lihat">Lihat</span>
                    <FaEye />
                  </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buat Sertifikat Baru</Modal.Title>
        </Modal.Header>
        <AddFormSertifikat />
      </Modal>
    </>
  )
}

export default Btn_sertifikat

