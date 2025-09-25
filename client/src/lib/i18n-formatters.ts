// Formatting utilities for internationalization

// Map languages to locale codes
const localeMap: Record<string, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  es: 'es-ES',
  ru: 'ru-RU',
  ko: 'ko-KR',
  ja: 'ja-JP',
  pt: 'pt-BR',
  ar: 'ar-SA',
  tr: 'tr-TR',
  hi: 'hi-IN'
};

export function getLocale(language: string): string {
  return localeMap[language] || 'en-US';
}

// Format number based on locale
export function formatNumber(value: number, language: string): string {
  const locale = getLocale(language);
  return new Intl.NumberFormat(locale).format(value);
}

// Format currency based on locale
export function formatCurrency(value: number, language: string, currency: string = 'USD'): string {
  const locale = getLocale(language);
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

// Format date based on locale
export function formatDate(date: Date | string, language: string, style: 'short' | 'long' | 'full' = 'long'): string {
  const locale = getLocale(language);
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = style === 'short' 
    ? { year: 'numeric', month: '2-digit', day: '2-digit' }
    : style === 'long'
    ? { year: 'numeric', month: 'long', day: 'numeric' }
    : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

// Format relative time (e.g., "2 days ago", "in 3 hours")
export function formatRelativeTime(date: Date | string, language: string): string {
  const locale = getLocale(language);
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diff = dateObj.getTime() - now.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  
  if (Math.abs(days) > 0) {
    return rtf.format(days, 'day');
  } else if (Math.abs(hours) > 0) {
    return rtf.format(hours, 'hour');
  } else if (Math.abs(minutes) > 0) {
    return rtf.format(minutes, 'minute');
  } else {
    return rtf.format(seconds, 'second');
  }
}

// Format percentage
export function formatPercent(value: number, language: string): string {
  const locale = getLocale(language);
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value);
}

// Format large numbers with abbreviations (1K, 1M, 1B)
export function formatCompactNumber(value: number, language: string): string {
  const locale = getLocale(language);
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1
  }).format(value);
}

// Format token amount (special case for NAT250 token)
export function formatTokenAmount(amount: number, language: string): string {
  const formatted = formatNumber(amount, language);
  // For 1,776,000,000 tokens, keep the symbolic meaning
  if (amount === 1776000000) {
    const year1776 = language === 'en' ? '(Commemorating 1776)' : 
                     language === 'zh' ? '（纪念1776年）' :
                     language === 'es' ? '(Conmemorando 1776)' :
                     language === 'ru' ? '(В память о 1776)' :
                     language === 'ko' ? '(1776년 기념)' :
                     language === 'ja' ? '（1776年記念）' :
                     language === 'pt' ? '(Comemorando 1776)' :
                     language === 'ar' ? '(إحياء ذكرى 1776)' :
                     language === 'tr' ? "(1776'yı Anma)" :
                     language === 'hi' ? '(1776 की स्मृति में)' : '';
    return `${formatted} ${year1776}`;
  }
  return formatted;
}

// List formatter (for joining arrays with proper conjunctions)
export function formatList(items: string[], language: string, type: 'conjunction' | 'disjunction' = 'conjunction'): string {
  const locale = getLocale(language);
  return new Intl.ListFormat(locale, { type }).format(items);
}