import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BtnKompetensi from "./components/BtnKompetensi";
import "./components/Searchbar.css";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./components/SidebarData";
import { MdDelete } from "react-icons/md";
import { Button, Table } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import BtnEdit from "./components/BtnEdit";

const Pengembangan = () => {
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

  const getdata = async () => {
    await axios
      .get(`http://localhost:3200/data_kompetensi`)
      .then((result) => setsearchData(result.data))
      .catch((err) => console.log(err));
  };
  const getdataBase = async () => {
    await axios
      .get(`http://localhost:3200/data_kompetensi`)
      .then((result) => setdatabase(result.data))
      .catch((err) => console.log(err));
  };

  const item = SidebarData;
  const [searchData, setsearchData] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    getdataBase();
  }, []);

  console.log("searchdata", searchData);

  return (
    <>
      <Navbar dataNav={item} />
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder="cari data...." value={wordEntered} onChange={handleFilter} />

          <div className="searchIcon">{filteredData.length === 0 ? <AiOutlineSearch /> : <AiOutlineClose id="clearBtn" onClick={clearInput} />}</div>
        </div>
      </div>
      <BtnKompetensi />
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
                    <BtnEdit />

                    <Button variant="danger" className="btn-delete">
                      <MdDelete />
                    </Button>
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
                    <BtnEdit />

                    <Button variant="danger" className="btn-delete">
                      <MdDelete />
                    </Button>
                  </td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
};

export default Pengembangan;
