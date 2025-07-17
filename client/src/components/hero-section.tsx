import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import logoImage from "@assets/ChatGPT Image Jul 14, 2025, 01_49_41 PM_1752533531371.png";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 11,
    days: 20,
  });

  useEffect(() => {
    // Calculate time until July 4, 2026
    const targetDate = new Date("2026-07-04T00:00:00");
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        
        setTimeLeft({ years, months, days });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 86400000); // Update daily

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-patriot-navy via-patriot-blue to-patriot-red min-h-screen flex items-center pt-16 overflow-hidden">
      {/* PBS-style Banner Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-patriot-navy/95 via-patriot-blue/90 to-patriot-red/95"></div>
      
      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${8 + Math.random() * 12}px`
            }}
          >
            ⭐
          </div>
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
        {/* Main Hero Banner - PBS Style */}
        <div className="text-center mb-8">
          {/* Primary Title Banner */}
          <div className="bg-patriot-red/90 backdrop-blur-sm border-4 border-white/40 rounded-3xl p-8 mb-8 shadow-2xl">
            <div className="mb-6">
              <img
                src={logoImage}
                alt="Hannah Magnelli America250"
                className="mx-auto w-full max-w-lg h-auto filter drop-shadow-xl"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
              AMERICA ANTHEM TOKEN
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-4">
              CELEBRATING AMERICA'S BIRTHDAY
            </div>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Join the historic celebration with professional mezzo soprano <strong>Hannah Magnelli's</strong> revolutionary tokenized National Anthem performance
            </p>
          </div>

          {/* Call-to-Action Banner - PBS Style */}
          <div className="bg-white/95 text-patriot-navy border-4 border-patriot-red rounded-2xl p-6 mb-8 shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-black mb-4 text-patriot-red">
              🎆 CELEBRATE AMERICA'S BIRTHDAY BY JOINING THE TOKEN LAUNCH! 🎆
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-4 text-patriot-navy">
              WATCH HANNAH'S PERFORMANCE LIVE • JOIN THE EXCLUSIVE WAITLIST • BE PART OF HISTORY
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base font-semibold">
              <span className="bg-patriot-red text-white px-4 py-2 rounded-full">🎵 EXCLUSIVE NFT COLLECTION</span>
              <span className="bg-patriot-blue text-white px-4 py-2 rounded-full">🏛️ OFFICIAL AMERICA250 PARTNERSHIP</span>
              <span className="bg-yellow-500 text-patriot-navy px-4 py-2 rounded-full">⚡ LIMITED 1,776 TOKENS</span>
            </div>
          </div>

          {/* Token Launch Information - PBS Style */}
          <div className="bg-gradient-to-r from-patriot-blue/90 to-patriot-red/90 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 mb-8 shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-300">
              🗓️ TOKEN LAUNCH: JULY 4TH, 2026 • 8PM ET
            </h3>
            
            {/* Countdown Display */}
            <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-black text-yellow-300">{timeLeft.years}</div>
                <div className="text-sm font-bold opacity-90">YEARS</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-black text-yellow-300">{timeLeft.months}</div>
                <div className="text-sm font-bold opacity-90">MONTHS</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-black text-yellow-300">{timeLeft.days}</div>
                <div className="text-sm font-bold opacity-90">DAYS</div>
              </div>
            </div>

            {/* Token Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="bg-white/15 rounded-lg p-3">
                <div className="text-lg font-bold">1,776</div>
                <div className="text-xs opacity-90">Total Tokens</div>
              </div>
              <div className="bg-white/15 rounded-lg p-3">
                <div className="text-lg font-bold">0.25 ETH</div>
                <div className="text-xs opacity-90">Price Each</div>
              </div>
              <div className="bg-white/15 rounded-lg p-3">
                <div className="text-lg font-bold">🎭</div>
                <div className="text-xs opacity-90">Mezzo-Soprano</div>
              </div>
              <div className="bg-white/15 rounded-lg p-3">
                <div className="text-lg font-bold">🏛️</div>
                <div className="text-xs opacity-90">America250</div>
              </div>
            </div>
          </div>

          {/* Action Buttons - PBS Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("video")}
              className="bg-patriot-red hover:bg-red-700 text-white font-black py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl border-2 border-white/50"
            >
              <i className="fas fa-play mr-3"></i>
              🎵 WATCH PERFORMANCE NOW
            </Button>
            
            <Button
              onClick={() => scrollToSection("token")}
              className="bg-yellow-500 hover:bg-yellow-400 text-patriot-navy font-black py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl border-2 border-patriot-navy/30"
            >
              <i className="fas fa-star mr-3"></i>
              🚀 JOIN WAITLIST TODAY
            </Button>
          </div>

          {/* Footer Information */}
          <div className="mt-8 text-center opacity-95">
            <p className="text-sm md:text-base font-medium">
              Official partnership with <strong>America250.org</strong> • Powered by blockchain technology • #America250Token
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
