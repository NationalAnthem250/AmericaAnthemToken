import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import flagBackground from "@assets/generated_images/American_flag_waving_background_be7a2567.png";
import CountdownTimer from "./countdown-timer";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaTelegram, FaDiscord } from "react-icons/fa";

export default function HeroSection() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden">
      {/* Animated American Flag Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={flagBackground}
          alt="American Flag waving majestically"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 object-cover w-full h-full animate-pulse"
          style={{
            animation: 'flagWave 4s ease-in-out infinite, slowZoom 20s ease-in-out infinite alternate'
          }}
        />
      </div>

      {/* Animated Stars Field */}
      <div className="absolute inset-0 w-full h-full z-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
      </div>

      {/* Floating Patriotic Elements */}
      <div className="absolute inset-0 w-full h-full z-15 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animation: `floatUpDown ${8 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {i % 3 === 0 ? '⭐' : i % 3 === 1 ? '🇺🇸' : '🦅'}
          </div>
        ))}
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-20"></div>

      {/* Social Media Icons - Vertical Right Side (Desktop) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-patriot-gold/30">
          <a 
            href="https://twitter.com/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Follow us on Twitter"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://facebook.com/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Follow us on Facebook"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.instagram.com/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://youtube.com/@anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Subscribe to our YouTube"
          >
            <FaYoutube />
          </a>
          <a 
            href="https://t.me/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Join our Telegram"
          >
            <FaTelegram />
          </a>
          <a 
            href="https://discord.gg/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Join our Discord"
          >
            <FaDiscord />
          </a>
        </div>
      </div>

      {/* Social Media Icons - Horizontal Mobile Version */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 block lg:hidden">
        <div className="flex space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-patriot-gold/30">
          <a 
            href="https://twitter.com/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Follow us on Twitter"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://facebook.com/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Follow us on Facebook"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.instagram.com/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://youtube.com/@anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Subscribe to our YouTube"
          >
            <FaYoutube />
          </a>
          <a 
            href="https://t.me/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Join our Telegram"
          >
            <FaTelegram />
          </a>
          <a 
            href="https://discord.gg/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Join our Discord"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
      
      {/* Patriotic border elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-red via-patriot-gold to-patriot-blue z-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-patriot-blue via-patriot-gold to-patriot-red z-30"></div>
      
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="text-center">
          {/* Main Hero Content */}
          <div className="space-y-8">
            {/* Clear Mission Statement */}
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                WHAT IS <span className="text-patriot-gold">ANTHEM250?</span>
              </h1>
              <div className="text-lg md:text-xl leading-relaxed mb-6 space-y-4">
                <p className="text-sky-300 font-semibold">
                  A commemorative digital collectible celebrating America's 250th anniversary in 2026
                </p>
                <p className="text-gray-200">
                  Professional mezzo soprano <span className="text-patriot-gold font-bold">Hannah Magnelli</span> has recorded 
                  a beautiful rendition of our National Anthem to honor this historic milestone
                </p>
                <p className="text-gray-300 text-base">
                  Own a piece of American history as we celebrate 250 years of freedom, independence, and the enduring spirit of our great nation
                </p>
              </div>
              
              {/* Token Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-patriot-gold/30">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-base">
                      <span className="text-red-600">250</span><span className="text-white">ST</span><span className="text-blue-600">AR</span> <span className="text-white">Token</span>
                    </span>
                    <span className="text-white font-bold text-xl">$17.76</span>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between">
                      <span className="text-white">Total Supply:</span>
                      <span className="text-white">1,776,000 tokens</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-white">Network:</span>
                      <span className="text-white">Solana</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Countdown Timer */}
            <div className="max-w-2xl mx-auto mb-8">
              <CountdownTimer />
            </div>
            
            {/* Clear Call to Action */}
            <div className="text-center">
              <div className="bg-patriot-red/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-patriot-red/30 mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  🇺🇸 Join America's Historic Celebration
                </h3>
                <p className="text-gray-300 mb-4">
                  Be part of the largest patriotic milestone in our lifetime - America's 250th birthday
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('onboarding');
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Learn How to Participate
                </button>
              </div>
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
