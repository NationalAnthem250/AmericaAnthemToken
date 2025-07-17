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
    <section className="relative bg-white min-h-screen flex items-center pt-16">
      {/* Clean background with subtle patriotic accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
      
      {/* Subtle patriotic border elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-red via-white to-patriot-blue"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-blue via-white to-patriot-red"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-12">
            <img
              src={logoImage}
              alt="Hannah Magnelli America250"
              className="mx-auto w-full max-w-2xl h-auto"
            />
          </div>
          
          {/* Main Title - Clean PBS Style */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-patriot-navy mb-6 leading-tight">
              A Capitol Fourth
              <span className="block text-patriot-red">America Anthem Token</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                Celebrating America's 250th Birthday with professional mezzo soprano <strong>Hannah Magnelli's</strong> 
                historic tokenized performance of the Star-Spangled Banner
              </p>
            </div>

            {/* PBS-style Event Info Banner */}
            <div className="bg-patriot-red text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                JULY 4TH, 2026 • 8PM ET
              </h2>
              <p className="text-lg md:text-xl mb-4">
                Watch the Token Launch Live from the U.S. Capitol
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
                <span className="bg-white/20 px-4 py-2 rounded">📺 STREAM LIVE</span>
                <span className="bg-white/20 px-4 py-2 rounded">🎵 EXCLUSIVE NFT</span>
                <span className="bg-white/20 px-4 py-2 rounded">🏛️ AMERICA250 OFFICIAL</span>
              </div>
            </div>
          </div>

          {/* Countdown Timer - Clean Design */}
          <div className="bg-slate-100 border border-slate-200 rounded-lg p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-patriot-navy mb-6">
              Countdown to America's 250th Anniversary
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-patriot-red mb-2">{timeLeft.years}</div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Years</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-patriot-red mb-2">{timeLeft.months}</div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-patriot-red mb-2">{timeLeft.days}</div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Days</div>
              </div>
            </div>
          </div>

          {/* Call-to-Action Buttons - PBS Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("video")}
              className="bg-patriot-red hover:bg-red-700 text-white font-bold py-4 px-8 text-lg rounded-md transition-all shadow-lg"
            >
              <i className="fas fa-play mr-2"></i>
              Watch Performance
            </Button>
            
            <Button
              onClick={() => scrollToSection("token")}
              className="bg-patriot-blue hover:bg-blue-700 text-white font-bold py-4 px-8 text-lg rounded-md transition-all shadow-lg"
            >
              <i className="fas fa-coins mr-2"></i>
              Join Token Launch
            </Button>
          </div>

          {/* Token Launch Details */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-4xl mx-auto shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-patriot-navy">1,776</div>
                <div className="text-sm text-slate-600">Total Tokens</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-patriot-navy">0.25 ETH</div>
                <div className="text-sm text-slate-600">Price Each</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-patriot-navy">Mezzo-Soprano</div>
                <div className="text-sm text-slate-600">Professional Grade</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-patriot-navy">America250</div>
                <div className="text-sm text-slate-600">Official Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
