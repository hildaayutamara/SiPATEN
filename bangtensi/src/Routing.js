import React from "react";
import { Switch, Route } from "react-router-dom";
import Pengembangan from "./Pengembangan";
import Sertifikat from "./Sertifikat";
import Pengajuan from "./Pengajuan";
import Login from "./Login";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/pengembangan">
          <Pengembangan />
        </Route>
        <Route exact path="/sertifikat">
          <Sertifikat />
        </Route>
        <Route exact path="/pengajuan">
          <Pengajuan />
        </Route>
      </Switch>
    </>
  );
};

export default Routing;
