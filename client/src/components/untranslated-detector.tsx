import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/language-context';

export function UntranslatedDetector() {
  const { language } = useLanguage();
  const [untranslatedElements, setUntranslatedElements] = useState<Element[]>([]);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

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
            
            const text = node.textContent?.trim() || '';
            // Skip empty text, numbers only, and very short text
            if (!text || text.length < 2 || /^\d+$/.test(text)) {
              return NodeFilter.FILTER_REJECT;
            }
            
            // Check for common untranslated patterns (English text when not in English mode)
            if (language !== 'en' && containsEnglishText(text)) {
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
  }, [language]);

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

  if (process.env.NODE_ENV !== 'development') return null;

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
          <button
            onClick={() => {
              console.log('Untranslated elements:', untranslatedElements);
              untranslatedElements.forEach(el => {
                console.log('Element:', el.tagName, 'Text:', el.textContent?.trim());
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

function containsEnglishText(text: string): boolean {
  // Common English words that shouldn't appear in other languages
  const englishIndicators = [
    'the', 'and', 'or', 'for', 'with', 'from', 'to', 'of', 'in', 'on', 'at',
    'is', 'are', 'was', 'were', 'been', 'have', 'has', 'had',
    'will', 'would', 'could', 'should', 'may', 'might',
    'this', 'that', 'these', 'those', 'what', 'which', 'who', 'when', 'where', 'why', 'how',
    'Token', 'NFT', 'Network', 'Price', 'Supply', 'Launch', 'Buy', 'Join', 'Learn'
  ];
  
  const lowerText = text.toLowerCase();
  return englishIndicators.some(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    return regex.test(lowerText);
  });
}