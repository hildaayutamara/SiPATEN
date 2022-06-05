import React, { useState, useEffect } from "react";
import SidebarAdmin from "../components/SidebarAdmin";
import "../css/Searchbar.css";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Table } from "react-bootstrap";
import axios from "axios";
import { SidebarDataAdmin } from "../components/SidebarDataAdmin";

const Rangkuman = () => {
  const [database, setdatabase] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = database.filter((value) => {
      return value.kategori.toLowerCase().includes(searchWord.toLowerCase());
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
  const item = SidebarDataAdmin;

  useEffect(() => {
    getdataBase();
  }, []);

  return (
    <>
      <SidebarAdmin dataNav={item} />
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
            <th>Kategori Kompetensi</th>
            <th>Jumlah Peserta</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length !== 0
            ? filteredData.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item?.kategori}</td>
                  <td></td>
                </tr>
              ))
            : database?.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item?.kategori}</td>
                  <td></td>
                </tr>
              ))}
        </tbody>
      </Table>
    </>
  );
};

export default Rangkuman;
