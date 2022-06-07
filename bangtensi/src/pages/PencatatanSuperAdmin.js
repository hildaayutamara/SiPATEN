import React, { useState, useEffect } from "react";
import SidebarSuperAdmin from "../components/Sidebar/SidebarSuperAdmin";
import "../css/Searchbar.css";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Button, Table } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import BtnEditPencatatan from "../components/ButtonEdit/BtnEditPencatatan";
import { SidebarDataSuperAdmin } from "../components/Sidebar/SidebarDataSuperAdmin";
import BtnDetailPencatatan from "../components/ButtonDetail/BtnDetailPencatatan";
import BtnDeletePencatatan from "../components/ButtonDelete/BtnDeletePencatatan";

const PencatatanSuperAdmin = () => {
  const [database, setdatabase] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = database.filter((value) => {
      return (
        value.nama.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.nip.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.kompetensi.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.penyelenggara.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const getdataBase = async () => {
    await axios
      .get(`http://localhost:3200/data_pencatatan`)
      .then((result) => setdatabase(result.data))
      .catch((err) => console.log(err));
  };

  const item = SidebarDataSuperAdmin;

  useEffect(() => {
    getdataBase();
  }, []);

  return (
    <>
      <SidebarSuperAdmin dataNav={item} />
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder="cari data...." value={wordEntered} onChange={handleFilter} />

          <div className="searchIcon">{filteredData.length === 0 ? <AiOutlineSearch /> : <AiOutlineClose id="clearBtn" onClick={clearInput} />}</div>
        </div>
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
            <th>Detail</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length !== 0
            ? filteredData.map((item, index) => (
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
                    <BtnDetailPencatatan />
                  </td>
                  <td>
                    <BtnEditPencatatan idData={item?.id} />

                    <BtnDeletePencatatan idData={item?.id} />
                  </td>
                </tr>
              ))
            : database?.map((item, index) => (
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
                    <BtnDetailPencatatan />
                  </td>
                  <td>
                    <BtnEditPencatatan idData={item?.id} />

                    <BtnDeletePencatatan idData={item?.id} />
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
};

export default PencatatanSuperAdmin;
