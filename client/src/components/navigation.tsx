import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Instagram, Music } from "lucide-react";
import { LanguageSelector } from "./language-selector";
import { useLanguage } from "@/hooks/use-language";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  // iOS detection for specific touch handling
  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  };

  // Handle scroll effect with proper cleanup
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  const navLinks = [
    { href: "video", label: t("nav.about") },
    { href: "tokenomics", label: t("nav.tokenomics") },
    { href: "participate", label: t("nav.howToJoin") },
    { href: "nft", label: t("nav.nftCollection") },
    { href: "hannah", label: t("nav.hannah") },
    { href: "america250", label: t("nav.partnership") },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      // iOS-specific scrolling behavior
      if (isIOS()) {
        // Use explicit scrollTo for better iOS compatibility
        const elementPosition = element.offsetTop - 80; // Account for fixed header
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      } else {
        // Standard scrollIntoView for other devices
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    
    // Close mobile menu after navigation with delay for iOS
    if (isIOS()) {
      setTimeout(() => setIsMobileMenuOpen(false), 100);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const socialLinks = [
    { href: "http://instagram.com/hannah_magnelli", icon: Instagram, label: t("social.instagram") },
    { href: "https://open.spotify.com/artist/2YTxM1lpF3cXda1xRv4ISB", icon: Music, label: t("social.spotify") },
    { href: "https://m.youtube.com/channel/UCat582BBxCZxdWKsG7chlhg", icon: "fab fa-youtube", label: t("social.youtube") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-patriot-red/95 backdrop-blur-sm shadow-lg" : "bg-patriot-red shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Text */}
          <div className="flex items-center">
            <h1 className="text-xl font-black text-white">
              {t("common.anthem250")}
            </h1>
          </div>

          {/* Desktop Navigation - Now shows on md+ (including iPad) */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-patriot-gold transition-colors font-medium text-sm lg:text-base"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTAs and Language Selector - Now shows on md+ (including iPad) */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <LanguageSelector />
            <Button 
              className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold text-sm lg:text-base px-3 lg:px-4"
              onClick={() => document.getElementById('participate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="fas fa-star mr-1 lg:mr-2"></i>
              {t("nav.joinWaitlist")}
            </Button>
          </div>

          {/* Mobile menu - Now only shows on small screens */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:text-patriot-gold min-h-[48px] min-w-[48px] touch-manipulation" 
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  aria-label={t("nav.openMenu")}
                  onTouchStart={(e) => {
                    if (isIOS()) {
                      e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.2)';
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (isIOS()) {
                      setTimeout(() => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }, 150);
                    }
                  }}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      onTouchStart={(e) => {
                        // iOS-specific touch handling
                        if (isIOS()) {
                          e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                        }
                      }}
                      onTouchEnd={(e) => {
                        // Reset touch feedback for iOS
                        if (isIOS()) {
                          setTimeout(() => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }, 150);
                        }
                      }}
                      className="text-lg font-medium text-patriot-navy hover:text-patriot-red transition-colors text-left py-3 px-2 rounded-md w-full min-h-[48px] flex items-center touch-manipulation"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="space-y-4 pt-4">
                    <Button 
                      className="w-full bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold min-h-[48px] touch-manipulation"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                      onClick={() => {
                        const element = document.getElementById('participate');
                        if (element) {
                          if (isIOS()) {
                            const elementPosition = element.offsetTop - 80;
                            window.scrollTo({
                              top: elementPosition,
                              behavior: 'smooth'
                            });
                            setTimeout(() => setIsMobileMenuOpen(false), 100);
                          } else {
                            element.scrollIntoView({ behavior: 'smooth' });
                            setIsMobileMenuOpen(false);
                          }
                        }
                      }}
                    >
                      <i className="fas fa-star mr-2"></i>
                      {t("nav.joinWaitlist")}
                    </Button>
                    <div className="flex items-center space-x-4 pt-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.href}
                          href={social.href}
                          className="text-patriot-navy hover:text-patriot-red transition-colors"
                          aria-label={social.label}
                        >
                          {typeof social.icon === "string" ? (
                            <i className={`${social.icon} text-xl`}></i>
                          ) : (
                            <social.icon className="w-5 h-5" />
                          )}
                        </a>
                      ))}
                    </div>
                    <div className="pt-4 border-t">
                      <LanguageSelector isMobile={true} />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
