import React from "react";
import { Link } from "react-router-dom";
import "./MujeresProductos.css"; // Estilos específicos del componente

const MujeresProductos = () => (
  <div>
    <main className="contenido-mujeres">
      {/* Buscador */}
      <div className="buscador-mujeres-productos">
        <div className="buscador-mujeres">
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Buscar" className="buscar-producto" />
        </div>
      </div>

      {/* Grid de contenido */}
      <div className="grid-contenido-mujeres">
        {/* Fila 1 de productos */}
        <div className="col col-1">
          <Link to={`/producto/1`}>
            <img
              src="/assets/679005-500-500.webp"
              alt="AIR JORDAN 1 HIGH METHOD OF MAKE"
            />
          </Link>
          <h4>AIR JORDAN 1 HIGH METHOD OF MAKE</h4>
          <div className="precio-mujeres">
            <h5>Calzado para mujer</h5>
            <p>$1.004.950</p>
          </div>
        </div>
        <div className="col col-1">
          <Link to={`/producto/2`}>
            <img
              src="/assets/677567-500-500.webp"
              alt="NIKE VICTORI ONE"
            />
          </Link>
          <h4>NIKE VICTORI ONE</h4>
          <div className="precio-mujeres">
            <h5>Chancla para mujer</h5>
            <p>$199.950</p>
          </div>
        </div>
        <div className="col col-1">
          <Link to={`/producto/3`}>
            <img
              src="/assets/678301-500-500.webp"
              alt="NIKE AIR MAX SC"
            />
          </Link>
          <h4>NIKE AIR MAX SC</h4>
          <div className="precio-mujeres">
            <h5>Calzado para mujer</h5>
            <p>$564.950</p>
          </div>
        </div>

        {/* Fila 2 de productos */}
        <div className="col col-2">
          <Link to={`/producto/4`}>
            <img
              src="/assets/678274-500-500.webp"
              alt="W NIKE ZOOM BELLA 6 PRM"
            />
          </Link>
          <h4>W NIKE ZOOM BELLA 6 PRM</h4>
          <div className="precio-mujeres">
            <h5>Calzado para mujer</h5>
            <p>$524.950</p>
          </div>
        </div>
        <div className="col col-2">
          <Link to={`/producto/5`}>
            <img
              src="/assets/678936-500-500.webp"
              alt="AIR JORDAN 1 LOW SE"
            />
          </Link>
          <h4>AIR JORDAN 1 LOW SE</h4>
          <div className="precio-mujeres">
            <h5>Calzado para mujer</h5>
            <p>$834.950</p>
          </div>
        </div>
        <div className="col col-2">
          <Link to={`/producto/6`}>
            <img
              src="/assets/677786-500-500.webp"
              alt="NIKE COURT VISION ALTA"
            />
          </Link>
          <h4>NIKE COURT VISION ALTA</h4>
          <div className="precio-mujeres">
            <h5>Calzado para mujer</h5>
            <p>$254.950</p>
          </div>
        </div>
      </div>
      <div className="mas-productos-mujeres">
        <button className="boton-ver-mas-productos">
          Ver más
        </button>
      </div>
    </main>
  </div>
);

export default MujeresProductos;
