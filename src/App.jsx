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
import NinosProductos from "./pages/NinosProductos/NinosProductos";
import NinosProducto from "./pages/NinosProducto/NinosProducto";
import HombresProductos from "./pages/ProductosHombres/ProductosHombres";
import Customize from "./pages/Customize/Customize";
import Idioma from "./pages/Idioma/Idioma";
import VerProductosHombres from "./pages/VerProductosHombres/VerProductosHombres";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Ruta para la lista de productos */}
          <Route path="/productosmujeres" element={<MujeresProductos />} />
          {/* Ruta para el detalle de un producto */}
          <Route path="/producto/:id" element={<MujeresProducto />} />
          {/* Ruta galeria de NIKE*/}
          <Route path="/galeria" element={<Galeria />} />
          {/* Ruta Sobre nosotros */}
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          {/* Ruta de fabricantes */}
          <Route path="/fabricantes" element={<Fabricantes />} />
          {/* Ruta langind page marcas */}
          <Route path="/marcas" element={<main><SectionBrands /></main>}/>
          {/* Ruta de los blogs /*/}
          <Route path="/blogs" element={<Blogs />} />
          {/*/ Ruta de las politicas de privacidad */}
          <Route path="/politicas" element={<PoliticaPrivacidad /> } />
          {/* Ruta para la lista de productos */}
          <Route path="/productoNino" element={<NinosProductos />} />
          {/* Ruta para el detalle de un producto */}
          <Route path="/producto/:id" element={<NinosProducto />} />
           {/* Rutas para la seccion de hombres */}
          <Route path="/hombre" element={<HombresProductos />} />
          <Route path="/producto/:id" element={<VerProductosHombres />} />
           {/* Rutas para la seccion de personalizado*/}
          <Route path="/personalizado" element={<Customize />} />
           {/* Rutas para la seccion de idioma */}
          <Route path="/idioma" element={<Idioma />} />
          {/* Ruta para la landing page */}
          <Route path="/" element={<LandingPage/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
