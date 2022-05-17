import React from 'react';
import Navbar from "./components/Navbar";
import Btn_kompetensi from "./components/Btn_kompetensi";
import Searchbar from "./components/Searchbar";
import { SidebarData } from "./components/SidebarData";

const Pengembangan = () => {

    const item = SidebarData;

  return (
    <>
    <Navbar dataNav={item} />
    <Btn_kompetensi />
    <Searchbar />
    </>
  )
}

export default Pengembangan
