import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import flagVideo from "@assets/u7663935958_full_american_flag_waving_in_the_wind_illustrated_7e3a5080-e3fc-4cc1-8477-b13c72069c5b_0_1755365095750.mp4";
import CountdownTimer from "./countdown-timer";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaTelegram, FaDiscord, FaWhatsapp, FaTiktok, FaLinkedin, FaReddit, FaPinterest, FaGlobe, FaBroadcastTower } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoSupported, setIsVideoSupported] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  // Waitlist mutation
  const waitlistMutation = useMutation({
    mutationFn: async (data: { email: string }) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to join waitlist");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to the waitlist. Check your email for confirmation.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      waitlistMutation.mutate({ email });
    }
  };

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    
    // Handle video autoplay with enhanced cross-browser support
    const handleVideoAutoplay = async () => {
      if (videoRef.current) {
        // Set up video with optimized settings for autoplay
        videoRef.current.defaultMuted = true;
        videoRef.current.muted = true;
        
        try {
          // Try to play with async/await
          await videoRef.current.play();
        } catch (error) {
          // Autoplay not supported, set up user interaction to start video
          let interactionAttempts = 0;
          const maxAttempts = 3;
          
          const startVideoOnInteraction = async () => {
            if (videoRef.current && interactionAttempts < maxAttempts) {
              interactionAttempts++;
              
              try {
                // Ensure video is muted for autoplay policies
                videoRef.current.muted = true;
                await videoRef.current.play();
                
                // Successfully played, remove listeners
                document.removeEventListener('click', startVideoOnInteraction);
                document.removeEventListener('touchstart', startVideoOnInteraction);
                document.removeEventListener('scroll', startVideoOnInteraction);
              } catch (playError) {
                if (interactionAttempts >= maxAttempts) {
                  // Fall back to static image after multiple attempts
                  setIsVideoSupported(false);
                  document.removeEventListener('click', startVideoOnInteraction);
                  document.removeEventListener('touchstart', startVideoOnInteraction);
                  document.removeEventListener('scroll', startVideoOnInteraction);
                }
              }
            }
          };
          
          // Add multiple event listeners for better coverage
          document.addEventListener('click', startVideoOnInteraction, { once: false });
          document.addEventListener('touchstart', startVideoOnInteraction, { once: false });
          document.addEventListener('scroll', startVideoOnInteraction, { once: false });
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(handleVideoAutoplay, 100);
    
    return () => {
      clearTimeout(timeoutId);
    };
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
            href="https://www.linkedin.com/in/anthem250/" 
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
          <a 
            href="https://www.pinterest.com/anthem250/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red-600 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Follow us on Pinterest"
          >
            <FaPinterest />
          </a>
          <a 
            href="https://truthsocial.com/@Anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Follow us on Truth Social"
          >
            <FaGlobe />
          </a>
          <a 
            href="https://gettr.com/user/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label="Follow us on Gettr"
          >
            <FaBroadcastTower />
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
            href="https://www.linkedin.com/in/anthem250/" 
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
          <a 
            href="https://www.pinterest.com/anthem250/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red-600 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Follow us on Pinterest"
          >
            <FaPinterest />
          </a>
          <a 
            href="https://truthsocial.com/@Anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Follow us on Truth Social"
          >
            <FaGlobe />
          </a>
          <a 
            href="https://gettr.com/user/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label="Follow us on Gettr"
          >
            <FaBroadcastTower />
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
            <div className="max-w-4xl mx-auto">
              {/* Clean, Focused Headline */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                Own a piece of American history — the first tokenized rendition of The Star-Spangled Banner.
              </h1>
              
              {/* Clear Subline */}
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Limited 250STAR collectibles celebrating America's 250th — learn, join the drop, or reserve your token today.
              </p>
              
              {/* Prominent Email Capture Form */}
              <div className="bg-gradient-to-r from-patriot-red/20 to-patriot-blue/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8 border border-patriot-gold/50">
                <h3 className="text-xl md:text-2xl font-bold text-patriot-gold mb-3">
                  Join the waitlist for exclusive presale access & a free commemorative NFT drop
                </h3>
                <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/10 border-patriot-gold/30 text-white placeholder:text-gray-400 focus:border-patriot-gold text-lg"
                    required
                    disabled={waitlistMutation.isPending}
                  />
                  <Button
                    type="submit"
                    disabled={waitlistMutation.isPending}
                    className="bg-patriot-gold hover:bg-yellow-400 text-patriot-navy px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
                  >
                    {waitlistMutation.isPending ? "Joining..." : "Get Early Access"}
                  </Button>
                </form>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                {/* Learn How It Works Button */}
                <button 
                  onClick={() => scrollToSection('nft-education')}
                  className="text-white hover:text-patriot-gold transition-colors duration-300 underline text-lg"
                >
                  Learn How It Works →
                </button>
                <span className="text-gray-400 hidden sm:inline">|</span>
                <button 
                  onClick={() => scrollToSection('video')}
                  className="text-white hover:text-patriot-gold transition-colors duration-300 underline text-lg"
                >
                  Watch the Performance →
                </button>
              </div>
              
              {/* Key Info Bar */}
              <div className="flex flex-wrap justify-center gap-8 text-center mt-12">
                <div>
                  <div className="text-2xl font-bold text-patriot-gold">$1.77</div>
                  <div className="text-sm text-gray-300">Per Token</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">1.776B</div>
                  <div className="text-sm text-gray-300">Total Supply</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-patriot-red">2026</div>
                  <div className="text-sm text-gray-300">Launch Year</div>
                </div>
              </div>
            </div>
            
            {/* Countdown Timer */}
            <div className="max-w-2xl mx-auto">
              <CountdownTimer />
            </div>
          </div>







        </div>
      </div>
    </section>
  );
}
