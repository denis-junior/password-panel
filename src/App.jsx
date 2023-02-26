import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Controller from "./components/Controller";
import Pannel from "./components/Pannel";

const App = () => {
  const [passwords, setPasswords] = useState([5, 4, 3, 2, 1]);
  const [currentPassword, setCurrentPassword] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Controller setPasswords={setPasswords} passwords={passwords} />
          }
        />
        <Route
          path="/pannel"
          element={
            <Pannel passwords={passwords} currentPassword={currentPassword} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
