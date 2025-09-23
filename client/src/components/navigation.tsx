import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Music } from "lucide-react";
import { LanguageSelector } from "./language-selector";
import { useLanguage } from "@/hooks/use-language";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const lastTouchTime = useRef(0);

  // iOS detection for specific touch handling
  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  };

  // Check if device is iPhone specifically (not iPad)
  const isIPhone = () => {
    return /iPhone/.test(navigator.userAgent);
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
  }, []);

  // Universal mobile menu toggle handler
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  // Simple hamburger handler
  const handleHamburgerClick = () => {
    toggleMobileMenu();
  };

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
            <a href="/" className="text-xl font-black text-white hover:text-patriot-gold transition-colors">
              {t("common.anthem250")}
            </a>
          </div>

          {/* Desktop Navigation - Shows on md+ (including iPad) */}
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

          {/* Desktop CTAs and Language Selector - Shows on md+ (including iPad) */}
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

          {/* Mobile menu - Only shows on small screens (iPhone) */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Custom iPhone-optimized mobile menu overlay */}
            {isMobileMenuOpen && (
              <div 
                className="fixed inset-0 z-[60] bg-black bg-opacity-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div 
                  className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-col space-y-4 p-6 mt-8">
                    {/* Header with close button */}
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-bold text-patriot-navy">{t("nav.menu")}</h2>
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-patriot-navy hover:text-patriot-red p-2 text-2xl leading-none"
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                        aria-label="Close menu"
                      >
                        ✕
                      </button>
                    </div>
                    
                    {/* Navigation links */}
                    {navLinks.map((link) => (
                      <button
                        key={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          scrollToSection(link.href);
                        }}
                        onTouchStart={(e) => {
                          // iPhone-specific touch handling
                          if (isIPhone()) {
                            e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                          }
                        }}
                        onTouchEnd={(e) => {
                          // Reset touch feedback for iPhone
                          if (isIPhone()) {
                            setTimeout(() => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }, 150);
                          }
                        }}
                        className="text-lg font-medium text-patriot-navy hover:text-patriot-red transition-colors text-left py-4 px-3 rounded-md w-full min-h-[52px] flex items-center touch-manipulation active:bg-patriot-red/10"
                        style={{ 
                          WebkitTapHighlightColor: 'transparent',
                          WebkitUserSelect: 'none',
                          userSelect: 'none'
                        }}
                        type="button"
                      >
                        {link.label}
                      </button>
                    ))}
                    
                    {/* Join waitlist button */}
                    <div className="space-y-4 pt-4">
                      <Button 
                        className="w-full bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold min-h-[48px]"
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
                      
                      {/* Social links */}
                      <div className="flex items-center space-x-4 pt-4">
                        {socialLinks.map((social) => (
                          <a
                            key={social.href}
                            href={social.href}
                            className="text-patriot-navy hover:text-patriot-red transition-colors"
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {typeof social.icon === "string" ? (
                              <i className={`${social.icon} text-xl`}></i>
                            ) : (
                              <social.icon className="w-5 h-5" />
                            )}
                          </a>
                        ))}
                      </div>
                      
                      {/* Language selector */}
                      <div className="pt-4 border-t">
                        <LanguageSelector isMobile={true} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Hamburger menu button */}
            <button
              ref={hamburgerRef}
              onClick={handleHamburgerClick}
              className="text-white hover:text-patriot-gold p-3 min-h-[52px] min-w-[52px] flex items-center justify-center rounded-md touch-manipulation active:bg-patriot-gold/20"
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                WebkitUserSelect: 'none',
                userSelect: 'none',
                cursor: 'pointer',
                WebkitTouchCallout: 'none'
              }}
              aria-label={t("nav.openMenu")}
              type="button"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
            
            {/* Language selector for mobile */}
            <div className="ml-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}