import React from 'react';
import Navbar from "./components/Navbar";
import Btn_sertifikat from './components/Btn_sertifikat';
import Searchbar from "./components/Searchbar";
import { SidebarData } from "./components/SidebarData";

const Sertifikat = () => {
  const item = SidebarData;

  return (
    <>
    <Navbar dataNav={item} />
    <Btn_sertifikat />
    <Searchbar />
    </>
  )
}

export default Sertifikat

