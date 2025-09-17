import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = 
  | "en" // English
  | "zh" // Chinese (Mandarin)
  | "es" // Spanish
  | "ru" // Russian
  | "ko" // Korean
  | "ja" // Japanese
  | "pt" // Portuguese
  | "ar" // Arabic
  | "tr" // Turkish
  | "hi"; // Hindi

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Import translations
import { translations } from "@/translations";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get saved language from localStorage or default to English
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const isRTL = language === "ar"; // Arabic is RTL

  // Save language preference
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);
    
    // Update HTML lang attribute
    document.documentElement.lang = newLanguage;
    
    // Update HTML dir attribute for RTL languages
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
  };

  // Translation function
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Fallback to English if translation not found
    if (!value && language !== "en") {
      value = keys.reduce((acc, k) => acc?.[k], translations.en as any);
    }
    
    return value || key;
  };

  useEffect(() => {
    // Set initial HTML attributes
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}