import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./App.css";
import { BsPlusLg } from "react-icons/bs";
import AddFormPengajuan from "./AddFormPengajuan";
import axios from "axios";

const Btn_pengajuan = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    const [database, setdatabase] = useState([]);
    const getdata = async () => {
      await axios
        .get(`http://localhost:3200/data_pengajuan`)
        .then((result) => setdatabase(result.data))
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      getdata();
    }, []);
    console.log("database>>>>>>>", database);

  return (
    <>
      <div className="btn-pengajuan">
        <Button onClick={handleShow} className="btn btn-primary" data-toggle="modal">
          <BsPlusLg />
          <span>Tambah Pengajuan</span>
        </Button>
      </div>

      <Table striped className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Jenis Kompetensi</th>
            <th>Penyelenggara</th>
            <th>Tujuan Kompetensi</th>
            <th>Tanggal Pengajuan</th>
          </tr>
        </thead>
        <tbody>
          {database?.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item?.jenis}</td>
              <td>{item?.penyelenggara}</td>
              <td>{item?.tujuan}</td>
              <td>{item?.tanggal}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pengajuan Kompetensi</Modal.Title>
        </Modal.Header>
        <AddFormPengajuan />
      </Modal>
    </>
  )
}

export default Btn_pengajuan
