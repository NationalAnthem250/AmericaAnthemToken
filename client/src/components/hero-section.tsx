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
import { useLanguage } from "@/hooks/use-language";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoSupported, setIsVideoSupported] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();
  
  // Waitlist mutation
  const waitlistMutation = useMutation({
    mutationFn: async (data: { email: string }) => {
      // Include a default name value (can be updated to collect actual name if needed)
      const requestData = {
        email: data.email,
        name: t('hero.defaultUser') // Default name for quick signup
      };
      const response = await apiRequest("POST", "/api/waitlist", requestData);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || t('hero.joinWaitlistError'));
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t("waitlist.success"),
        description: t("waitlist.successMessage"),
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: t("waitlist.error"),
        description: error.message || t("waitlist.errorMessage"),
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
{t("hero.videoNotSupported")}
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
            aria-label={t('common.followUsOnTwitter')}
          >
            <FaTwitter />
          </a>
          <a 
            href="https://facebook.com/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label={t('common.followUsOnFacebook')}
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.instagram.com/anthem250th" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label={t('common.followUsOnInstagram')}
          >
            <FaInstagram />
          </a>
          <a 
            href="https://youtube.com/@anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label={t('common.subscribeToOurYouTube')}
          >
            <FaYoutube />
          </a>
          <a 
            href="https://t.me/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label={t('common.joinOurTelegram')}
          >
            <FaTelegram />
          </a>
          <a 
            href="https://discord.gg/NTQYbXW5RX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label={t('common.joinOurDiscord')}
          >
            <FaDiscord />
          </a>
          <a 
            href="https://www.whatsapp.com/channel/0029VbBALc1DZ4LTR8A7sT3F" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label={t('common.joinOurWhatsApp')}
          >
            <FaWhatsapp />
          </a>
          <a 
            href="https://www.tiktok.com/@anthem250th" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label={t('common.followUsOnTikTok')}
          >
            <FaTiktok />
          </a>
          <a 
            href="https://www.linkedin.com/in/anthem250/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label={t('common.followUsOnLinkedIn')}
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://www.reddit.com/user/Anthem250/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label={t('common.followUsOnReddit')}
          >
            <FaReddit />
          </a>
          <a 
            href="https://www.pinterest.com/anthem250/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red-600 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label={t('common.followUsOnPinterest')}
          >
            <FaPinterest />
          </a>
          <a 
            href="https://truthsocial.com/@Anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label={t('common.followUsOnTruthSocial')}
          >
            <FaGlobe />
          </a>
          <a 
            href="https://gettr.com/user/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300 text-2xl hover:scale-110"
            aria-label={t('common.followUsOnGettr')}
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
            aria-label={t('common.followUsOnTwitter')}
          >
            <FaTwitter />
          </a>
          <a 
            href="https://facebook.com/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors duration-300 text-xl hover:scale-110"
            aria-label={t('common.followUsOnFacebook')}
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.instagram.com/anthem250th" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label={t('common.followUsOnInstagram')}
          >
            <FaInstagram />
          </a>
          <a 
            href="https://youtube.com/@anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label={t('common.subscribeToOurYouTube')}
          >
            <FaYoutube />
          </a>
          <a 
            href="https://t.me/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300 text-xl hover:scale-110"
            aria-label={t('common.joinOurTelegram')}
          >
            <FaTelegram />
          </a>
          <a 
            href="https://discord.gg/NTQYbXW5RX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label={t('common.joinOurDiscord')}
          >
            <FaDiscord />
          </a>
          <a 
            href="https://www.whatsapp.com/channel/0029VbBALc1DZ4LTR8A7sT3F" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label={t('common.joinOurWhatsApp')}
          >
            <FaWhatsapp />
          </a>
          <a 
            href="https://www.tiktok.com/@anthem250th" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label={t('common.followUsOnTikTok')}
          >
            <FaTiktok />
          </a>
          <a 
            href="https://www.linkedin.com/in/anthem250/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 transition-colors duration-300 text-xl hover:scale-110"
            aria-label={t('common.followUsOnLinkedIn')}
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://www.reddit.com/user/Anthem250/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label={t('common.followUsOnReddit')}
          >
            <FaReddit />
          </a>
          <a 
            href="https://www.pinterest.com/anthem250/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-red-600 transition-colors duration-300 text-xl hover:scale-110"
            aria-label={t('common.followUsOnPinterest')}
          >
            <FaPinterest />
          </a>
          <a 
            href="https://truthsocial.com/@Anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label={t('common.followUsOnTruthSocial')}
          >
            <FaGlobe />
          </a>
          <a 
            href="https://gettr.com/user/anthem250" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300 text-xl hover:scale-110"
            aria-label={t('common.followUsOnGettr')}
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
                {t("hero.title")}
              </h1>
              
              {/* Clear Subline */}
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                {t("hero.subtitle")}
              </p>
              
              {/* Prominent Email Capture Form */}
              <div className="bg-gradient-to-r from-patriot-red/20 to-patriot-blue/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8 border border-patriot-gold/50">
                <h3 className="text-xl md:text-2xl font-bold text-patriot-gold mb-3">
                  {t("hero.exclusiveAccess")}
                </h3>
                <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <Input
                    type="email"
                    placeholder={t("hero.emailPlaceholder")}
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
                    {waitlistMutation.isPending ? "..." : t("hero.getEarlyAccess")}
                  </Button>
                </form>
              </div>
              
              {/* Essential Quick Info Bullets */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto mb-8 border border-white/20">
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-patriot-gold text-xl">•</span>
                    <div>
                      <p className="text-white font-semibold">{t("hero.whatIsIt")}</p>
                      <p className="text-gray-300 text-sm">{t("hero.whatIsItDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-patriot-gold text-xl">•</span>
                    <div>
                      <p className="text-white font-semibold">{t("hero.howToBuy")}</p>
                      <p className="text-gray-300 text-sm">{t("hero.howToBuyDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-patriot-gold text-xl">•</span>
                    <div>
                      <p className="text-white font-semibold">{t("hero.chainRequirements")}</p>
                      <p className="text-gray-300 text-sm">{t("hero.chainRequirementsDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-patriot-gold text-xl">•</span>
                    <div>
                      <p className="text-white font-semibold">{t("hero.launchDate")}</p>
                      <p className="text-gray-300 text-sm">{t("hero.january2025")}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trust Elements */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="flex flex-wrap justify-center items-center gap-6">
                  {/* Audit Badge */}
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white font-semibold text-sm">{t("hero.auditScheduled")}</span>
                  </div>
                  
                  {/* Legal Link */}
                  <a
                    href="/terms"
                    className="text-gray-300 hover:text-white text-sm underline transition-colors"
                  >
                    {t("hero.termsConditions")}
                  </a>
                  
                  {/* Team Link */}
                  <button
                    onClick={() => scrollToSection('hannah')}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <img
                      src="https://static.wixstatic.com/media/0e0c7c_09bdf1e0833143d7a9628ceb9936f3d6~mv2.jpg/v1/fill/w_465,h_481,al_c,lg_1,q_80,enc_avif,quality_auto/image%20(2)_edited.jpg"
                      alt={t('hero.hannahMagnelliAlt')}
                      className="w-8 h-8 rounded-full object-cover border border-patriot-gold"
                    />
                    <span className="text-sm">{t('nav.meetTheTeam')}</span>
                  </button>
                  
                  {/* Press Kit */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                    className="text-gray-300 hover:text-white text-sm underline transition-colors"
                  >
                    Press Kit & Contact
                  </a>
                </div>
                
                {/* Security & Compliance Bar */}
                <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Secured on Solana
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    KYC Compliant
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    Transparent Tokenomics
                  </span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                {/* Learn How It Works Button */}
                <button 
                  onClick={() => scrollToSection('nft-faq')}
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
