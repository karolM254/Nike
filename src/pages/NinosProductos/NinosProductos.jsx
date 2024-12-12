import { Link } from "react-router-dom";
import "./NinosProductos.css"; 

const NinosProductos = () => (
  <div>
    <main className="contenido-Ninos">
      {/* Buscador */}
      <div className="buscador-Ninos-productos">
        <div className="buscador-Ninos">
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Buscar" className="buscar-producto" />
        </div>
      </div>

      {/* Grid de contenido */}
      <div className="grid-contenido-Ninos">
        {/* Fila 1 */}
        <div className="col col-1">
          <Link to={`/producto_nino/1`}>
            <img
              src="/assets/zapato1.jpg"
              alt="NIKE CORTEZ EASYON"
            />
          </Link>
          <h4>NIKE CORTEZ EASYON</h4>
          <div className="precio-Ninos">
            <h5>Calzado para niño</h5>
            <p>$269,950</p>
          </div>
        </div>
        <div className="col col-1">
          <Link to={`/producto_nino/2`}>
            <img
              src="/assets/zapato2.jpg"
              alt="NIKE COURT BOROUGH"
            />
          </Link>
          <h4>NIKE COURT BOROUGH</h4>
          <div className="precio-Ninos">
            <h5>Calzado para bebé</h5>
            <p>$239,950</p>
          </div>
        </div>
        <div className="col col-1">
          <Link to={`/producto_nino/3`}>
            <img
              src="/assets/zapato3.jpg"
              alt="AIR JORDAN 3 RETRO"
            />
          </Link>
          <h4>AIR JORDAN 3 RETRO</h4>
          <div className="precio-Ninos">
            <h5>Calzado para niño grande</h5>
            <p>$934,950</p>
          </div>
        </div>

        {/* Fila 2 */}
        <div className="col col-2">
          <Link to={`/producto_nino/4`}>
            <img
              src="/assets/zapato4.jpg"
              alt="NIKE FORCE 1 LOW SE EASYON"
            />
          </Link>
          <h4>NIKE FORCE 1 LOW SE EASYON</h4>
          <div className="precio-Ninos">
            <h5>Calzado para niño</h5>
            <p>$504,950</p>
          </div>
        </div>
        <div className="col col-2">
          <Link to={`/producto_nino/5`}>
            <img
              src="/assets/zapato5.jpg"
              alt="AIR JORDAN 1 LOW BG"
            />
          </Link>
          <h4>AIR JORDAN 1 LOW BG</h4>
          <div className="precio-Ninos">
            <h5>Calzado para niño</h5>
            <p>$654,950</p>
          </div>
        </div>
        <div className="col col-2">
          <Link to={`/producto_nino/6`}>
            <img
              src="/assets/zapato6.jpg"
              alt="AIR JORDAN 1 LOW SE"
            />
          </Link>
          <h4>AIR JORDAN 1 LOW SE</h4>
          <div className="precio-Ninos">
            <h5>Calzado para niño grande</h5>
            <p>$734,950</p>
          </div>
        </div>
      </div>
      <div className="mas-productos-Ninos">
        <button className="boton-ver-mas-productos">
          Ver más
        </button>
      </div>
    </main>
  </div>
);

export default NinosProductos;