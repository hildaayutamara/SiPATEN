import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./App.css";
import { BsPlusLg } from "react-icons/bs";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import AddForm from "./AddForm";
import axios from "axios";
//import DetailKompetensi from "./DetailKompetensi";

const Btn_kompetensi = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    const [database, setdatabase] = useState([]);
    const getdata = async () => {
      await axios
        .get(`http://localhost:3200/data_kompetensi`)
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
          <BsPlusLg className="icon" />
          <span>Tambah Kompetensi</span>
        </Button>
      </div>

      <Table striped className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Pegawai</th>
            <th>NIP</th>
            <th>Nama Kompetensi</th>
            <th>JP</th>
            <th>Penyelenggara</th>
            <th>Sertifikat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {database?.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item?.nama}</td>
              <td>{item?.nip}</td>
              <td>{item?.kompetensi}</td>
              <td>{item?.jp}</td>
              <td>{item?.penyelenggara}</td>
              <td>
                  <Button variant="success">
                    <span className="lihat">Lihat</span>
                    <FaEye />
                  </Button>
              </td>
              <td>
                  <Button variant="warning">
                    <MdModeEdit />
                  </Button>
                
                  <Button variant="danger" className="btn-delete">
                    <MdDelete />
                  </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Kompetensi</Modal.Title>
        </Modal.Header>
        <AddForm />
      </Modal> 
      
    </>
  )
}

export default Btn_kompetensi

/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detail Kompetensi</Modal.Title>
        </Modal.Header>
        <DetailKompetensi />
      </Modal>*/
