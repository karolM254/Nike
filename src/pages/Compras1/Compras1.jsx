import React, { useState } from 'react'; // Importar useState
import './Compras1.css';

function Compras1() {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(null);

  // Función para manejar el clic en "Realizar Pago"
  const handlePayment = () => {
    setShowFirstModal(true);
  };

  // Función para manejar el clic en "Confirmar" (en el primer modal)
  const handleConfirm = () => {
    setShowFirstModal(false);
    setShowSecondModal("confirm");
  };

  // Función para manejar el clic en "Omitir" (en el primer modal)
  const handleSkip = () => {
    setShowFirstModal(false);
    setShowSecondModal("skip");
  };

  //Funciones para cerrar los modales
  const handleCloseFirstModal = () => {
    setShowFirstModal(false);
  };
  
  const handleCloseSecondModal = () => {
    setShowSecondModal(null);
  };
  

  return (
    <div className="comprass-container">
      <div className="form-container">
        <form>
          <h2>Datos Personales</h2>

          <label className='label-carrito' htmlFor="email">Correo electrónico</label>
          <input  className='input-carrito' type="email" />

          <div className="row">
            <div>
              <label className='label-carrito' htmlFor="Nombre">Nombre</label>
              <input className='input-carrito' type="text" id="Nombre" />
            </div>
            <div>
              <label className='label-carrito' htmlFor="Apellidos">Apellidos</label>
              <input className='input-carrito'  type="text" id="Apellidos" />
            </div>
          </div>
          <div className="row">
            <div>
              <label className='label-carrito' htmlFor="CodigoPostal">Código Postal</label>
              <input className='input-carrito' type="text" id="CodigoPostal" />
            </div>
            <div>
              <label className='label-carrito' htmlFor="Documento">Número de Documento</label>
              <input className='input-carrito' type="text" id="Documento" />
            </div>
          </div>
          <div className="row">
            <div>
              <label className='label-carrito' htmlFor="Telefono">Teléfono / Móvil</label>
              <input className='input-carrito' type="text" id="Telefono" />
            </div>
            <div>
              <label className='label-carrito' htmlFor="Direccion">Dirección</label>
              <input className='input-carrito' type="text" id="Direccion" />
            </div>
          </div>

        

          <h2>Método de pago</h2>

          <label htmlFor="metodoPago">Selección de método de pago</label>
          <select className='select-carrito'>
            <option>Seleccionar</option>
           
          </select>

          <label className='label-carrito' htmlFor="NombrePropietario">Nombre del propietario</label>
          <input className='input-carrito' type="text" id="NombrePropietario" />

          <label className='label-carrito' htmlFor="NumeroTarjeta">Número de la tarjeta</label>
          <input className='input-carrito' type="text" id="NumeroTarjeta" />

          <div className="row">
            <div>
              <label className='label-carrito' htmlFor="FechaExpiracion">Fecha de Expiración</label>
              <input className='input-carrito' type="text" id="FechaExpiracion" />
            </div>
            <div>
              <label className='label-carrito' htmlFor="CodigoSeguridad">Código de Seguridad</label>
              <input className='input-carrito' type="text" id="CodigoSeguridad" />
            </div>
          </div>

          <button className="btn" type="button" onClick={handlePayment}>
            Realizar Pago
          </button>
        </form>
      </div>

      <div className="summary-container">
        <h2>RESUMEN DE COMPRA</h2>
        <div className="summary-items">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div className="item" key={index}>
                <div className="item-content">
                  <img
                    src="/assets/zapato5.jpg"
                    alt="Mini Imagen"
                    className="mini-image"
                  />
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

     {/* Primer Modal */}
{showFirstModal && (
  <div className="modal-principal">
    <div className="modal-content">
      <button className="close-btn" onClick={handleCloseFirstModal}>×</button> {/* Botón de cerrar */}
      <h2>¿Desea que enviemos la factura electrónica a su email registrado?</h2>
      <div className="modal-buttons">
        <button className="btn1" type="button" onClick={handleSkip}>
          Omitir
        </button>
        <button className="btn2" type="button" onClick={handleConfirm}>
          Confirmar
        </button>
      </div>
    </div>
  </div>
)}

{/* Segundo Modal */}
{showSecondModal === "confirm" && (
  <div className="modal-confirmar">
    <div className="modal-content">
      <button className="close-btn" onClick={handleCloseSecondModal}>×</button> {/* Botón de cerrar */}
      <h2>
        Su factura electrónica será enviada a la dirección de email
        registrada. <br/> ¡Gracias por su confianza!
      </h2>
    </div>
  </div>
)}
{showSecondModal === "skip" && (
  <div className="modal-omitir">
    <div className="modal-content">
      <button className="close-btn" onClick={handleCloseSecondModal}>×</button> {/* Botón de cerrar */}
      <h2>Su pago ha sido realizado. ¡Gracias por su confianza!</h2>
    </div>
  </div>
)}

    </div>
  );
}

export default Compras1;
