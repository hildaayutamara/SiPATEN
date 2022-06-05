import React from "react";
import { Routes, Route } from "react-router-dom";
import Pengembangan from "./Pengembangan";
import Sertifikat from "./Sertifikat";
import Pengajuan from "./Pengajuan";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Pengembangan />} />
        <Route exact path="/sertifikat" element={<Sertifikat />} />
        <Route exact path="/pengajuan" element={<Pengajuan />} />
      </Routes>
    </>
  );
};

export default Routing;
