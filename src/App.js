import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import Contacto from "./pages/Contacto";
import Experiencias from "./pages/Experiencias";
import Nosotros from "./pages/Nosotros";
import Reserva from "./pages/Reserva";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/Experiencias" element={<Experiencias/>} />
        <Route path="/Nosotros" element={<Nosotros/>} />
        <Route path="/Reserva" element={<Reserva/>} />
        
      </Routes>
    </div>
  );
}

export default App;
