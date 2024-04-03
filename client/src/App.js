import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio.jsx";
import Catalogo from "./pages/Catalogo";
import Arduino from "./pages/Arduino";
import "./css/Apps.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/arduino" element={<Arduino />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
