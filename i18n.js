import NextI18Next from 'next-i18next';
import { initReactI18next } from 'react-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['tr'],
  use: [initReactI18next], // Pass initReactI18next
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  localeSubpaths: {
    tr: 'tr',
    en: 'en'
  }
});

export default NextI18NextInstance;
