import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import Cross from "../img/remove.png";
import axios from "axios";
import "sweetalert2/src/sweetalert2.scss";
import Success from "../img/check.png";
import "../css/App.css";

const EditFormPencatatan = ({ id }) => {
  const [Pencatatan, setPencatatan] = useState({
    nama: "",
    nip: "",
    kompetensi: "",
    kategori: "",
    tgl_mulai: "",
    tgl_selesai: "",
    jp: "",
    sebagai: "",
    penyelenggara: "",
    narasumber: "",
    tempat: "",
    sertifikat: "",
  });
  const [update, setUpdate] = useState({
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
  });

  const getdata = async () => {
    await axios
      .get(`http://localhost:3200/data_pencatatan/${id}`)
      .then((result) => setPencatatan(result.data))
      .catch((err) => console.log(err));
  };
  const submitedHandle = async (e) => {
    try {
      let url = `http://localhost:3200/data_pencatatan//${id}`;
      await axios.put(url, update);
      // window.location.reload();
      // console.log("data-update", update);
      Swal.fire({
        imageUrl: `${Success}`,
        imageWidth: 100,
        imageHeight: 100,
        width: 450,
        confirmButtonText: "Ok",
        confirmButtonColor: "#3BB54A",
        title: "Berhasil di Update",
      });
    } catch (error) {
      if (error.response.status === 400) {
        // console.log("ini error", error.response.data.errors[0]);
        Swal.fire({
          imageUrl: `${Cross}`,
          imageAlt: "Custom image",
          width: 450,
          confirmButtonColor: "#625BAD",
          title: error.response.data.errors[0],
          text: "Please Check Again",
        });
      }
    }
  };
  console.log("dataAwal", Pencatatan);
  console.log("id edit", id);
  // console.log("dataUpdate", update);
  // console.log("id edit", dataId);
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    setUpdate({
      ...update,
      nama: Pencatatan?.nama,
      nip: Pencatatan?.nip,
      kompetensi: Pencatatan?.kompetensi,
      kategori: Pencatatan?.kategori,
      tgl_mulai: Pencatatan?.tgl_mulai,
      tgl_selesai: Pencatatan?.tgl_selesai,
      jp: Pencatatan?.jp,
      sebagai: Pencatatan?.sebagai,
      penyelenggara: Pencatatan?.penyelenggara,
      narasumber: Pencatatan?.narasumber,
      tempat: Pencatatan?.tempat,
      sertifikat: Pencatatan?.sertifikat,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Pencatatan]);

  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nama Pegawai :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama pegawai" name="nama" value={update?.nama} onChange={(e) => setUpdate({ ...update, nama: e.target.value })} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>NIP :</Form.Label>
            <Form.Control type="text" inputMode="numeric" placeholder="Masukkan NIP" name="nip" value={update?.nip} onChange={(e) => setUpdate({ ...update, nip: e.target.value })} min="0" max="9" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nama Kompetensi :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama kompetensi" name="kompetensi" value={update?.kompetensi} onChange={(e) => setUpdate({ ...update, kompetensi: e.target.value })} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kategori Kompetensi :</Form.Label>
            <Form.Select aria-label="Pilih kategori kompetensi" name="kategori" value={update?.kategori} onChange={(e) => setUpdate({ ...update, kategori: e.target.value })} required>
              <option value="Keuangan">Keuangan</option>
              <option value="Kepegawaian">Kepegawaian</option>
              <option value="Kepemimpinan">Kepemimpinan</option>
              <option value="Teknologi Informasi">Teknologi Informasi</option>
              <option value="Humas">Humas</option>
              <option value="BMN">BMN</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tanggal Mulai :</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal mulai pelaksanaan kompetensi" name="tgl_mulai" value={update?.tgl_mulai} onChange={(e) => setUpdate({ ...update, tgl_mulai: e.target.value })} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tanggal Selesai :</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal selesai pelaksanaan kompetensi" name="tgl_selesai" value={update?.tgl_selesai} onChange={(e) => setUpdate({ ...update, tgl_selesai: e.target.value })} required />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>JP :</Form.Label>
            <Form.Control type="number" placeholder="Masukkan jumlah JP" name="jp" value={update?.jp} onChange={(e) => setUpdate({ ...update, jp: e.target.value })} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sebagai :</Form.Label>
            <Form.Select aria-label="Masukkan peran Anda dalam kompetensi tersebut" name="sebagai" vvalue={update?.sebagai} onChange={(e) => setUpdate({ ...update, sebagai: e.target.value })} required>
              <option value="Narasumber">Narasumber</option>
              <option value="Peserta">Peserta</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Penyelenggara :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama penyelenggara kompetensi" name="penyelenggara" value={update?.penyelenggara} onChange={(e) => setUpdate({ ...update, penyelenggara: e.target.value })} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Narasumber :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama narasumber" name="narasumber" value={update?.narasumber} onChange={(e) => setUpdate({ ...update, narasumber: e.target.value })} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Tempat :</Form.Label>
            <Form.Control type="text" placeholder="Masukkan tempat pelaksanaan kompetensi" name="tempat" value={update?.tempat} onChange={(e) => setUpdate({ ...update, tempat: e.target.value })} />
          </Form.Group>
          <Form.Group className="form">
            <Form.Label>Sertifikat :</Form.Label>
            <Form.Control type="file" placeholder="Masukkan Sertifikat" name="sertifikat" value={update?.sertifikat} onChange={(e) => setUpdate({ ...update, sertifikat: e.target.value })} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          type="submit"
          block
          onClick={() => {
            submitedHandle();
          }}
        >
          Edit data Kompetensi
        </Button>
      </Modal.Footer>
    </>
  );
};

export default EditFormPencatatan;
