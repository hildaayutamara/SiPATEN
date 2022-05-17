import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./App.css";


const AddForm = () => {
    const [Kompetensi, setKompetensi] = useState({
        id: uuidv4(),
        kompetensi: "",
        tanggal: "",
        jp: "",
        penyelenggara: "",
      });
    
      const onInputChange = (e) => {
        setKompetensi({ ...Kompetensi, [e.target.name]: e.target.value });
      };
    
      const { id, kompetensi, tanggal, jp, penyelenggara } = Kompetensi;
      const handleSubmit = async () => {
        await axios.post(`http://localhost:3200/data_kompetensi`, Kompetensi);
        alert("Sukses!");
      };
      console.log("data", Kompetensi);

  return (
    <>
        <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nama Kompetensi :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama kompetensi" name="kompetensi" value={kompetensi} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tanggal :</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal mulai pelaksanaan kompetensi" name="tanggal" value={tanggal} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>JP :</Form.Label>
            <Form.Control type="number" placeholder="Masukkan jumlah JP" name="jp" value={jp} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Penyelenggara :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama penyelenggara kompetensi" name="penyelenggara" value={penyelenggara} onChange={(e) => onInputChange(e)} />
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
          Tambah Kompetensi Baru
        </Button>
      </Modal.Footer>
  
    </>
  )
}

export default AddForm
