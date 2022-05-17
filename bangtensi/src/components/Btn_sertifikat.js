import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./App.css";
import { BsPlusLg } from "react-icons/bs";
import AddFormSertifikat from "./AddFormSertifikat";
import axios from "axios";

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
              <td>{item?.lihat}</td>
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

