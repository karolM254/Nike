import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MujeresProductos from "./pages/MujeresProductos/MujeresProductos";
import MujeresProducto from "./pages/MujeresProducto/MujeresProducto";
import { Galeria } from "./pages/Galeria/Galeria";
import { SobreNosotros } from "./pages/SobreNosotros/SobreNosotros";
import { Fabricantes } from "./pages/Fabricantes/Fabricantes";
import SectionBrands from "./pages/Marcas_section1/SectionBrands";
import { Blogs } from "./pages/Blogs/Blogs";
import { PoliticaPrivacidad } from "./pages/PoliticaPrivacidad/PoliticaPrivacidad";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Ruta para la lista de productos de mujeres */}
          <Route path="/mujeres" element={<MujeresProductos />} />
          {/* Ruta para el detalle de un producto de mujer */}
          <Route path="/producto/:id" element={<MujeresProducto />} />
          {/* Ruta galeria de NIKE*/}
          <Route path="/galeria" element={<Galeria />} />
          {/* Ruta Sobre nosotros */}
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          {/* Ruta de fabricantes */}
          <Route path="/fabricantes" element={<Fabricantes />} />
          {/* Ruta langind page marcas */}
          <Route path="/landing" element={<main><SectionBrands /></main>}/>
          {/* Ruta de los blogs /*/}
          <Route path="/blogs" element={<Blogs />} />
          {/*/ Ruta de las politicas de privacidad */}
          <Route path="/politicas" element={<PoliticaPrivacidad /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
