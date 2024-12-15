/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
/* eslint-enable no-unused-vars */
import { Link } from 'react-router-dom';
import './ProductosHombres.css';


function HombresProductos() {
  return (
    <>  
        <div className="buscarMen">
            <div className="buscadorMen">
                <i className="ri-search-line"></i>
                <input type="text" name="search" id="buscarProductosMen" placeholder='Buscar' />
            </div>    
        </div>

        <div className="conatinerPrdocutosMen">
        <div className="imgProductoMen">
            <Link to={`/productosHombre/1`}>
                <img src="/assets/fototennis.jpg" alt="Nike Full Force Low"/>
            </Link>
            <p className='TittleProcut'>Air Jordan 11 Retro &#34;Legend Blue&#34;</p>
            <p className="descriptionProductoMen">Calzado para hombre</p>
            <p className="priceProductMen">$ 1.294.950</p>
        </div>
        <div className="imgProductoMen">
            <Link to="/productosHombre/2">
                <img src="/assets/678275-500-500.jpg" alt="" />
            </Link>
            <p className='TittleProcut'>W Nike Zoom Bella 6 PRm</p>
            <p className="descriptionProductoMen">Calzado para hombre</p>
            <p className="priceProductMen">$ 845.950</p>
        </div>
        <div className="imgProductoMen">
            <Link to="/productosHombre/3">
                <img src="/assets/677182-500-500.jpg" alt="" />
            </Link>
            <p className='TittleProcut'>Nike Full Force Low</p>
            <p className="descriptionProductoMen">Calzado para hombre</p>
            <p className="priceProductMen">$ 560.950</p>
          
        </div>
        <div className="imgProductoMen">
            <Link to="/productosHombre/4">
                <img src="/assets/702841-500-500.jpg" alt="" />
            </Link>
            <p className='TittleProcut'>Nike Cortez</p>
            <p className="descriptionProductoMen">Calzado para hombre</p>
            <p className="priceProductMen">$ 380.950</p>
        </div>
        <div className="imgProductoMen">
        <Link to="/productosHombre/5">
                <img src="/assets/713556-500-500.jpg" alt="" />
            </Link>
            <p className='TittleProcut'>Nike C1TY</p>
            <p className="descriptionProductoMen">Calzado para hombre</p>
            <p className="priceProductMen">$ 695.950</p>
        </div>
        <div className="imgProductoMen">
            <Link to="/productosHombre/6">
                <img src="/assets/678515-500-500.jpg" alt="" />
            </Link>
            <p className='TittleProcut'>Nike Killshot 2 Leather</p>
            <p className="descriptionProductoMen">Calzado para hombre</p>
            <p className="priceProductMen">$ 922.950</p>
        </div>
    </div>
    <div className="mas-productos-hombres">
      </div>
    </>
    )};
   


export default HombresProductos;