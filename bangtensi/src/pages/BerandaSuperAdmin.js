import React from "react";
import { SidebarDataSuperAdmin } from "../components/SidebarDataSuperAdmin";
import SidebarSuperAdmin from "../components/SidebarSuperAdmin";

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
