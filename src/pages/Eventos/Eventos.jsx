import React, { useState } from "react";
import './Eventos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Eventos = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  // Componente Modal
  const EventModal = ({ event, isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay-events">
        <div className="modal-content-events">
          <button className="close-button-events" onClick={onClose}>
            &times;
          </button>
          <div className="modal-header-events">
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
            <h4 className="modal-body-events-title">Descripción</h4>
            <p className="modal-body-events-subtitle">{event.description}</p>
          </div>
        </div>
      </div>
    );
  };

    
  // Componentes para las flechas personalizadas
  const CustomPrevArrow = (props) => {
    // eslint-disable-next-line react/prop-types
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "-30px", zIndex: 2 }}
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
        style={{ ...style, display: "block", right: "-35px", zIndex: 2 }}
        onClick={onClick}
      >
        &#8250;
      </div>
    );
  };

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

  
    return (
        <>
           <div className='container-event'>
                <h1 className='title-event'>Sé el primero en enterarte de nuestros eventos</h1>

                <div className='event-image'>
                    <img
                        src="assets/header.jpg"
                        alt="Evento principal"
                        className="img-event"
                    />
                </div>


                <section className='events-carrucel'>
                    <h2 className="events-carrucel-subtitle">Próximos Eventos</h2>
                    <Slider {...settings}>
                        {events.map((event, index) => (
                        <div
                            className="event-card-carrucel"
                            key={index}
                            onClick={() => openModal(event)}
                        >
                            <img src={event.image} alt={event.title} className="event-card-carrucel-img"/>
                            <h3 className="event-card-carrucel-subtitle">{event.title}</h3>
                            <p className="event-card-carrucel-pf">{event.date}</p>
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
    )
}