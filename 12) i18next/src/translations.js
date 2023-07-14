import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TRANSLATIONS_ES } from './translations/es-ES.js';
import { TRANSLATIONS_US } from './translations/en-US.js';
import { TRANSLATIONS_IT } from './translations/it-IT.js';
import { TRANSLATIONS_FR } from './translations/fr-FR.js';
import { TRANSLATIONS_DE } from './translations/de-DE.js';

const lng = navigator.language; // es-ES
// format {ISO 639-1}-{ISO 3166-2} recommended
// http://www.lingoes.net/en/translator/langcode.htm
i18next.use(initReactI18next).init({
  lng,
  resources: {
    'es-ES': {
      translation: TRANSLATIONS_ES
    },
    'en-US': {
      translation: TRANSLATIONS_US
    },
    'it-IT': {
      translation: TRANSLATIONS_IT
    },
    'fr-FR': {
      translation: TRANSLATIONS_FR
    },
    'de-DE': {
      translation: TRANSLATIONS_DE
    }
  }
});
