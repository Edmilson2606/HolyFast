import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from '../mocks/webtext'; 

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // const [language, setLanguage] = useState('br'); 
    const [language, setLanguage]  = useState(() => {
        return localStorage.getItem('language') || 'br';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const translate = (key) => {
        const keys = key.split('.');
        let result = translations[language];
        keys.forEach(k => {
            result = result[k];
        });
        return result || key;
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <AppContext.Provider value={{ language, translate, changeLanguage }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};