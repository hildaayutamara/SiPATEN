import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./App.css";

const AddFormPengajuan = () => {
    const [Pengajuan, setPengajuan] = useState({
        id: uuidv4(),
        jenis: "",
        penyelenggara: "",
        tujuan: "",
        tanggal: "",
      });
    
      const onInputChange = (e) => {
        setPengajuan({ ...Pengajuan, [e.target.name]: e.target.value });
      };
    
      const { id, jenis, penyelenggara, tujuan, tanggal } = Pengajuan;
      const handleSubmit = async () => {
        await axios.post(`http://localhost:3200/data_pengajuan`, Pengajuan);
        alert("Sukses!");
      };
      console.log("data", Pengajuan);

  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Jenis Kompetensi :</Form.Label>
            <Form.Select aria-label="Masukkan jenis kompetensi" name="jenis" value={jenis} onChange={(e) => onInputChange(e)} required>
              <option value="Diklat Kepemimpinan">Diklat Kepemimpinan</option>
              <option value="Diklat Kepegewaian">Diklat Kepegawaian</option>
              <option value="Diklat Keuangan">Diklat Keuangan</option>
              <option value="FGD">FGD</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Penyelenggara :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama penyelenggara" name="penyelenggara" value={penyelenggara} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tujuan Kompetensi :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan tujuan pengajuan kompetensi" name="tujuan" value={tujuan} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tanggal Pengajuan :</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal pengajuan kompetensi" name="tanggal" value={tanggal} onChange={(e) => onInputChange(e)} />
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

export default AddFormPengajuan
