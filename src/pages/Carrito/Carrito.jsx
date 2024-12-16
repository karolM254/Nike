import React, { useState, useEffect } from "react";
import { useCart } from "../../components/Carrito/CartContext";
import { Link } from "react-router-dom";
import "./Carrito.css";

function Carrito() {
  const { carrito, setCarrito } = useCart();

  // Estado para las cantidades de productos
  const [cantidades, setCantidades] = useState(() => {
    // Intentar cargar las cantidades desde localStorage
    const storedCantidades = localStorage.getItem("cantidades");
    return storedCantidades ? JSON.parse(storedCantidades) : carrito.reduce((acc, producto) => {
      acc[producto.id] = 1;
      return acc;
    }, {});
  });

  // Guardar las cantidades en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("cantidades", JSON.stringify(cantidades));
  }, [cantidades]);

  // Funciones de actualización de cantidad
  const incrementarCantidad = (id) => {
    setCantidades((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const disminuirCantidad = (id) => {
    setCantidades((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 1),
    }));
  };

  // Funciones de cálculo de precios
  const calcularSubtotal = (id, price) => {
    const precioNumerico = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    return (cantidades[id] * precioNumerico).toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });
  };

  const calcularTotal = () => {
    // Calcular el total del carrito
    const total = carrito
      .reduce((total, producto) => {
        const precioNumerico = parseFloat(producto.price.replace(/[^0-9.-]+/g, ""));
        return total + cantidades[producto.id] * precioNumerico;
      }, 0)
      .toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
      });
  
    // Guardar el total en el localStorage
    localStorage.setItem("totalPedido", total);
  
    // Devolver el total
    return total;
  };
  

  // Función para eliminar producto del carrito
  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
    const nuevasCantidades = { ...cantidades };
    delete nuevasCantidades[id];
    setCantidades(nuevasCantidades);
  };

  return (
    <div className="carrito-compras">
      <EntregaCarrito 
        calcularTotal={calcularTotal} 
        carrito={carrito} 
      />
      
      <GridCarrito 
        carrito={carrito} 
        cantidades={cantidades} 
        incrementarCantidad={incrementarCantidad} 
        disminuirCantidad={disminuirCantidad} 
        calcularSubtotal={calcularSubtotal} 
        eliminarProducto={eliminarProducto} 
      />
    </div>
  );
}

// Componente para la sección de entrega y total
function EntregaCarrito({ calcularTotal, carrito }) {
  return (
    <div className="entrega-carrito">
      <h3 className="entregar-titulo">Entrega</h3>
      <div className="contenedor-total-entrega">
        <h4 className="total-entrega">Total:</h4>
        <h4 className="total-valor">{calcularTotal()}</h4>
      </div>
      <div className="contenedor-subtotal-entrega">
        <h4 className="subtotal-entrega">Subtotal:</h4>
        <h4 className="subtotal-valor">{calcularTotal()}</h4>
      </div>
      <button className="realizar-compra" disabled={carrito.length === 0}>
        <Link to="/Compras1">Realizar Compra</Link>
      </button>
    </div>
  );
}

// Componente para la tabla de productos en el carrito
function GridCarrito({ carrito, cantidades, incrementarCantidad, disminuirCantidad, calcularSubtotal, eliminarProducto }) {
  return (
    <div className="grid-carrito">
      <div className="header-grid">
        <h2>Producto</h2>
        <h2>Precio</h2>
        <h2>Cantidad</h2>
        <h2>Subtotal</h2>
      </div>

      {carrito.map((producto) => (
        <div className="fila-producto" key={producto.id}>
          <div className="producto-detalle">
            <img src={producto.img} alt={producto.title} className="producto-img" />
            <h3>{producto.title}</h3>
          </div>

          <p className="precio-producto">{producto.price}</p>

          <CantidadProducto 
            producto={producto} 
            cantidades={cantidades} 
            incrementarCantidad={incrementarCantidad} 
            disminuirCantidad={disminuirCantidad} 
          />

          <SubtotalEliminar 
            producto={producto} 
            calcularSubtotal={calcularSubtotal} 
            eliminarProducto={eliminarProducto} 
          />
        </div>
      ))}
    </div>
  );
}

// Componente para los controles de cantidad de un producto
function CantidadProducto({ producto, cantidades, incrementarCantidad, disminuirCantidad }) {
  return (
    <div className="cantidad-controles">
      <button
        className="disminuir-cantidad"
        onClick={() => disminuirCantidad(producto.id)}
      >
        -
      </button>
      <span className="cantidad-producto">{cantidades[producto.id]}</span>
      <button
        className="aumentar-cantidad"
        onClick={() => incrementarCantidad(producto.id)}
      >
        +
      </button>
    </div>
  );
}

// Componente para mostrar el subtotal y el botón de eliminar
function SubtotalEliminar({ producto, calcularSubtotal, eliminarProducto }) {
  return (
    <div className="subtotal-eliminar">
      <span className="subtotal-producto">
        {calcularSubtotal(producto.id, producto.price)}
      </span>
      <button
        className="eliminar-producto"
        onClick={() => eliminarProducto(producto.id)}
      >
        <i className="ri-delete-bin-line"></i>
      </button>
    </div>
  );
}

export default Carrito;
