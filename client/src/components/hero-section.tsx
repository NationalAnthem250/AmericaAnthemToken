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
    <section className="relative bg-black min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Full-screen MP4 video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          id="hero-video"
          autoPlay
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover'
          }}
          onLoadedData={() => {
            const video = document.getElementById('hero-video') as HTMLVideoElement;
            const fallback = document.getElementById('video-fallback');
            if (video && fallback) {
              // Try to play with sound first
              video.muted = false;
              video.play().catch(() => {
                // If blocked, show fallback overlay
                fallback.style.display = 'flex';
              });
            }
          }}
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Click-to-play fallback overlay */}
        <div 
          id="video-fallback" 
          className="absolute inset-0 bg-patriot-navy/90 flex items-center justify-center cursor-pointer z-20 transition-opacity duration-500"
          onClick={() => {
            const video = document.getElementById('hero-video') as HTMLVideoElement;
            const fallback = document.getElementById('video-fallback');
            if (video && fallback) {
              video.muted = false;
              video.play().then(() => {
                fallback.style.opacity = '0';
                setTimeout(() => fallback.style.display = 'none', 500);
              }).catch(() => {
                // If still blocked, try muted then unmute
                video.muted = true;
                video.play().then(() => {
                  fallback.style.opacity = '0';
                  setTimeout(() => {
                    fallback.style.display = 'none';
                    video.muted = false;
                  }, 500);
                });
              });
            }
          }}
          style={{ display: 'none' }}
        >
          <div className="text-center text-white">
            <div className="bg-patriot-red/80 backdrop-blur-sm rounded-full p-8 mb-6 inline-block">
              <i className="fas fa-play text-6xl"></i>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-shadow-lg">Experience Hannah's Performance</h3>
            <p className="text-xl text-gray-300 text-shadow-md">Click to play the National Anthem video background</p>
          </div>
        </div>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Patriotic border elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-red via-patriot-gold to-patriot-blue z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-blue via-patriot-gold to-patriot-red z-10"></div>
      
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
          
          {/* Main Title - Video Background Enhanced */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight text-shadow-lg">
              Celebrate America's 250th Anniversary 
              <span className="block text-patriot-gold">with Our Exclusive Token</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed text-shadow-md">
                Professional mezzo soprano <strong className="text-patriot-gold">Hannah Magnelli</strong> presents the ultimate patriotic tribute - 
                a tokenized version of the Star-Spangled Banner featuring authentic American landmarks and exclusive ownership
              </p>
            </div>

            {/* Enhanced Event Info Banner with Video Background */}
            <div className="bg-black/60 backdrop-blur-sm text-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto mb-8 border border-patriot-gold/50">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-patriot-gold text-patriot-navy px-6 py-2 rounded-full font-black text-lg">
                  OFFICIAL AMERICA250 PARTNERSHIP
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-shadow-md">
                JULY 4TH, 2026 • 8PM ET
              </h2>
              <p className="text-lg md:text-xl mb-4 text-shadow-sm">
                Watch the Token Launch Live from the U.S. Capitol
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
                <span className="bg-patriot-gold/30 px-4 py-2 rounded border border-patriot-gold/50">📺 STREAM LIVE</span>
                <span className="bg-patriot-gold/30 px-4 py-2 rounded border border-patriot-gold/50">🎵 EXCLUSIVE TOKEN</span>
                <span className="bg-patriot-gold/30 px-4 py-2 rounded border border-patriot-gold/50">🏛️ HISTORIC LANDMARKS</span>
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

          {/* Enhanced Call-to-Action Buttons with Gold Accent */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("video")}
              className="bg-patriot-gold hover:bg-patriot-gold-hover text-patriot-navy font-bold py-4 px-8 text-lg rounded-md transition-all shadow-lg transform hover:scale-105"
            >
              <i className="fas fa-play mr-2"></i>
              Watch Performance
            </Button>
            
            <Button
              onClick={() => scrollToSection("token")}
              className="bg-patriot-red hover:bg-patriot-red-hover text-white font-bold py-4 px-8 text-lg rounded-md transition-all shadow-lg transform hover:scale-105"
            >
              <i className="fas fa-coins mr-2"></i>
              Get Started
            </Button>
            
            <Button
              onClick={() => scrollToSection("about")}
              className="bg-patriot-blue hover:bg-patriot-blue-hover text-white font-bold py-4 px-8 text-lg rounded-md transition-all shadow-lg transform hover:scale-105"
            >
              <i className="fas fa-file-alt mr-2"></i>
              View Whitepaper
            </Button>
          </div>

          {/* Enhanced Token Launch Details with Video Background */}
          <div className="bg-black/60 backdrop-blur-sm border border-patriot-gold/50 rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2 text-shadow-md">Featuring Authentic American Landmarks</h3>
              <p className="text-gray-300 text-shadow-sm">High-resolution imagery of Liberty Bell, Capitol Dome, and historic sites</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-patriot-navy/20 backdrop-blur-sm rounded-lg p-4 border border-patriot-gold/30">
                <div className="text-2xl font-bold text-white">1,776</div>
                <div className="text-sm text-gray-300">Total Tokens</div>
                <div className="text-xs text-patriot-gold font-semibold">Limited Edition</div>
              </div>
              <div className="bg-patriot-red/20 backdrop-blur-sm rounded-lg p-4 border border-patriot-gold/30">
                <div className="text-2xl font-bold text-patriot-red">0.25 ETH</div>
                <div className="text-sm text-gray-300">Price Each</div>
                <div className="text-xs text-patriot-gold font-semibold">Fixed Price</div>
              </div>
              <div className="bg-patriot-blue/20 backdrop-blur-sm rounded-lg p-4 border border-patriot-gold/30">
                <div className="text-2xl font-bold text-patriot-blue">🎭</div>
                <div className="text-sm text-gray-300">Mezzo-Soprano</div>
                <div className="text-xs text-patriot-gold font-semibold">Professional</div>
              </div>
              <div className="bg-patriot-gold/20 backdrop-blur-sm rounded-lg p-4 border border-patriot-gold/30">
                <div className="text-2xl font-bold text-patriot-gold">🏛️</div>
                <div className="text-sm text-gray-300">America250</div>
                <div className="text-xs text-patriot-gold font-semibold">Official</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
