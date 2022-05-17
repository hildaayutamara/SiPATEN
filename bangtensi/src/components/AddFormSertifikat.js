import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./App.css";

const AddFormSertifikat = () => {
    const [Sertifikat, setSertifikat] = useState({
        id: uuidv4(),
        nomor: "",
        nama: "",
        update: "",
        lihat: "",
      });
    
      const onInputChange = (e) => {
        setSertifikat({ ...Sertifikat, [e.target.name]: e.target.value });
      };
    
      const { id, nomor, nama, update, lihat } = Sertifikat;
      const handleSubmit = async () => {
        await axios.post(`http://localhost:3200/data_sertifikat`, Sertifikat);
        alert("Sukses!");
      };
      console.log("data", Sertifikat);

  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group>
          <Form.Label>No. Serifikat :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nomor sertifikat" name="nomor" value={nomor} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Nama Sertifikat :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama sertifikat" name="nama" value={nama} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Update :</Form.Label>
            <Form.Control type="date" placeholder="Update" name="update" value={update} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Masukkan Sertifikat :</Form.Label>
            <Form.Control type="file" placeholder="Masukkan Sertifikat" name="lihat" value={lihat} onChange={(e) => onInputChange(e)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          type="submit"
          block
          onClick={() => {
            handleSubmit();
          }}
        >
          Buat Pengajuan Kompetensi
        </Button>
      </Modal.Footer>
  
    </>
  )
}

export default AddFormSertifikat
