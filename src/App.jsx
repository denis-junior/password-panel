import { BrowserRouter, Route, Routes } from "react-router-dom";
import Controller from "./components/Controller";
import Pannel from "./components/Pannel";
import { ContextProvider } from "./context/Context";

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Controller />} />
          <Route path="/pannel" element={<Pannel />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;