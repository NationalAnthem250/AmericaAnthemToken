import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { getTranslations } from '@/translations/registry';

// Build a Set of all English translation strings for exact matching
function buildEnglishStringSet(): Set<string> {
  const strings = new Set<string>();
  
  function extractStrings(obj: any, visited = new WeakSet()) {
    if (!obj || typeof obj !== 'object' || visited.has(obj)) return;
    visited.add(obj);
    
    for (const value of Object.values(obj)) {
      if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed) strings.add(trimmed);
      } else if (typeof value === 'object') {
        extractStrings(value, visited);
      }
    }
  }
  
  const translations = getTranslations();
  extractStrings(translations.en || {});
  return strings;
}

// Brand terms and technical terms that should never be translated
const IGNORE_TERMS = new Set([
  'NAT250',
  'NFT',
  'NFTs',
  'Solana',
  'SOL',
  'America250',
  'Hannah Magnelli',
  'National Anthem 250',
  'Token',
  'MoonPay',
  'Crossmint',
  'Stripe',
  'Phantom',
  'Solflare',
  'Discord',
  'Telegram',
  'Twitter',
  'Facebook',
  'LinkedIn',
  'GitHub',
  'API',
  'USD',
  '$',
  '1.77',
  '1,776,000,000',
  '2026',
  '2024',
  '2025'
]);

export function UntranslatedDetector() {
  const { language } = useLanguage();
  const [untranslatedElements, setUntranslatedElements] = useState<Element[]>([]);
  const [englishStrings, setEnglishStrings] = useState<Set<string>>(new Set());

  // Build the English string set once on mount
  useEffect(() => {
    setEnglishStrings(buildEnglishStringSet());
  }, []);

  useEffect(() => {
    // Only run in development mode
    if (import.meta.env.MODE !== 'development') return;
    
    // Only check for untranslated text when NOT in English mode
    if (language === 'en') {
      setUntranslatedElements([]);
      return;
    }

    const detectUntranslatedText = () => {
      const elements: Element[] = [];
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            // Skip script and style tags
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') {
              return NodeFilter.FILTER_REJECT;
            }
            
            // Check if element has ignore attribute
            if (parent.hasAttribute('data-i18n-ignore')) {
              return NodeFilter.FILTER_REJECT;
            }
            
            const text = node.textContent?.trim() || '';
            
            // Skip empty text
            if (!text) return NodeFilter.FILTER_REJECT;
            
            // Skip if it's a brand/technical term
            if (IGNORE_TERMS.has(text)) {
              return NodeFilter.FILTER_REJECT;
            }
            
            // Skip pure numbers, dates, and prices
            if (/^[\d,.$%\s-]+$/.test(text)) {
              return NodeFilter.FILTER_REJECT;
            }
            
            // Check if this exact text exists in the English translations
            // This means the component is showing English text instead of a translation
            if (englishStrings.has(text)) {
              return NodeFilter.FILTER_ACCEPT;
            }
            
            return NodeFilter.FILTER_REJECT;
          }
        }
      );

      let node;
      while ((node = walker.nextNode())) {
        const parent = node.parentElement;
        if (parent && !elements.includes(parent)) {
          elements.push(parent);
        }
      }
      
      setUntranslatedElements(elements);
    };

    // Detect after a delay to let translations load
    const timer = setTimeout(detectUntranslatedText, 1000);
    
    // Re-detect when language changes
    return () => clearTimeout(timer);
  }, [language, englishStrings]);

  useEffect(() => {
    // Apply visual highlighting to untranslated elements
    untranslatedElements.forEach(el => {
      el.classList.add('untranslated-text');
    });
    
    return () => {
      // Clean up highlights
      document.querySelectorAll('.untranslated-text').forEach(el => {
        el.classList.remove('untranslated-text');
      });
    };
  }, [untranslatedElements]);

  // Only show in development mode and when not in English
  if (import.meta.env.MODE !== 'development' || language === 'en') return null;

  return (
    <>
      {untranslatedElements.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-yellow-500 text-black p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center gap-2 mb-2">
            <i className="fas fa-exclamation-triangle"></i>
            <span className="font-bold">Untranslated Text Detected</span>
          </div>
          <p className="text-sm">
            {untranslatedElements.length} element(s) contain untranslated text.
            They are highlighted in yellow.
          </p>
          <p className="text-xs mt-1 opacity-75">
            (Showing in {language.toUpperCase()} mode but displaying English text)
          </p>
          <button
            onClick={() => {
              console.log('Untranslated elements in', language.toUpperCase(), 'mode:');
              console.log('Total count:', untranslatedElements.length);
              untranslatedElements.forEach(el => {
                const text = el.textContent?.trim();
                console.log(`- "${text}" (${el.tagName} ${el.className})`);
              });
            }}
            className="mt-2 text-xs underline"
          >
            Log to Console
          </button>
        </div>
      )}
    </>
  );
}