import React from "react";
import BtnSuperAdmin from "../components/BtnSuperAdmin";
import SidebarAdmin from "../components/SidebarAdmin";
import { SidebarDataAdmin } from "../components/SidebarDataAdmin";

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
