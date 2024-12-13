import React from 'react';
import './Compras1.css';

function Compras1({ onNext }) {
  return (
    <div className="compras-container">
      <div className="form-container">
        
        <form>
        <h2>Datos Personales</h2>
       
        <label htmlFor="email">Correo electrónico</label>
          <input type="email"  />

          <div className="row">
  <div>
    <label htmlFor="Nombre">Nombre</label>
    <input type="text" id="Nombre" />
  </div>
  <div>
    <label htmlFor="Apellidos">Apellidos</label>
    <input type="text" id="Apellidos" />
  </div>
</div>
<div className="row">
  <div>
    <label htmlFor="CodigoPostal">Código Postal</label>
    <input type="text" id="CodigoPostal" />
  </div>
  <div>
    <label htmlFor="Documento">Número de Documento</label>
    <input type="text" id="Documento" />
  </div>
</div>
<div className="row">
  <div>
    <label htmlFor="Telefono">Teléfono / Móvil</label>
    <input type="text" id="Telefono" />
  </div>
  <div>
    <label htmlFor="Direccion">Dirección</label>
    <input type="text" id="Direccion" />
  </div>
</div>


          <button class="btn" type="button">Guardar y continuar</button>
        </form>
      </div>
      <div className="summary-container">
      <h2>RESUMEN DE <br /> COMPRA</h2>
        <div className="summary-items">
          {Array(4).fill(null).map((_, index) => (
            <div className="item" key={index}>
              <div className="item-content">
                <img src="/assets/zapato5.jpg" alt="Mini Imagen" className="mini-image" />
                <p>Zapatos Nike <br /> Calzado 40</p>
              </div>
              <p>$ 389.950</p>
            </div>
          ))}
        </div>
        <div className="total">
          <p>Total</p>
          <p>$ 1.559.800</p>
        </div>
        <div className="subtotal">
          <p>Subtotal</p>
          <p>$ 1.559.800</p>
        </div>
      </div>
      </div>
    
  );
}

export default Compras1;