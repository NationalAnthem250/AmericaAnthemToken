import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@assets/IMG_4165_1754527909411.jpeg";
import CountdownTimer from "./countdown-timer";

export default function HeroSection() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden">
      {/* Full-screen image background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={heroImage}
          alt="Hannah Magnelli performing the National Anthem"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{
            width: '102.72216797vw',
            height: '102.72216797vh',
            objectFit: 'cover'
          }}
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-20"></div>
      
      {/* Patriotic border elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-red via-patriot-gold to-patriot-blue z-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-blue via-patriot-gold to-patriot-red z-30"></div>
      
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="text-center">
          {/* Main Hero Content */}
          <div className="space-y-8">
            {/* Main Title */}
            <div className="max-w-4xl mx-auto">
              <div className="text-lg md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <h1 className="text-red-600 mb-2">
                  Own a Piece of American History
                </h1>
                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="text-blue-600 font-bold">The first-ever NFT of the US National Anthem performed by professional mezzo soprano Hannah Magnelli in commemoration of America's 250th anniversary</span>
                </p>
              </div>
              
              {/* Token Info */}
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-patriot-gold/30">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-base">
                      <span className="text-red-600">250</span><span className="text-white">ST</span><span className="text-blue-600">AR</span> <span className="text-yellow-400">Token</span>
                    </span>
                    <span className="text-yellow-400 font-bold text-xl">$17.76</span>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between">
                      <span className="text-yellow-400">Total Supply:</span>
                      <span className="text-yellow-400">1,776,000 tokens</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-yellow-400">Network:</span>
                      <span className="text-yellow-400">Solana</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Countdown Timer */}
            <div className="max-w-2xl mx-auto">
              <CountdownTimer />
            </div>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button 
                onClick={() => scrollToSection('participate')}
                className="bg-patriot-red hover:bg-patriot-red/90 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="text-yellow-400">Join</span> <span className="text-yellow-400">Waitlist</span>
              </button>
              <button 
                onClick={() => scrollToSection('video')}
                className="bg-patriot-red hover:bg-patriot-red/90 border-2 border-patriot-red px-8 py-4 rounded-xl font-bold text-base transition-all duration-300"
              >
                <span className="text-yellow-400">Watch</span> <span className="text-yellow-400">Performance</span>
              </button>
            </div>
          </div>







        </div>
      </div>
    </section>
  );
}
