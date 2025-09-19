import { useState, useEffect, ReactNode } from "react";
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
import { LanguageContext, type Language } from '@/hooks/use-language';
// Import translations from registry to avoid HMR invalidation
import { getTranslations } from '@/translations/registry';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Preserve language across HMR, fallback to localStorage, then default to English
    const initial = import.meta.hot?.data?.lang ?? (localStorage.getItem('language') as Language) ?? 'en';
    return initial;
  });

  // Preserve language state on HMR disposal
  if (import.meta.hot) {
    import.meta.hot.dispose((data) => {
      data.lang = language;
    });
  }

  const isRTL = false; // No RTL languages currently supported

  // Save language preference
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);
    
    // Update HTML lang attribute
    document.documentElement.lang = newLanguage;
    
    // Update HTML dir attribute for RTL languages
    document.documentElement.dir = "ltr"; // All supported languages are LTR
  };

  // Translation function using registry to avoid HMR invalidation
  const t = (key: string): string => {
    const translations = getTranslations();
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

