import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "../../css/App.css";
import Swal from "sweetalert2";
import Success from "../../img/check.png";

const AddFormHasil = (statuss) => {
  const [Hasil, setHasil] = useState({
    id: uuidv4(),
    nama: "",
    penyelenggara: "",
    jp: "",
    narasumber: "",
    tempat: "",
    tgl_mulai: "",
    tgl_selesai: "",
    nota: "",
    absen: "",
    materi: "",
    dokumentasi: "",
    status: "",
    file: "",
  });

  useEffect(() => {
    setHasil({ ...Hasil, status: statuss.status });
  }, []);

  const onInputChange = (e) => {
    setHasil({ ...Hasil, [e.target.name]: e.target.value });
  };

  const { nama, penyelenggara, jp, narasumber, tempat, tgl_mulai, tgl_selesai, nota, absen, materi, dokumentasi, status, file } = Hasil;
  const handleSubmit = async () => {
    await axios.post(`http://localhost:3200/data_hasil`, Hasil);
    Swal.fire({
      imageUrl: `${Success}`,
      imageWidth: 100,
      imageHeight: 100,
      width: 450,
      confirmButtonText: "Ok",
      confirmButtonColor: "#3BB54A",
      title: "Berhasil di Input",
    });
  };
  console.log("data", Hasil);

  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nama Kompetensi :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama kompetensi" name="nama" value={nama} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Penyelenggara :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama penyelenggara" name="penyelenggara" value={penyelenggara} onChange={(e) => onInputChange(e)} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>JP :</Form.Label>
            <Form.Control type="number" placeholder="Masukkan jumlah JP" name="jp" value={jp} onChange={(e) => onInputChange(e)} required />
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
            <Form.Label>Tanggal Mulai :</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal mulai pelaksanaan kompetensi" name="tgl_mulai" value={tgl_mulai} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tanggal Selesai :</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal selesai pelaksanaan kompetensi" name="tgl_selesai" value={tgl_selesai} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Nota Kegiatan :</Form.Label>
            <Form.Control type="file" placeholder="Masukkan file nota kegiatan" name="nota" value={nota} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Absensi :</Form.Label>
            <Form.Control type="file" placeholder="Masukkan file absensi peserta" name="absen" value={absen} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Materi :</Form.Label>
            <Form.Control type="file" placeholder="Masukkan file materi kompetensi" name="materi" value={materi} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Dokumentasi :</Form.Label>
            <Form.Control type="file" placeholder="Masukkan file dokumentasi kegiatan kompetensi" name="dokumentasi" value={dokumentasi} onChange={(e) => onInputChange(e)} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Status :</Form.Label>
            <Form.Control type="text" name="status" value={status} />
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
          Buat Sertifikat Baru
        </Button>
      </Modal.Footer>
    </>
  );
};

export default AddFormHasil;
