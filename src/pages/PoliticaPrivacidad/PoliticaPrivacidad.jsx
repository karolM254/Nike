import { useNavigate } from 'react-router-dom';
import './PoliticaPrivacidad.css';

// Definimos el componente PoliticaPrivacidad
export const PoliticaPrivacidad = () => {
    const navigate = useNavigate(); // Hook para navegar
    return (
        <>
            <button className="boton-regresar-polity responsive" onClick={() => navigate(-1)}>
                <i className="ri-arrow-left-line"></i> Volver
            </button>
            {/* Contenedor principal de las políticas de privacidad */}
            <div className='privacy-policy-container'>
                {/* Título principal de las políticas de privacidad */}
                <h1  className="privacy-policy-title">Políticas de privacidad</h1>
                
                {/* Párrafo introductorio */}
                <p className="privacy-policy-text">
                    En nombre de Nike, nos comprometemos a proteger y respetar su privacidad. A continuación, se detallan las políticas de privacidad que rigen el uso de nuestro sitio web y la recopilación de datos.
                </p>
                
                {/* Subtítulo e información sobre la recopilación de datos */}
                <h2 className="privacy-policy-subtitle">Información que recopilamos</h2>
                <p className="privacy-policy-text">
                    Recopilamos información personal que usted nos proporciona al realizar compras o completar formularios en el sitio, incluyendo nombre, dirección de correo electrónico, dirección de envío y detalles de pago.
                </p>
                
                {/* Subtítulo e información sobre el uso de datos */}
                <h2 className="privacy-policy-subtitle">Uso de la información</h2>
                <p className="privacy-policy-text">
                    Utilizamos su información para procesar pedidos, enviar actualizaciones sobre su compra, responder a consultas, mejorar la experiencia del usuario y enviar comunicaciones de marketing (si está suscrito).
                </p>
                
                {/* Subtítulo e información sobre la protección de datos */}
                <h2 className="privacy-policy-subtitle">Protección de la información</h2>
                <p className="privacy-policy-text">
                    Tomamos medidas de seguridad razonables para proteger la información personal contra accesos no autorizados, pérdida o divulgación.
                </p>
                
                {/* Subtítulo e información sobre el compartir datos */}
                <h2 className="privacy-policy-subtitle">Compartir información</h2>
                <p className="privacy-policy-text">
                    No compartimos su información personal con terceros, excepto cuando sea necesario para procesar pagos, cumplir con la ley o proteger nuestros derechos legales.
                </p>
                
                {/* Subtítulo e información sobre enlaces externos */}
                <h2 className="privacy-policy-subtitle">Enlaces a otros sitios</h2>
                <p className="privacy-policy-text">
                    Nuestro sitio puede contener enlaces a otros sitios. No somos responsables de las políticas de privacidad de estos sitios externos.
                </p>
                
                {/* Subtítulo e información sobre el consentimiento del usuario */}
                <h2 className="privacy-policy-subtitle">Consentimiento</h2>
                <p className="privacy-policy-text">
                    Al utilizar nuestro sitio web, usted acepta las prácticas descritas en estas políticas de privacidad.
                </p>
                
                {/* Nota sobre la última actualización de las políticas */}
                <span className='privacy-policy-span'>Última actualización: 05 de diciembre de 2024</span>
            </div>
        </>
    );
};
