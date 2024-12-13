import React, { useState } from 'react';
import './Compras2.css';

function Compras2() {
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

  // Función para cerrar el segundo modal
  const closeSecondModal = () => {
    setShowSecondModal(null);  
  };


  

  return (
    <div className="compras-container">
      <div className="form-container">
        <form>
          <h2>Método de pago</h2>
          
          <label htmlFor="metodo de pago">Selección de método de pago</label>
          <select>
            <option>Visa</option>
            <option>MasterCard</option>
            <option>American Express</option>
          </select>

          <label htmlFor="Nombre">Nombre del propietario</label>
          <input type="text" id="Nombre" />

          <label htmlFor="Número">Número de la tarjeta</label>
          <input type="text" id="Número" />
            
          <div className="row">
  <div>
    <label htmlFor="Fecha de Expiración">Fecha de Expiración</label>
    <input type="text" id="Fecha de Expiración" />
  </div>
  <div>
    <label htmlFor="Codigo de Seguridad">Codigo de Seguridad</label>
    <input type="text" id="Codigo de Seguridad" />
  </div>
</div>

          <button className="btn" type="button" onClick={handlePayment}>Realizar Pago</button>
        </form>
      </div>

      {/* Resumen de Compra */}
      <div className="summary-container">
        <h2>RESUMEN DE <br /> COMPRA</h2>
        <div className="summary-items">
          {Array(4).fill(null).map((_, index) => (
            <div className="item" key={index}>
              <div className="item-content">
                <img src="/assets/zapato5.jpg" alt="Mini Imagen" className="mini-image" />
                <p>Zapatos Nike <br />Calzado 40</p>
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
            <h2>¿Desea que enviemos la factura electrónica a su email registrado?</h2>
            <div className="modal-buttons">
            <button class="btn1" type="button" onClick={handleSkip}>Omitir</button>
              <button class="btn2" type="button"onClick={handleConfirm}>Confirmar</button>
              
            </div>
          </div>
        </div>
      )}

      {/* Segundo Modal: Confirmación de envío de factura */}
      {showSecondModal === "confirm" && (
        <div className="modal-confirmar">
          <div className="modal-content">
            <h2>Su factura electrónica será enviada a la dirección de email registrada. ¡Gracias por su confianza!</h2>
            
          </div>
        </div>
      )}

      {/* Segundo Modal: Confirmación de omisión */}
      {showSecondModal === "skip" && (
        <div className="modal-omitir">
          <div className="modal-content">
            <h2>Su pago ha sido realizado. ¡Gracias por su confianza!</h2>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Compras2;
