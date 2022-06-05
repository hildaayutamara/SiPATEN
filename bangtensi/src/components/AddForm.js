import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./App.css";

const AddForm = (statuss) => {
  const [Kompetensi, setKompetensi] = useState({
    id: uuidv4(),
    nama: "",
    nip: "",
    kompetensi: "",
    tgl_mulai: "",
    tgl_selesai: "",
    jp: "",
    sebagai: "",
    penyelenggara: "",
    narasumber: "",
    tempat: "",
    sertifikat: "",
    status: "",
  });

  useEffect(() => {
    setKompetensi({ ...Kompetensi, status: statuss.status });
  }, []);

  const onInputChange = (e) => {
    setKompetensi({ ...Kompetensi, [e.target.name]: e.target.value });
  };

  const { id, nama, nip, kompetensi, tgl_mulai, tgl_selesai, jp, sebagai, status, penyelenggara, narasumber, tempat, sertifikat } = Kompetensi;
  const handleSubmit = async () => {
    await axios.post(`http://localhost:3200/data_kompetensi`, Kompetensi);
    alert("Sukses!");
  };
  console.log("data", Kompetensi);
  console.log("props", statuss);
  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nama Pegawai :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama pegawai" name="nama" value={nama} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>NIP :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan NIP" name="nip" value={nip} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nama Kompetensi :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama kompetensi" name="kompetensi" value={kompetensi} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tanggal Mulai :</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal mulai pelaksanaan kompetensi" name="tgl_mulai" value={tgl_mulai} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tanggal Selesai :</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal selesai pelaksanaan kompetensi" name="tgl_selesai" value={tgl_selesai} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>JP :</Form.Label>
            <Form.Control type="number" placeholder="Masukkan jumlah JP" name="jp" value={jp} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sebagai :</Form.Label>
            <Form.Select aria-label="Masukkan peran Anda dalam kompetensi tersebut" name="sebagai" value={sebagai} onChange={(e) => onInputChange(e)} required>
              <option value="Narasumber">Narasumber</option>
              <option value="Peserta">Peserta</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Penyelenggara :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama penyelenggara kompetensi" name="penyelenggara" value={penyelenggara} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Narasumber :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama narasumber" name="narasumber" value={narasumber} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tempat :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan tempat pelaksanaan kompetensi" name="tempat" value={tempat} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Sertifikat :</Form.Label>
            <Form.Control type="file" placeholder="Masukkan Sertifikat" name="sertifikat" value={sertifikat} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Status :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Sertifikat" name="status" value={status} />
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
  );
};

export default AddForm;
