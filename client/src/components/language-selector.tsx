import { useLanguage } from "@/hooks/use-language";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type LanguageInfo = {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
};

// Only include languages that have complete translations
const languages: LanguageInfo[] = [
  { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" },
  { code: "es", name: "Spanish", flag: "🇪🇸", nativeName: "Español" },
  { code: "zh", name: "Chinese", flag: "🇨🇳", nativeName: "中文" },
  { code: "ru", name: "Russian", flag: "🇷🇺", nativeName: "Русский" },
  { code: "ar", name: "Arabic", flag: "🇸🇦", nativeName: "العربية" },
  { code: "ko", name: "Korean", flag: "🇰🇷", nativeName: "한국어" },
];

export function LanguageSelector({ 
  isMobile = false,
  className = "" 
}: { 
  isMobile?: boolean;
  className?: string;
}) {
  const { language, setLanguage } = useLanguage();
  const selectedLanguage = languages.find(l => l.code === language) || languages[0];

  const handleLanguageChange = (lang: LanguageInfo) => {
    setLanguage(lang.code as any);
  };

  if (isMobile) {
    // Mobile version - list of buttons
    return (
      <div className={`space-y-2 ${className}`}>
        <h3 className="font-semibold text-sm text-gray-600 mb-2">Language</h3>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedLanguage.code === language.code
                  ? "bg-patriot-blue text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="truncate">{language.nativeName}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Desktop version - dropdown
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`flex items-center space-x-2 text-white hover:text-patriot-gold transition-colors ${className}`}
        >
          <span className="text-lg">{selectedLanguage.flag}</span>
          <span className="hidden lg:inline">{selectedLanguage.name}</span>
          <ChevronDown className="h-4 w-4 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={`flex items-center space-x-3 cursor-pointer ${
              selectedLanguage.code === language.code ? "bg-gray-100" : ""
            }`}
          >
            <span className="text-xl">{language.flag}</span>
            <div className="flex flex-col">
              <span className="font-medium">{language.name}</span>
              <span className="text-xs text-gray-500">{language.nativeName}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}