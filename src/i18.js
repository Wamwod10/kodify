import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruTranslation from './locales/ru/translation.json';
import uzTranslation from './locales/uz/translation.json';

i18n
  .use(initReactI18next) // react-i18next-ni o'rnatish
  .init({
    resources: {
      en: {
        translation: ruTranslation,
      },
      uz: {
        translation: uzTranslation,
      },
    },
    lng: 'uz', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
