import { useNavigate } from 'react-router-dom';
import './PoliticaPrivacidad.css';

// Definimos el componente PoliticaPrivacidad
export const PoliticaPrivacidad = () => {
    const navigate = useNavigate(); // Hook para navegar
    return (
        <>
            {/* <button className="boton-regresar-polity responsive" onClick={() => navigate(-1)}>
                <i className="ri-arrow-left-line"></i> Volver
            </button> */}
            {/* Contenedor principal de las políticas de privacidad */}
            <div className='privacy-policy-container'>
                {/* Título principal de las políticas de privacidad */}
                <h1  className="privacy-policy-title">Privacy Policy</h1>
                
                {/* Párrafo introductorio */}
                <p className="privacy-policy-text">
                On behalf of Nike, we are committed to protecting and respecting your privacy. Below are the privacy policies that govern your use of our website and data collection.
                </p>
                
                {/* Subtítulo e información sobre la recopilación de datos */}
                <h2 className="privacy-policy-subtitle">Information We Collect</h2>
                <p className="privacy-policy-text">
                We collect personal information that you provide to us when making purchases or filling out forms on the site, including name, email address, shipping address, and payment details.
                </p>
                
                {/* Subtítulo e información sobre el uso de datos */}
                <h2 className="privacy-policy-subtitle">Use of Information</h2>
                <p className="privacy-policy-text">
                We use your information to process orders, send updates about your purchase, respond to inquiries, improve the user experience, and send marketing communications (if you are subscribed).
                </p>
                
                {/* Subtítulo e información sobre la protección de datos */}
                <h2 className="privacy-policy-subtitle">Information protection</h2>
                <p className="privacy-policy-text">
                We take reasonable security measures to protect personal information from unauthorized access, loss, or disclosure.
                </p>
                
                {/* Subtítulo e información sobre el compartir datos */}
                <h2 className="privacy-policy-subtitle">Sharing information</h2>
                <p className="privacy-policy-text">
                We do not share your personal information with third parties, except as necessary to process payments, comply with the law, or protect our legal rights.
                </p>
                
                {/* Subtítulo e información sobre enlaces externos */}
                <h2 className="privacy-policy-subtitle">Links to Other Sites</h2>
                <p className="privacy-policy-text">
                Our site may contain links to other sites. We are not responsible for the privacy policies of these external sites.
                </p>
                
                {/* Subtítulo e información sobre el consentimiento del usuario */}
                <h2 className="privacy-policy-subtitle">Consent</h2>
                <p className="privacy-policy-text">
                By using our website, you are accepting the practices described in this privacy policy.
                </p>
                
                {/* Nota sobre la última actualización de las políticas */}
                <span className='privacy-policy-span'>Last updated: December 05, 2024</span>
            </div>
        </>
    );
};
