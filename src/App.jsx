import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Controller from "./components/Controller";
import Pannel from "./components/Pannel";

const App= () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Controller/>} />
        <Route path="/pannel" element={<Pannel passwords={passwords}/>} />     
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;