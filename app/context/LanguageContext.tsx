"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("language") as Language;
    if (storedLang) {
      setLanguage(storedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "id" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const setLanguageHandler = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage: setLanguageHandler }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
