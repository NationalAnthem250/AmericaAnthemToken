import { createContext, useContext } from "react";
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
  | "es" // Spanish
  | "zh" // Chinese (Mandarin)
  | "ru" // Russian
  | "ar" // Arabic
  | "ko" // Korean
  | "ja" // Japanese
  | "pt" // Portuguese
  | "hi" // Hindi
  | "tr"; // Turkish

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

// Hot-stable context singleton to prevent HMR context mismatches
const ctxKey = '__LanguageContext__';
export const LanguageContext = (globalThis as any)[ctxKey] || createContext<LanguageContextType>({} as LanguageContextType);
(globalThis as any)[ctxKey] = LanguageContext;

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}