import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MujeresProductos from "./pages/MujeresProductos/MujeresProductos";
import MujeresProducto from "./pages/MujeresProducto/MujeresProducto";
import { Galeria } from "./pages/Galeria/Galeria";
import { SobreNosotros } from "./pages/SobreNosotros/SobreNosotros";
import { Fabricantes } from "./pages/Fabricantes/Fabricantes";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Ruta para la lista de productos */}
          <Route path="/" element={<MujeresProductos />} />
          {/* Ruta para el detalle de un producto */}
          <Route path="/producto/:id" element={<MujeresProducto />} />
          {/* Ruta galeria de NIKE*/}
          <Route path="/galeria" element={<Galeria />} />
          {/* Ruta Sobre nosotros */}
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          {/* Ruta de fabricantes */}
          <Route path="/fabricantes" element={<Fabricantes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
