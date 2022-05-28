import React from 'react';
import Navbar from "./components/Navbar";
import Btn_kompetensi from "./components/Btn_kompetensi";
import Searchbar from "./components/Searchbar";
import { SidebarData } from "./components/SidebarData";
import BookData from "./Data.json";

const Pengembangan = () => {

    const item = SidebarData;

  return (
    <>
    <Navbar dataNav={item} />
    <Searchbar placeholder="Cari..." data={BookData} />
    <Btn_kompetensi />
    </>
  )
}

export default Pengembangan
