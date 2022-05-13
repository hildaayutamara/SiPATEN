import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Btn_tambah from './components/Btn_tambah';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Diklat from './pages/Diklat';
import Sertifikat from './pages/Sertifikat';
import Pengajuan from './pages/Pengajuan';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Btn_tambah />
        <Routes>
          <Route path='/' exact component={Diklat} />
          <Route path='/reports' component={Sertifikat} />
          <Route path='/products' component={Pengajuan} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
