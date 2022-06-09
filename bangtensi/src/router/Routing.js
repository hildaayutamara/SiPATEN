import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import BerandaAdmin from "../pages/BerandaAdmin";
import PencatatanAdmin from "../pages/PencatatanAdmin";
import UsulanAdmin from "../pages/UsulanAdmin";
import PelaksanaanAdmin from "../pages/PelaksanaanAdmin";
import HasilAdmin from "../pages/HasilAdmin";
import RangkumanAdmin from "../pages/RangkumanAdmin";
import BerandaSuperAdmin from "../pages/BerandaSuperAdmin";
import PencatatanSuperAdmin from "../pages/PencatatanSuperAdmin";
import PelaksanaanSuperAdmin from "../pages/PelaksanaanSuperAdmin";
import UsulanSuperAdmin from "../pages/UsulanSuperAdmin";
import HasilSuperAdmin from "../pages/HasilSuperAdmin";
import RangkumanSuperAdmin from "../pages/RangkumanSuperAdmin";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/beranda-admin">
          <BerandaAdmin />
        </Route>
        <Route exact path="/pencatatan-admin">
          <PencatatanAdmin />
        </Route>
        <Route exact path="/usulan-admin">
          <UsulanAdmin />
        </Route>
        <Route exact path="/pelaksanaan-admin">
          <PelaksanaanAdmin />
        </Route>
        <Route exact path="/hasil-admin">
          <HasilAdmin />
        </Route>
        <Route exact path="/rangkuman-admin">
          <RangkumanAdmin />
        </Route>
        <Route exact path="/beranda-super-admin">
          <BerandaSuperAdmin />
        </Route>
        <Route exact path="/pencatatan-super-admin">
          <PencatatanSuperAdmin />
        </Route>
        <Route exact path="/pelaksanaan-super-admin">
          <PelaksanaanSuperAdmin />
        </Route>
        <Route exact path="/usulan-super-admin">
          <UsulanSuperAdmin />
        </Route>
        <Route exact path="/hasil-super-admin">
          <HasilSuperAdmin />
        </Route>
        <Route exact path="/rangkuman-super-admin">
          <RangkumanSuperAdmin />
        </Route>
      </Switch>
    </>
  );
};

export default Routing;
