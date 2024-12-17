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
import { PoliticaPrivacidad } from "./pages/PoliticaPrivacidad/PoliticaPrivacidad";
import NinosProductos from "./pages/NinosProductos/NinosProductos";
import NinosProducto from "./pages/NinosProducto/NinosProducto";
import HombresProductos from "./pages/ProductosHombres/ProductosHombres";
import Idioma from "./pages/Idioma/Idioma";
import VerProductosHombres from "./pages/VerProductosHombres/VerProductosHombres";
import LandingPage from "./pages/LandingPage/LandingPage";
import Basquet from "./pages/Basquet/Basquet";
import ProductGrid from "./pages/ProductGrid/ProductGrid";
import InfoProducto from "./pages/InfoProducto/InfoProducto";
import InfoProductoBasquet from "./pages/InfoProducto/InfoProductoBasquet";
import InfoProductoTennis from "./pages/InfoProducto/InfoProductoTennis";
import InfoProductoAtletismo from "./pages/InfoProducto/InfoProductoAtletismo";
import Tennis from "./pages/Tennis/Tennis";
import Atletismo from "./pages/Atletismo/Atletismo";
import { Eventos } from "./pages/Eventos/Eventos";
import WooCommerceAPI from "./components/WoocomerceApi";
import Compras1 from "./pages/Compras1/Compras1";
import Carrito from "./pages/Carrito/Carrito";
import { CartProvider } from "./components/Carrito/CartContext";
import AtencionCliente from "./pages/AtencionCliente/AtencionCliente";



function App() { 
  return (
    <CartProvider>
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
            {/*/ Ruta de las politicas de privacidad */}
            <Route path="/politicas" element={<PoliticaPrivacidad /> } />
            {/* Ruta para la lista de productos */}
            <Route path="/productoNino" element={<NinosProductos />} />
            {/* Ruta para el detalle de un producto */}
            <Route path="/producto_nino/:id" element={<NinosProducto />} />
            {/* Rutas para la seccion de hombres */}
            <Route path="/hombre" element={<HombresProductos />} />
            <Route path="/productosHombre/:id" element={<VerProductosHombres />} />
            {/* Rutas para la seccion de idioma */}
            <Route path="/idioma" element={<Idioma />} />
            {/* Ruta para la landing page */}
            <Route path="/" element={<LandingPage/>}></Route>
            {/* el menu de inicio al dar en sport*/}
            <Route path="/futbol" element={<ProductGrid />} />
            <Route path="/basquet" element={<Basquet />} />
            {/* Ruta para ver la información del producto futbol */}
            <Route path="/futbol/infoproducto/:id" element={<InfoProducto />} /> 
            {/* Ruta para ver la información del producto basquet */}
            <Route path="/basquet/infoproducto/:id" element={<InfoProductoBasquet />} />
            {/* Ruta para ver la información del producto tennis*/}
            <Route path="/tennis/infoproducto/:id" element={<InfoProductoTennis />} /> 
            {/* Ruta para ver la información del producto atletismo*/}
            <Route path="/atletismo/infoproducto/:id" element={<InfoProductoAtletismo />} /> {/* Aplica lo mismo para Atletismo */}
            {/*ruta para ver el contenido de los productos de futbol*/}
            <Route path="/futbol" element={<ProductGrid />} />
            {/*ruta para ver el contenido de los productos de tenni*/}
            <Route path="/tennis" element={<Tennis />} />
            {/*ruta para ver el contenido de los productos de atletismo*/}
            <Route path="/atletismo" element={<Atletismo />} />
            {/* Rutas para los eventos */}
            <Route path="/eventos" element={<Eventos />} />
            {/*Ruta para Compra1*/}
            <Route path="/Compras1" element={<Compras1 />} />
            {/* Ruta para la sección del carrito */}
            <Route path="/carrito" element={<Carrito />} />
            {/* Ruta para la atención al cliente */}
            <Route path="/atencion" element={<AtencionCliente />} />
         
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
