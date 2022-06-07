import React from "react";
import { Button } from "react-bootstrap";
import "../../css/App.css";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import Success from "../../img/check.png";

const BtnDeletePencatatan = ({ idData }) => {
  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:3200/data_pencatatan/${idData}`)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    await Swal.fire({
      imageUrl: `${Success}`,
      imageWidth: 100,
      imageHeight: 100,
      width: 450,
      confirmButtonText: "Ok",
      confirmButtonColor: "#3BB54A",
      title: "Berhasil di Dihapus",
    }).then(() => window.location.reload());
  };

  console.log("Id Delete Btn", idData);

  return (
    <>
      <Button onClick={handleDelete} variant="danger" data-toggle="modal">
        <MdDelete />
      </Button>
    </>
  );
};

export default BtnDeletePencatatan;
