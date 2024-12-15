import React, { useState } from "react";
import './Eventos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Componente principal Eventos
export const Eventos = () => {
  // Estados para manejar el evento seleccionado y la apertura del modal
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Componente Modal para mostrar detalles de un evento
  const EventModal = ({ event, isOpen, onClose }) => {
    if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada
  
    return (
      <div className="modal-overlay-events">
        <div className="modal-content-events">
          {/* Botón para cerrar el modal */}
          <button className="close-button-events" onClick={onClose}>
            &times;
          </button>
          <div className="modal-header-events">
            {/* Imagen y detalles del evento */}
            <img src={event.image} alt={event.title} className="modal-image-events" />
            <div className="modal-details-events">
              <h3 className="modal-title-events">{event.title}</h3>
              <p className="modal-date-events">
                <span role="img" aria-label="calendar">
                  📅
                </span>{" "}
                {event.date}
              </p>
              <p className="modal-location-events">
                <span role="img" aria-label="location">
                  📍
                </span>{" "}
                Estadio Mega Olímpico Nike
              </p>
            </div>
          </div>
          <div className="modal-body-events">
            {/* Sección de descripción del evento */}
            <h4 className="modal-body-events-title">Descripción</h4>
            <p className="modal-body-events-subtitle">{event.description}</p>
          </div>
        </div>
      </div>
    );
  };

  // Flecha personalizada para navegación previa en el carrusel
  const CustomPrevArrow = (props) => {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "-30px", zIndex: 2 }}
        onClick={onClick}
      >
        &#8249; {/* Símbolo de flecha izquierda */}
      </div>
    );
  };

  // Flecha personalizada para navegación siguiente en el carrusel
  const CustomNextArrow = (props) => {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "-35px", zIndex: 2 }}
        onClick={onClick}
      >
        &#8250; {/* Símbolo de flecha derecha */}
      </div>
    );
  };

  // Configuración del carrusel de eventos
  const settings = {
    dots: true, // Habilitar puntos de navegación
    infinite: true, // Hacer que el carrusel sea infinito
    speed: 500, // Velocidad de transición entre diapositivas
    slidesToShow: 3, // Número de diapositivas visibles al mismo tiempo
    slidesToScroll: 1, // Número de diapositivas a desplazar en cada transición
    prevArrow: <CustomPrevArrow />, // Flecha personalizada para navegación previa
    nextArrow: <CustomNextArrow />, // Flecha personalizada para navegación siguiente
    responsive: [
      {
        breakpoint: 768, // Configuración para pantallas pequeñas
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Función para abrir el modal con la información del evento seleccionado
  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // Datos de los eventos
  const events = [
    {
      image: "assets/gallery-2.jpg", // Imagen del evento
      title: "Fútbol con Nike", // Título del evento
      date: "10 de diciembre - 2024", // Fecha del evento
      description:
        "Vive la emoción del fútbol con Nike. Un evento único donde el rendimiento y la innovación se encuentran en el campo. Disfruta de una experiencia deportiva inigualable con la última tecnología en calzado y equipamiento, diseñada para llevar tu juego al siguiente nivel.",
    },
    {
      image: "assets/image-1.jpg",
      title: "Baloncesto con Nike",
      date: "10 de diciembre - 2024",
      description:
        "Únete al mundo del baloncesto con Nike. Experimenta la energía y pasión por el deporte.",
    },
    {
      image: "assets/gallery-7.jpg",
      title: "Día de playa con Nike",
      date: "10 de diciembre - 2024",
      description:
        "Disfruta de un día de playa con Nike. Relax, diversión y actividades inolvidables.",
    },
  ];

  // Renderizado del componente principal
  return (
    <>
      {/* Contenedor principal */}
      <div className='container-event'>
        <h1 className='title-event'>Sé el primero en enterarte de nuestros eventos</h1>

        {/* Imagen principal del evento */}
        <div className='event-image'>
          <img
            src="assets/header.jpg"
            alt="Evento principal"
            className="img-event"
          />
        </div>

        {/* Sección del carrusel de eventos */}
        <section className='events-carrucel'>
          <h2 className="events-carrucel-subtitle">Próximos Eventos</h2>
          <Slider {...settings}>
            {events.map((event, index) => (
              <div
                className="event-card-carrucel"
                key={index}
                onClick={() => openModal(event)}
              >
                {/* Carta de cada evento */}
                <img src={event.image} alt={event.title} className="event-card-carrucel-img" />
                <h3 className="event-card-carrucel-subtitle">{event.title}</h3>
                <p className="event-card-carrucel-pf">{event.date}</p>
              </div>
            ))}
          </Slider>
        </section>
      </div>

      {/* Modal para mostrar detalles del evento seleccionado */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};
