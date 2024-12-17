import React, { useState, useEffect } from 'react'; // Importación de React y hooks de estado y efectos
import {  Link, useNavigate} from "react-router-dom";
import { useCart } from "../../components/Carrito/CartContext"; // Importa el contexto de carrito para acceder a los productos del carrito
import './Compras1.css'; // Importación de los estilos del componente

function Compras1() {
    const navigate = useNavigate(); // Hook para navegar
  
  // Obtiene los productos del carrito desde el contexto
  const { carrito } = useCart();

  // Inicializa el estado de las cantidades, utilizando el localStorage si está disponible
  const [cantidades] = useState(() => {
    const storedCantidades = localStorage.getItem("cantidades");
    // Si hay cantidades almacenadas en el localStorage, las usa. Si no, las inicializa a 1 para cada producto.
    return storedCantidades ? JSON.parse(storedCantidades) : carrito.reduce((acc, productos) => {
      acc[productos.id] = 1;
      return acc;
    }, {});
  });

  // Estados para controlar la visibilidad de los modales y la URL de pago
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(null);
  const [paymentUrl, setPaymentUrl] = useState('');

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    apellidos: '',
    codigoPostal: '',
    documento: '',
    telefono: '',
    direccion: ''
  });

  // Efecto para guardar las cantidades en el localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("cantidades", JSON.stringify(cantidades));
  }, [cantidades]);

  // Maneja el cambio de los campos del formulario
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  // Muestra el primer modal para confirmar la recepción de la factura electrónica
  const handlePayment = () => setShowFirstModal(true);

  // Maneja la confirmación en el primer modal, cierra el primer modal y muestra el segundo
  const handleConfirm = () => {
    setShowFirstModal(false);
    setShowSecondModal("confirm");
    handleSubmit();
  };

  // Maneja el caso de omitir la confirmación de la factura electrónica
  const handleSkip = () => {
    setShowFirstModal(false);
    setShowSecondModal("skip");
    handleSubmit();
  };

  // Cierra el primer modal
  const handleCloseFirstModal = () => setShowFirstModal(false);

  // Cierra el segundo modal
  const handleCloseSecondModal = () => setShowSecondModal(null);

  // Calcula el subtotal para un producto específico
// Calcula el subtotal para un producto específico
const calcularSubtotal = (id) => {
  const producto = carrito.find((prod) => prod.id === id);
  if (!producto) return "$0.00";

  // Limpia el precio para convertirlo en un número
  const precioNumerico = parseFloat((producto.price || "0").replace(/[^0-9.-]+/g, ""));
  if (isNaN(precioNumerico)) {
      console.error("Precio no válido para el producto con ID:", id);
      return "$0.00";
  }

  // Obtiene la cantidad correspondiente del estado `cantidades`
  const cantidad = cantidades[id] || 1;

  // Multiplica cantidad por precio para obtener el subtotal
  const subtotal = cantidad * precioNumerico;

  // Formatea el subtotal como moneda
  return subtotal.toLocaleString("es-CO", { style: "currency", currency: "COP" });
};

// Calcula el total de la compra sumando los subtotales de todos los productos
const calcularTotal = () => {
  const total = carrito.reduce((acumulado, producto) => {
      const precio = producto.price || "0";
      const precioNumerico = parseFloat(precio.replace(/[^0-9.-]+/g, ""));
      if (isNaN(precioNumerico)) {
          console.error("Precio no válido para el producto con ID:", producto.id);
          return acumulado;
      }

      // Obtiene la cantidad correspondiente del estado `cantidades`
      const cantidad = cantidades[producto.id] || 1;

      // Suma al total el precio del producto multiplicado por la cantidad
      return acumulado + cantidad * precioNumerico;
  }, 0);

  // Formatea el total como moneda
  return total.toLocaleString("es-CO", { style: "currency", currency: "COP" });
};

