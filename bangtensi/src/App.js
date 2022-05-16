import React from 'react';
import Navbar from './components/Navbar';
import Btn_kompetensi from './components/Btn_kompetensi';
import Searchbar from './components/Searchbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pengembangan from './Pengembangan';
import Sertifikat from './Sertifikat';
import Pengajuan from './Pengajuan';


const App = () => {
  return (
    <>
    <Router>
    <Navbar />
    <Btn_kompetensi />
    <Searchbar />
      <Routes>
          <Route path='/' exact component={Pengembangan} />
          <Route path='/sertifikat' component={Sertifikat} />
          <Route path='/pengajuan' component={Pengajuan} />
      </Routes>
    </Router>
    </>
  )
}

export default App
