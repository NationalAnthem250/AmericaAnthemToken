import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { 
  formatNumber, 
  formatCurrency, 
  formatDate, 
  formatRelativeTime, 
  formatPercent, 
  formatCompactNumber, 
  formatTokenAmount,
  formatList 
} from '@/lib/i18n-formatters';

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
  formatters: {
    number: (value: number) => string;
    currency: (value: number, currency?: string) => string;
    date: (date: Date | string, style?: 'short' | 'long' | 'full') => string;
    relativeTime: (date: Date | string) => string;
    percent: (value: number) => string;
    compactNumber: (value: number) => string;
    tokenAmount: (amount: number) => string;
    list: (items: string[], type?: 'conjunction' | 'disjunction') => string;
  };
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

  // Create formatter shortcuts that automatically use current language
  const formatters = {
    number: (value: number) => formatNumber(value, language),
    currency: (value: number, currency?: string) => formatCurrency(value, language, currency),
    date: (date: Date | string, style?: 'short' | 'long' | 'full') => formatDate(date, language, style),
    relativeTime: (date: Date | string) => formatRelativeTime(date, language),
    percent: (value: number) => formatPercent(value, language),
    compactNumber: (value: number) => formatCompactNumber(value, language),
    tokenAmount: (amount: number) => formatTokenAmount(amount, language),
    list: (items: string[], type?: 'conjunction' | 'disjunction') => formatList(items, language, type),
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL, formatters }}>
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