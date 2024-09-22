import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { Translation } from '@/Constants/Translation';
import EN from '@/I18n/Locales/EN';
import PT from '@/I18n/Locales/PT';

const resources = {
    EN: EN.default,
    PT: PT.default,
    // Add more languages here
};

i18n.use(initReactI18next).use(initReactI18next).init({
    lng: Translation.APP,
    resources,
});

export default i18n;
