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
    { href: "#about", label: "About" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#participate", label: "How to Join" },
    { href: "#nft", label: "NFT Collection" },
    { href: "#hannah", label: "Hannah" },
    { href: "#america250", label: "Partnership" },
  ];

  const socialLinks = [
    { href: "http://instagram.com/hannah_magnelli", icon: Instagram, label: "Instagram" },
    { href: "https://open.spotify.com/artist/2YTxM1lpF3cXda1xRv4ISB", icon: Music, label: "Spotify" },
    { href: "https://m.youtube.com/channel/UCat582BBxCZxdWKsG7chlhg", icon: "fab fa-youtube", label: "YouTube" },
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
              ANTHEM250
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-patriot-gold transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold"
              onClick={() => window.open('https://discord.gg/JzntkGdA', '_blank')}
            >
              <i className="fab fa-discord mr-2"></i>
              Join Discord
            </Button>
            <Button 
              className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold"
              onClick={() => document.getElementById('participate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="fas fa-star mr-2"></i>
              Join Waitlist
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-patriot-gold">
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
                  <div className="space-y-4 pt-4">
                    <Button 
                      className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold"
                      onClick={() => window.open('https://discord.gg/JzntkGdA', '_blank')}
                    >
                      <i className="fab fa-discord mr-2"></i>
                      Join Discord
                    </Button>
                    <Button 
                      className="w-full bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy font-bold"
                      onClick={() => document.getElementById('participate')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <i className="fas fa-star mr-2"></i>
                      Join Waitlist
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