// Envia la solicitud para crear el pedido en la API de WooCommerce
const handleSubmit = () => {
  const url = 'https://jsdq.tech/wp-json/wc/v3/orders';
  const consumerKey = "ck_f63f22ee5e32cd9dd1306bc351b470bc74935cbc";
  const consumerSecret = 'cs_5f311caba7b327e0395c17b6196297d9c813ed31';

  // Mapea los productos del carrito para incluirlos en el cuerpo de la solicitud
  const lineItems = carrito.map((producto) => {
      const precio = producto.price || "0";
      const precioNumerico = parseFloat(precio.replace(/[^0-9.-]+/g, ""));
      const subtotal = (cantidades[producto.id] || 0) * precioNumerico;

      return {
          product_id: producto.id,
          name: producto.title, // Agrega explícitamente el nombre del producto
          quantity: cantidades[producto.id] || 1,
          total: subtotal.toFixed(2), // WooCommerce espera el total como string con 2 decimales
      };
  });

  const requestBody = JSON.stringify({
      payment_method: 'bacs',
      payment_method_title: 'Mercado Pago',
      set_paid: false,
      status: 'pending',
      billing: {
          first_name: formData.nombre,
          last_name: formData.apellidos,
          address_1: formData.direccion,
          postcode: formData.codigoPostal,
          email: formData.email,
          phone: formData.telefono,
      },
      shipping: {
          first_name: formData.nombre,
          last_name: formData.apellidos,
          address_1: formData.direccion,
          postcode: formData.codigoPostal,
      },
      line_items: lineItems,
      shipping_lines: [
          {
              method_id: 'flat_rate',
              method_title: 'Flat Rate',
              total: "0.00", // Envía 0 para el costo de envío
          },
      ],
  });

  console.log('Cuerpo de la solicitud:', requestBody);

  // Realiza la solicitud POST a la API de WooCommerce
  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(consumerKey + ':' + consumerSecret),
      },
      body: requestBody,
  })
      .then(response => response.json())
      .then(data => {
          console.log('Datos enviados con éxito:', data);
          if (data.status === 'pending' && data.payment_url) {
              setPaymentUrl(data.payment_url);
          } else {
              console.error('Error al procesar el pedido', data);
          }
      })
      .catch(error => console.error('Error al enviar los datos:', error));
};
  return (
    <div className="comprass-container">
      <button className="boton-regresar" onClick={() => navigate(-1)}>
          <i className="ri-arrow-left-line"></i> Return
        </button>
      <div className="formm-container">
        <form>
          <h2>Personal Details</h2>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleInputChange} />

          <div className="row">
            <div>
              <label htmlFor="nombre">Name</label>
              <input type="text" id="nombre" value={formData.nombre} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="apellidos">Surnames</label>
              <input type="text" id="apellidos" value={formData.apellidos} onChange={handleInputChange} />
            </div>
          </div>

          <div className="row">
            <div>
              <label htmlFor="codigoPostal">Postcode</label>
              <input type="text" id="codigoPostal" value={formData.codigoPostal} onChange={handleInputChange} />
            </div>
            <div className='documentoo'>
              <label htmlFor="documento">Document Number</label>
              <input type="text" id="documento" value={formData.documento} onChange={handleInputChange} />
            </div>
          </div>

          <div className="row">
            <div>
              <label htmlFor="telefono">Phone/mobile</label>
              <input type="text" id="telefono" value={formData.telefono} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="direccion">Address</label>
              <input type="text" id="direccion" value={formData.direccion} onChange={handleInputChange} />
            </div>
          </div>

          <button className="btn" type="button" onClick={handlePayment}>Continue Shopping</button>
        </form>
      </div>

      <div className="summary-container">
        <h2>PURCHASE SUMMARY</h2>
        <div className="summary-items">
          {carrito.length > 0 ? (
            carrito.map((productos) => (
              <div className="item" key={productos.id}>
                <div className="item-content">
                  <p>{productos.title} x {cantidades[productos.id] || 1}</p>
                  <p><strong>Subtotal:</strong> {calcularSubtotal(productos.id)}</p>
                </div>
              </div>
            ))
          ) : (
            <p>There are no products in the cart.</p>
          )}
        </div>
        <div className="total">
          <p>Total: </p>
          <p>{calcularTotal()}</p>
        </div>
      </div>

      {showFirstModal && (
        <div className="modal-principal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseFirstModal}>×</button>
            <h2>¿You want us to send the electronic invoice to your registered email?</h2>
            <div className="modal-buttons">
              <button className="btn1" type="button" onClick={handleSkip}>Skip</button>
              <button className="btn2" type="button" onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {showSecondModal === "confirm" && (
        <div className="modal-confirmar">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseSecondModal}>×</button>
            <h2>Your electronic invoice will be sent to the registered email address. ¡Thank you for your trust!</h2>
            <p>Click on the following link to complete the payment:</p>
            <a href={paymentUrl} target="_blank" rel="noopener noreferrer">Go to Mercado Pago</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Compras1;
