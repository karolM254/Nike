import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enHeader from './locales/en/header.json';
import esHeader from './locales/es/header.json';
import enLandingPage from './locales/en/landingpage.json';
import esLandingPage from './locales/es/landingpage.json';
import enFooter from './locales/en/footer.json';
import esFooter from './locales/es/footer.json';

i18n
.use(initReactI18next)
.init({
    resources: {
    en: {
        translation: {
        ...enHeader,
        ...enLandingPage, // Carga las traducciones de Header y LandingPage en inglés
        ...enFooter
        },
    },
    es: {
        translation: {
        ...esHeader,
        ...esLandingPage, // Carga las traducciones de Header y LandingPage en español
        ...esFooter
        },
    },
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma de respaldo si no se encuentra la traducción
    interpolation: {
      escapeValue: false, // React ya se encarga del escape de HTML
    },
});

export default i18n;