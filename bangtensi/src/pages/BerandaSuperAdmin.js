import React from "react";
import { SidebarDataSuperAdmin } from "../components/Sidebar/SidebarDataSuperAdmin";
import SidebarSuperAdmin from "../components/Sidebar/SidebarSuperAdmin";

const BerandaSuperAdmin = () => {
  const item = SidebarDataSuperAdmin;
  return (
    <>
      <SidebarSuperAdmin dataNav={item} />
      <h1>Beranda Super Admin</h1>
    </>
  );
};

export default BerandaSuperAdmin;
