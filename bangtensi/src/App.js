import React from "react";
import Routing from "./router/Routing";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
};

export default App;
