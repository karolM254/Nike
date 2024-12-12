// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blogs.css";

export const Blogs = () => {
  // Componente Modal
  // eslint-disable-next-line react/prop-types
  const EventModal = ({ event, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <div className="modal-header">
            <img src={event.image} alt={event.title} className="modal-image" />
            <div className="modal-details">
              <h3 className="modal-title">{event.title}</h3>
              <p className="modal-date">
                <span role="img" aria-label="calendar">
                  📅
                </span>{" "}
                {event.date}
              </p>
              <p className="modal-location">
                <span role="img" aria-label="location">
                  📍
                </span>{" "}
                Estadio Mega Olímpico Nike
              </p>
            </div>
          </div>
          <div className="modal-body">
            <h4>Descripción</h4>
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    );
  };


  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = [
    {
      image: "assets/gallery-2.jpg",
      title: "Fútbol con Nike",
      date: "10 de diciembre - 2024",
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

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <div className="events-container">
        <div className="events-title">
          <h1>Sé el primero en enterarte de nuestros eventos</h1>
        </div>

        <div className="events-banner">
          <img
            src="assets/header.jpg"
            alt="Evento principal"
            className="banner-image"
          />
        </div>

        <section className="events-upcoming">
          <h2>Próximos Eventos</h2>
          <Slider {...settings}>
            {events.map((event, index) => (
              <div
                className="event-card"
                key={index}
                onClick={() => openModal(event)}
              >
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>{event.date}</p>
              </div>
            ))}
          </Slider>
        </section>
      </div>

      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

// Componentes para las flechas personalizadas
const CustomPrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-50px", zIndex: 2 }}
      onClick={onClick}
    >
      &#8249;
    </div>
  );
};

const CustomNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-30px", zIndex: 2 }}
      onClick={onClick}
    >
      &#8250;
    </div>
  );
};
