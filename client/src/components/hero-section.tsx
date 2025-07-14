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
    <section className="relative bg-gradient-to-br from-[hsl(221,83%,53%)] via-white to-[hsl(0,79%,49%)] min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-white/90"></div>
      
      {/* Patriotic Stars */}
      <div className="absolute top-10 left-10 text-patriot-blue opacity-20">
        <i className="fas fa-star text-4xl"></i>
      </div>
      <div className="absolute top-32 right-20 text-patriot-red opacity-20">
        <i className="fas fa-star text-3xl"></i>
      </div>
      <div className="absolute bottom-20 left-32 text-patriot-blue opacity-20">
        <i className="fas fa-star text-5xl"></i>
      </div>
      <div className="absolute bottom-40 right-10 text-patriot-red opacity-20">
        <i className="fas fa-star text-2xl"></i>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          {/* America250 Logo */}
          <div className="mb-8">
            <img
              src={logoImage}
              alt="Hannah Magnelli America250"
              className="mx-auto w-full max-w-xl h-auto"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-patriot-navy mb-6 leading-tight">
            CELEBRATING AMERICA'S
            <span className="text-patriot-red block">250TH ANNIVERSARY</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-patriot-navy font-medium mb-8 max-w-4xl mx-auto">
            Professional mezzo soprano Hannah Magnelli brings her elevated classical training to the ultimate patriotic tribute - a tokenized version of the US National Anthem
          </p>
          
          {/* Countdown Timer */}
          <Card className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block shadow-xl">
            <p className="text-patriot-navy font-semibold mb-4">Countdown to America's 250th Anniversary:</p>
            <div className="flex justify-center space-x-6 text-center">
              <div>
                <div className="text-3xl font-black text-patriot-red">{timeLeft.years}</div>
                <div className="text-sm text-patriot-navy font-medium">YEARS</div>
              </div>
              <div>
                <div className="text-3xl font-black text-patriot-red">{timeLeft.months}</div>
                <div className="text-sm text-patriot-navy font-medium">MONTHS</div>
              </div>
              <div>
                <div className="text-3xl font-black text-patriot-red">{timeLeft.days}</div>
                <div className="text-sm text-patriot-navy font-medium">DAYS</div>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("token")}
              className="bg-patriot-red hover:bg-patriot-red-hover text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-rocket mr-2"></i>
              Launch Token Info
            </Button>
            <Button
              onClick={() => scrollToSection("anthem")}
              className="bg-patriot-blue hover:bg-patriot-blue-hover text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-play mr-2"></i>
              Watch National Anthem
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
