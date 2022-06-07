import React from "react";
import BtnSuperAdmin from "../components/BtnSuperAdmin";
import SidebarAdmin from "../components/Sidebar/SidebarAdmin";
import { SidebarDataAdmin } from "../components/Sidebar/SidebarDataAdmin";

const BerandaAdmin = () => {
  const item = SidebarDataAdmin;
  return (
    <>
      <SidebarAdmin dataNav={item} />
      <h1>Beranda</h1>
      <BtnSuperAdmin />
    </>
  );
};

export default BerandaAdmin;
