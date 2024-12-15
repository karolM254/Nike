import React, { useState } from 'react'; // Importar useState
import { useNavigate } from "react-router-dom";
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

  // Función para manejar el clic en "Cancelar" (en el primer modal)
  const handleSkip = () => {
    setShowFirstModal(false); // Cerrar el primer modal
    setShowSecondModal(null); // Asegurarse de que no haya ningún modal visible
  };

  // Funciones para cerrar los modales
  const handleCloseFirstModal = () => {
    setShowFirstModal(false);
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(null);
  };

  const navigate = useNavigate(); // Hook para navegar

  return (
    <div className="comprass-container">
      <div className="volver-container">
        <button className="btn-volver" onClick={() => navigate(-1)}>
          <i className="ri-arrow-left-line"></i> Volver
        </button>
      </div>

      <div className="formm-container">
        <form>
          <h2 className="titulo-datos">Datos Personales</h2>
          <br />

          <label className='label-carritoo' htmlFor="email">Correo electrónico</label>
          <input className='input-carritoo' type="email" />

          <div className="row">
            <div>
              <label className='label-carrito' htmlFor="Nombre">Nombre</label>
              <input className='input-carrito' type="text" id="Nombre" />
            </div>
            <div>
              <label className='label-carrito' htmlFor="Apellidos">Apellidos</label>
              <input className='input-carrito' type="text" id="Apellidos" />
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

          <button className="btn" type="button" onClick={handlePayment}>
            Guardar y Continuar
          </button>
        </form>
      </div>

      <div className="summary-container">
        <h2>RESUMEN DE <br />COMPRA</h2>
        <h3>VALOR</h3>
      </div>

      {/* Primer Modal */}
      {showFirstModal && (
        <div className="modal-principal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseFirstModal}>x</button> {/* Botón de cerrar */}
            <h2>¿Desea continuar con el pago de su pedido o quiere seguir explorando nuestro catálogo de productos?</h2>
            <div className="modal-buttonss">
              <button className="btn1" type="button" onClick={handleSkip}>
                Cancelar
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
            <button className="close-btn" onClick={handleCloseSecondModal}>x</button> {/* Botón de cerrar */}
            <h2>
              Su factura electrónica será enviada a la dirección de email
              registrada. <br /> ¡Gracias por su confianza!
            </h2>
          </div>
        </div>
      )}
      {showSecondModal === "skip" && (
        <div className="modal-omitir">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseSecondModal}>x</button> {/* Botón de cerrar */}
            <h2>Su pago ha sido realizado. ¡Gracias por su confianza!</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Compras1;
