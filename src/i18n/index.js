import i18n from 'i18next';
import BrowserLanguageDetector from 'i18next-browser-languagedetector';

import en from './resources/en';

i18n
  .use(BrowserLanguageDetector)
  .init({
    debug: process.env.NODE_ENV === 'development' ? true : false,

    // lng: 'en',
    fallbackLng: 'en'
  });

i18n.addResourceBundle('en', 'translations', en, true, true);

export default i18n;
