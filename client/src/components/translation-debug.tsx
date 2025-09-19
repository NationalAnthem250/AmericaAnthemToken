import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/translations';

export function TranslationDebug() {
  const { language, t } = useLanguage();
  
  return (
    <div className="fixed top-16 left-4 bg-black text-white p-4 rounded-lg z-50 text-sm max-w-md">
      <div className="mb-2">
        <strong>Translation Debug:</strong>
      </div>
      <div>Current Language: {language}</div>
      <div>Available Translations: {Object.keys(translations).join(', ')}</div>
      <div>Spanish Available: {translations.es ? 'YES' : 'NO'}</div>
      <div>t('nav.about'): "{t('nav.about')}"</div>
      <div>Direct Spanish Access: "{translations.es?.nav?.about || 'NOT FOUND'}"</div>
      <div>English Fallback: "{translations.en?.nav?.about || 'NOT FOUND'}"</div>
    </div>
  );
}