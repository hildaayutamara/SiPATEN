import React from 'react';
import Navbar from "./components/Navbar";
import Btn_pengajuan from './components/Btn_pengajuan';
import Searchbar from "./components/Searchbar";
import { SidebarData } from "./components/SidebarData";
import BookData from "./Data.json";

const Pengajuan = () => {
  
  const item = SidebarData;

  return (
    <>
    <Navbar dataNav={item} />
    <Searchbar placeholder="Cari..." data={BookData} />
    <Btn_pengajuan />
    </>
  )
}

export default Pengajuan

