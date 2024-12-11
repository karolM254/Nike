/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
/* eslint-enable no-unused-vars */
import { Link } from 'react-router-dom';
import './ProductosHombres.css';
import fotoTennis from "/assets/img/fototennis.jpg";
import fotoTennis2 from "/assets/img/678275-500-500.jpg";
import fotoTennis3 from "/assets/img/677182-500-500.jpg";
import fotoTennis4 from "/assets/img/702841-500-500.jpg";
import fotoTennis5 from "/assets/img/713556-500-500.jpg";
import fotoTennis6 from "/assets/img/678515-500-500.jpg";

function HombresProductos() {
  return (
    <>  
        {/* <div className="buscador-mujeres-productos">
            <div className="buscador-mujeres">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Buscar" className="buscar-producto" />
            </div>
        </div> */}
        
        <div className="buscarMen">
            <div className="buscadorMen">
                <i className="ri-search-line"></i>
                <input type="text" name="search" id="buscarProductosMen" placeholder='Buscar' />
            </div>    
        </div>

        <div className="conatinerPrdocutosMen">
        <div className="imgProductoMen">
            <Link to="/producto/1MEN">
                <img src={fotoTennis} alt="" />
            </Link>
            <p className='TittleProcut'>Air Jordan 11 Retro &#34;Legend Blue&#34;</p>
            <p className="descriptionProductoMen">Calzado Para hombre</p>
            <p className="priceProductMen">$ 1.294.950</p>
        </div>
        <div className="imgProductoMen">
            <Link to="/producto/2MEN">
                <img src={fotoTennis2} alt="" />
            </Link>
            <p className='TittleProcut'>W Nike Zoom Bella 6 PRm</p>
            <p className="descriptionProductoMen">Calzado Para hombre</p>
            <p className="priceProductMen">$ 845.950</p>
        </div>
        <div className="imgProductoMen">
            <Link to="/producto/3MEN">
                <img src={fotoTennis3} alt="" />
            </Link>
            <p className='TittleProcut'>Nike Full Force Low</p>
            <p className="descriptionProductoMen">Calzado Para hombre</p>
            <p className="priceProductMen">$ 560.950</p>
          
        </div>
        <div className="imgProductoMen">
            <Link to="/producto/4MEN">
                <img src={fotoTennis4} alt="" />
            </Link>
            <p className='TittleProcut'>Nike Cortez</p>
            <p className="descriptionProductoMen">Calzado Para hombre</p>
            <p className="priceProductMen">$ 380.950</p>
        </div>
        <div className="imgProductoMen">
        <Link to="/producto/5MEN">
                <img src={fotoTennis5} alt="" />
            </Link>
            <p className='TittleProcut'>Nike C1TY</p>
            <p className="descriptionProductoMen">Calzado Para hombre</p>
            <p className="priceProductMen">$ 695.950</p>
        </div>
        <div className="imgProductoMen">
            <Link to="/producto/6MEN">
                <img src={fotoTennis6} alt="" />
            </Link>
            <p className='TittleProcut'>Nike Killshot 2 Leather</p>
            <p className="descriptionProductoMen">Calzado Para hombre</p>
            <p className="priceProductMen">$ 922.950</p>
        </div>
    </div>
    <div className="mas-productos-hombres">
        <button className="boton-ver-mas-productos-hombres">
          Ver más
        </button>
      </div>
    </>
    )};
   


export default HombresProductos;