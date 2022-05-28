import React from 'react';
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";


const App = () => {

  return (
    <>
    <BrowserRouter>
        <Routing />
    </BrowserRouter>
    </>
  )
}

export default App
