import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "./MujeresProducto.css";
import "slick-carousel/slick/slick.css";
import { useCart } from "../../components/Carrito/CartContext";
import { useCurrency } from "../../components/MonedaContext"; // Import the currency hook
import "slick-carousel/slick/slick-theme.css";

const MujeresProducto = () => {
  const { carrito, setCarrito } = useCart();
  const { isUSD, convertToUSD, formatPrice } = useCurrency(); // Use the currency hook
  const navigate = useNavigate();

    
  // Helper function to clean price string
  const cleanPrice = (price) => {
    // Remove $ and convert to number
    return price.replace(/[,$]/g, '');
  };

  // Componentes para las flechas personalizadas (unchanged)
  const CustomPrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block", position: "absolute", left: "8px", top: "45%", cursor: "pointer", zIndex: 2 }}
        onClick={onClick}
      >
        <i className="ri-arrow-left-circle-fill" style={{ color: "#1e40af", fontSize: "30px" }}></i>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block", position: "absolute", right: "8px", top: "45%", cursor: "pointer", zIndex: 2 }}
        onClick={onClick}
      >
        <i className="ri-arrow-right-circle-fill" style={{ color: "#1e40af", fontSize: "30px" }}></i>
      </div>
    );
  };

  const SliderWomen = ({ productos, navigate }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <section className='events-container-women'>
        <Slider {...settings}>
          {productos.map((producto) => {
            // Clean and convert price for each product in the slider
            const cleanProductPrice = cleanPrice(producto.price);
            const productUSDPrice = convertToUSD(cleanProductPrice);

            return (
              <div
                key={producto.id}
                className="event-card-women"
                onClick={() => navigate(`/producto/${producto.id}`)}
                style={{ cursor: "pointer" }}
              >
                <img src={producto.img} alt={producto.title} />
                <h4>{producto.title}</h4>
                <div className="precio-mujeres">
                  <h5>{producto.description}</h5>
                  <p>
                    {formatPrice(
                      cleanProductPrice, 
                      productUSDPrice
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    );
  };

  // Obtener el id del producto desde la URL
  const { id } = useParams();
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  // Lista de productos 
  const productos = [
    {
      id: 1,
      img: "/assets/679005-500-500.webp",
      title: "AIR JORDAN 1 HIGH METHOD OF MAKE",
      description: "Women's footwear",
      price: "1004950",
      material: "Leather and suede",
      moreDescription: "This model, inspired by elegance and functionality, goes further so that you stand out with confidence. Suede details and a wraparound design combine for a modern and versatile look. We play with soft finishes and daring proportions, highlighting every detail to achieve a unique design that fuses fashion and functionality, ideal for women looking for comfort without giving up style.",
    },
    {
      id: 2,
      img: "/assets/677567-500-500.webp",
      title: "NIKE VICTORI ONE",
      description: "Women's flip flops",
      price: "199950",
      material: "Plastic and rubber",
      moreDescription: "Crafted for casual comfort and ease, this model blends practicality with lightweight design. The durable plastic and rubber materials ensure resilience, while its minimalist style is perfect for laid-back outings. Whether you're heading to the beach or relaxing by the pool, these flip flops are designed for women who value both functionality and carefree fashion.",
    },
    {
      id: 3,
      img: "/assets/678301-500-500.webp",
      title: "NIKE AIR MAX SC",
      description: "Women's footwear",
      price: "564950",
      material: "Fabric and rubber",
      moreDescription: "This model combines breathable fabric with durable rubber soles for a perfect balance of comfort and performance. Designed to adapt to your daily needs, its lightweight construction and modern aesthetic make it an ideal choice for women on the go. With a focus on flexibility and style, this footwear is perfect for tackling everyday adventures with confidence.",
    },
    {
      id: 4,
      img: "/assets/678274-500-500.webp",
      title: "W NIKE ZOOM BELLA 6 PRM",
      description: "Women's footwear",
      price: "524950",
      material: "Synthetic and rubber",
      moreDescription: "Engineered with high-quality synthetic materials and robust rubber soles, this model is designed for durability and support. Its sleek design offers a versatile option for any occasion, providing a modern look that doesn’t sacrifice comfort. Perfect for women seeking reliable and stylish footwear for their busy lifestyles.",
    },
    {
      id: 5,
      img: "/assets/678936-500-500.webp",
      title: "AIR JORDAN 1 LOW SE",
      description: "Women's footwear",
      price: "834950",
      material: "Leather and fabric",
      moreDescription: "Combining premium leather with soft fabric elements, this model offers the perfect fusion of sophistication and comfort. Its durable construction and elegant design make it a versatile addition to any wardrobe. Ideal for women looking for stylish footwear that transitions effortlessly from casual to formal settings.",
    },
    {
      id: 6,
      img: "/assets/677786-500-500.webp",
      title: "NIKE COURT VISION ALTA",
      description: "Women's footwear",
      price: "254950",
      material: "Leather and synthetic",
      moreDescription: "Crafted with a blend of genuine leather and high-performance synthetic materials, this model offers a unique combination of style and durability. Its ergonomic design ensures all-day comfort, while the modern aesthetic makes it a standout choice for women who prioritize both elegance and practicality.",
    },
  ];


  // Buscar el producto con el id correspondiente
  const producto = productos.find((producto) => producto.id.toString() === id);

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  const cleanProductPrice = cleanPrice(producto.price);
  const usdPrice = convertToUSD(cleanProductPrice);

  const addToCart = () => {
    if (producto) {
      if (!selectedColor || !selectedSize) {
        alert("Please select a color and size before adding to cart.");
        return;
      }
  
      setCarrito((prevCarrito) => {
        const productoEnCarrito = prevCarrito.find(
          (item) =>
            item.id === producto.id &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
        );
  
        if (!productoEnCarrito) {
          const updatedCart = [
            ...prevCarrito,
            { ...producto, selectedColor, selectedSize },
          ];
          console.log("Producto agregado:", updatedCart);
          return updatedCart;
        } else {
          alert("This product with the selected color and size is already in the cart.");
          return prevCarrito;
        }
      });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [productoSeleccionado, setProductoSeleccionado] = useState(productos[0]);

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  
  return (
    <div>
    <main className="contenido-mujeres">
      {/* Botón para regresar */}
      <button className="boton-regresar-women" onClick={() => navigate(-1)}>
        <i className="ri-arrow-left-line"></i>
        <span className="text-women">Return</span>
      </button>
      {/* Producto destacado */}
      <div className="ver-producto-mujer">
        <img src={producto.img} alt={producto.title} />
        <div className="info-producto-mujer">
          <h3>{producto.title}</h3>
          <h4 className="info-producto-mujer-parrafo2">{producto.description}</h4>
          <h4 className="material-producto-mujer">
            Main material: {producto.material}
          </h4>
          <p>{formatPrice(producto.price,  usdPrice)}</p>
          <div className="color-talla">
            <select name="color" id="color" className="select-mujeres" onChange={(e) => setSelectedColor(e.target.value)}>
              <option value="opcionColor">Color</option>
              <option value="Pink">Pink</option>
              <option value="Black">Black</option>
              <option value="Sky-Blue">Sky-Blue</option>
              <option value="Purple">Purple</option>
              <option value="White">White</option>
              <option value="Brown">Brown</option>
              <option value="Yellow">Yellow</option>
              <option value="Red">Red</option>
              <option value="Orange">Orange</option>
              <option value="Green">Green</option>
            </select>
            <select name="talla" id="talla" className="select-mujeres" onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="opcionTalla">Size</option>
              <option value="5 US">Size 5 US</option>
              <option value="6 US">Size 6 US</option>
              <option value="7 US">Size 7 US</option>
              <option value="8 US">Size 8 US</option>
              <option value="9 US">Size 9 US</option>
              <option value="10 US">Size 10 US</option>
              <option value="33 EU">Size 33 EU</option>
              <option value="34 EU">Size 34 EU</option>
              <option value="35 EU">Size 35 EU</option>
              <option value="35 EU">Size 36 EU</option>
              <option value="36 EU">Sieze 37 EU</option>
              <option value="37 EU">Size 38 EU</option>
              <option value="38 EU">Size 39 EU</option>
            </select>
          </div>
          <h4 className="ver-mas-mujeres" onClick={openModal}>
            See more product information
          </h4>
          <div className="boton-mujeres" onClick={addToCart}>
            <button className="carrito-mujeres">
              <i className="ri-shopping-cart-line"></i> Add to cart
            </button>
          </div>
          
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-mujer">
            <button className="close-modal" onClick={closeModal}>
              &times; {/* Representación de la "x" */}
            </button>
            <h3>Descripción:</h3>
            <p>{producto.moreDescription}</p>
          </div>
        </div>
      )}

      <hr className="division-productos-mujeres" />

      
    </main>
    {/* Integración del componente SliderWomen */}
    <SliderWomen productos={productos} navigate={navigate}/>
  </div>
  );

  
};

export default MujeresProducto;