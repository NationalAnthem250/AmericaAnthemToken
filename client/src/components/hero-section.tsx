import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import flagVideo from "@assets/u7663935958_full_american_flag_waving_in_the_wind_illustrated_7e3a5080-e3fc-4cc1-8477-b13c72069c5b_0_1755365095750.mp4";
import CountdownTimer from "./countdown-timer";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaTelegram, FaDiscord, FaWhatsapp, FaTiktok, FaLinkedin, FaReddit } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoSupported, setIsVideoSupported] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    
    // Handle video autoplay fallback
    const handleVideoAutoplay = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log("Autoplay not supported:", error);
          // Set up user interaction to start video
          const startVideoOnInteraction = () => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {
                setIsVideoSupported(false);
              });
            }
            document.removeEventListener('click', startVideoOnInteraction);
            document.removeEventListener('touchstart', startVideoOnInteraction);
          };
          
          document.addEventListener('click', startVideoOnInteraction);
          document.addEventListener('touchstart', startVideoOnInteraction);
        }
      }
    };

    handleVideoAutoplay();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll fallback for older browsers
      if ('scrollBehavior' in document.documentElement.style) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        element.scrollIntoView();
      }
    }
  };

  return (
    <section className="relative bg-black min-h-screen ios-vh-fix flex items-center overflow-hidden">
      {/* Animated American Flag Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {isVideoSupported ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            controls={false}
            disablePictureInPicture
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 object-cover w-full h-full"
            style={{
              minWidth: '100%',
              minHeight: '100%'
            }}
            onError={() => setIsVideoSupported(false)}
          >
            <source src={flagVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          /* Fallback background for browsers that don't support video */
          <div className="absolute inset-0 bg-gradient-to-br from-patriot-red via-patriot-blue to-patriot-navy animate-pulse"></div>
        )}
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
            className="absolute text-4xl opacity-20 backface-hidden"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              WebkitAnimation: `floatUpDown ${8 + i}s ease-in-out infinite`,
              animation: `floatUpDown ${8 + i}s ease-in-out infinite`,
              WebkitAnimationDelay: `${i * 0.5}s`,
              animationDelay: `${i * 0.5}s`,
              fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, serif'
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
            href="https://www.instagram.com/anthem250th" 
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
            href="https://discord.gg/NTQYbXW5RX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Join our Discord"
          >
            <FaDiscord />
          </a>
          <a 
            href="https://www.whatsapp.com/channel/0029VbBALc1DZ4LTR8A7sT3F" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Join our WhatsApp Channel"
          >
            <FaWhatsapp />
          </a>
          <a 
            href="https://www.tiktok.com/@anthem250th" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Follow us on TikTok"
          >
            <FaTiktok />
          </a>
          <a 
            href="https://www.linkedin.com/company/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Follow us on LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://www.reddit.com/user/Anthem250/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Follow us on Reddit"
          >
            <FaReddit />
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
            href="https://www.instagram.com/anthem250th" 
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
            href="https://discord.gg/NTQYbXW5RX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Join our Discord"
          >
            <FaDiscord />
          </a>
          <a 
            href="https://www.whatsapp.com/channel/0029VbBALc1DZ4LTR8A7sT3F" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Join our WhatsApp Channel"
          >
            <FaWhatsapp />
          </a>
          <a 
            href="https://www.tiktok.com/@anthem250th" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Follow us on TikTok"
          >
            <FaTiktok />
          </a>
          <a 
            href="https://www.linkedin.com/company/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Follow us on LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://www.reddit.com/user/Anthem250/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Follow us on Reddit"
          >
            <FaReddit />
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
                THE FIRST <span className="text-patriot-gold">NATIONAL ANTHEM NFT</span>
              </h1>
              <div className="text-lg md:text-xl leading-relaxed mb-6 space-y-4">
                <p className="text-sky-300 font-semibold">
                  Patriotic digital collectible celebrating America's 250th anniversary in 2026 - the most historic milestone of our lifetime
                </p>
                <p className="text-gray-200">
                  Professional mezzo soprano <span className="text-patriot-gold font-bold">Hannah Magnelli</span> has created 
                  the world's first National Anthem NFT to commemorate American independence and freedom
                </p>
                <p className="text-gray-300 text-base">
                  Own authentic American history as we celebrate 250 years of liberty, democracy, and the enduring patriotic spirit that defines our great nation
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
            
            {/* Email Signup CTA */}
            <div className="text-center max-w-2xl mx-auto">
              <div className="bg-patriot-red/20 backdrop-blur-sm rounded-2xl p-6 border border-patriot-red/30 mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  🇺🇸 Join America's Historic Celebration
                </h3>
                <p className="text-gray-300 mb-4">
                  Be part of the largest patriotic milestone in our lifetime - America's 250th birthday
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('participate');
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-patriot-gold hover:bg-patriot-gold/90 text-patriot-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Launch Notifications
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
              <a 
                href="https://vimeo.com/1117487359?share=copy#t=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-patriot-blue hover:bg-patriot-blue/90 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg text-white inline-block"
              >
                <span className="text-yellow-400">Watch</span> <span className="text-yellow-400">on</span> <span className="text-yellow-400">Vimeo</span>
              </a>
            </div>
          </div>







        </div>
      </div>
    </section>
  );
}
