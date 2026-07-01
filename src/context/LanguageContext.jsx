import { createContext, useContext, useState } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("lilly_lang") || "en",
  );

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "en" ? "vi" : "en";
      localStorage.setItem("lilly_lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang: (l) => {
          localStorage.setItem("lilly_lang", l);
          setLang(l);
        },
        toggle,
        t: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
