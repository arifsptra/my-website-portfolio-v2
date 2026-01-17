"use client";

import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`fixed bottom-[72px] right-4 z-50 flex h-9 w-9 items-center justify-center rounded-full shadow-lg transition-colors duration-300 focus:outline-none ${
        "bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
      }`}
      aria-label="Toggle Language"
    >
      <span className="text-xs font-bold uppercase">{language}</span>
    </button>
  );
};

export default LanguageToggle;
