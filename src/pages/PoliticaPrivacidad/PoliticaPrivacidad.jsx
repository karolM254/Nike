import './PoliticaPrivacidad.css';

export const PoliticaPrivacidad = () => {
    return (
        <>
            <div className='privacy-policy-container'>
                <h1  className="privacy-policy-title">Políticas de privacidad</h1>
                <p className="privacy-policy-text">
                    En nombre de Nike, nos comprometemos a proteger y respetar su privacidad. A continuación, se detallan las políticas de privacidad que rigen el uso de nuestro sitio web y la recopilación de datos.
                </p>
                <h2 className="privacy-policy-subtitle">Información que recopilamos</h2>
                <p className="privacy-policy-text">
                    Recopilamos información personal que usted nos proporciona al realizar compras o completar formularios en el sitio, incluyendo nombre, dirección de correo electrónico, dirección de envío y detalles de pago.
                </p>
                <h2 className="privacy-policy-subtitle">Uso de la información</h2>
                <p className="privacy-policy-text">
                    Utilizamos su información para procesar pedidos, enviar actualizaciones sobre su compra, responder a consultas, mejorar la experiencia del usuario y enviar comunicaciones de marketing (si está suscrito).
                </p>
                <h2 className="privacy-policy-subtitle">Protección de la infromación</h2>
                <p className="privacy-policy-text">
                    Tomamos medidas de seguridad razonables para proteger la información personal contra accesos no autorizados, pérdida o divulgación.
                </p>
                <h2 className="privacy-policy-subtitle">Compartir información</h2>
                <p className="privacy-policy-text">
                    No compartimos su información personal con terceros, excepto cuando sea necesario para procesar pagos, cumplir con la ley o proteger nuestros derechos legales.
                </p>
                <h2 className="privacy-policy-subtitle">Enlaces a otros sitios</h2>
                <p className="privacy-policy-text">
                    Nuestro sitio puede contener enlaces a otros sitios. No somos responsables de las políticas de privacidad de estos sitios externos.
                </p>
                <h2 className="privacy-policy-subtitle">Consentimiento</h2>
                <p className="privacy-policy-text">
                    Al utilizar nuestro sitio web, usted acepta las prácticas descritas en estas políticas de privacidad.
                </p>
                <span className='privacy-policy-span'>Última actualización: 05 de diciembre de 2024</span>
            </div>
        </>
    );
};