import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Instagram, Music } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 100);
    });
  }

  const navLinks = [
    { href: "#performers", label: "Performers" },
    { href: "#video", label: "Watch Anthem" },
    { href: "#token", label: "Token Launch" },
    { href: "#about", label: "About Hannah" },
    { href: "#america250", label: "America250" },
  ];

  const socialLinks = [
    { href: "http://instagram.com/hannah_magnelli", icon: Instagram, label: "Instagram" },
    { href: "https://open.spotify.com/artist/2YTxM1lpF3cXda1xRv4ISB", icon: Music, label: "Spotify" },
    { href: "https://m.youtube.com/channel/UCat582BBxCZxdWKsG7chlhg", icon: "fab fa-youtube", label: "YouTube" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo with America250 Branding */}
          <div className="flex items-center">
            <img
              src="https://static.wixstatic.com/media/0e0c7c_1f143d393adb45b08f096242c8f00253~mv2.png/v1/fill/w_196,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hannah%20Magnelli%20Logo.png"
              alt="Hannah Magnelli America250"
              className="h-10 w-auto"
            />
            <div className="ml-3 border-l-2 border-patriot-gold pl-3">
              <div className="text-patriot-navy font-bold text-sm">America250</div>
              <div className="text-patriot-red font-semibold text-xs">Official Partner</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-patriot-navy hover:text-patriot-red transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="http://instagram.com/hannah_magnelli"
              className="text-patriot-navy hover:text-patriot-red transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://open.spotify.com/artist/2YTxM1lpF3cXda1xRv4ISB"
              className="text-patriot-navy hover:text-patriot-red transition-colors"
              aria-label="Spotify"
            >
              <Music className="w-5 h-5" />
            </a>
            <a
              href="https://m.youtube.com/channel/UCat582BBxCZxdWKsG7chlhg"
              className="text-patriot-navy hover:text-patriot-red transition-colors"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-patriot-navy hover:text-patriot-red transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
