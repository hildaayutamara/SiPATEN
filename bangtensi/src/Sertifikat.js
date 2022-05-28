import React from 'react';
import Navbar from "./components/Navbar";
import Btn_sertifikat from './components/Btn_sertifikat';
import Searchbar from "./components/Searchbar";
import { SidebarData } from "./components/SidebarData";
import BookData from "./Data.json";

const Sertifikat = () => {
  const item = SidebarData;

  return (
    <>
    <Navbar dataNav={item} />
    <Searchbar placeholder="Cari..." data={BookData} />
    <Btn_sertifikat />
    </>
  )
}

export default Sertifikat

