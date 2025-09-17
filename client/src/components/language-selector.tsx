import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" },
  { code: "zh", name: "Chinese", flag: "🇨🇳", nativeName: "中文" },
  { code: "es", name: "Spanish", flag: "🇪🇸", nativeName: "Español" },
  { code: "ru", name: "Russian", flag: "🇷🇺", nativeName: "Русский" },
  { code: "ko", name: "Korean", flag: "🇰🇷", nativeName: "한국어" },
  { code: "ja", name: "Japanese", flag: "🇯🇵", nativeName: "日本語" },
  { code: "pt", name: "Portuguese", flag: "🇧🇷", nativeName: "Português" },
  { code: "ar", name: "Arabic", flag: "🇸🇦", nativeName: "العربية" },
  { code: "tr", name: "Turkish", flag: "🇹🇷", nativeName: "Türkçe" },
  { code: "hi", name: "Hindi", flag: "🇮🇳", nativeName: "हिन्दी" },
];

export function LanguageSelector({ 
  isMobile = false,
  className = "" 
}: { 
  isMobile?: boolean;
  className?: string;
}) {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    // Here you would typically trigger a language change in your app
    // For now, we'll just update the selected state
    console.log(`Language changed to: ${language.name}`);
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