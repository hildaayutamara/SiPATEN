import React from 'react';
import Navbar from "./components/Navbar";
import Btn_pengajuan from './components/Btn_pengajuan';
import Searchbar from "./components/Searchbar";
import { SidebarData } from "./components/SidebarData";

const Pengajuan = () => {
  
  const item = SidebarData;

  return (
    <>
    <Navbar dataNav={item} />
    <Btn_pengajuan />
    <Searchbar />
    </>
  )
}

export default Pengajuan

