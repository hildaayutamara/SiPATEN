import React from 'react';
import { Switch, Route } from "react-router-dom";
import Pengembangan from './Pengembangan';
import Sertifikat from "./Sertifikat";
import Pengajuan from "./Pengajuan";

const Routing = () => {
  return (
    <>
    <Switch>
        <Route exact path="/">
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
  )
}

export default Routing
